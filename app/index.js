'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var fs = _interopDefault(require('fs'));
var express = require('express');
var express__default = _interopDefault(express);
var compression = _interopDefault(require('compression'));
var historyApiFallback = _interopDefault(require('express-history-api-fallback'));
var http = _interopDefault(require('http'));

const OFF = 'off';
const ERROR = 'error';
const WARN = 'warn';
const INFO = 'info';

/* global setTimeout, clearTimeout */

function debounce(callback, timeout) {
  let id = null;
  return () => {
    clearTimeout(id);
    id = setTimeout(callback, timeout);
  };
}

/* global console */

const methods = [ERROR, WARN, INFO];
const noop = () => {};

class Log {

  constructor(output) {
    this.output = output;
    this.setLevel(OFF);
  }

  setLevel(level) {
    this.level = level;
    const {output} = this;
    for (let i = 0; i < methods.length; i++) {
      const method = methods[i];
      const enabled = methods.indexOf(level, i) >= i;
      this[method] = enabled ? output[method].bind(output) : noop;
    }
  }

  getLevel() {
    return this.level;
  }

}

var log = new Log(console);

const API_PATH = '/api';
const ROMS_PATH = `${API_PATH}/roms`;
const ROMS_FILES_PATH = `${ROMS_PATH}/files`;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ExtendableError = function (_extendableBuiltin2) {
  _inherits(ExtendableError, _extendableBuiltin2);

  function ExtendableError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, ExtendableError);

    // extending Error is weird and does not propagate `message`
    var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));

    Object.defineProperty(_this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    });

    Object.defineProperty(_this, 'name', {
      configurable: true,
      enumerable: false,
      value: _this.constructor.name,
      writable: true
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(_this, _this.constructor);
      return _possibleConstructorReturn(_this);
    }

    Object.defineProperty(_this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }

  return ExtendableError;
}(_extendableBuiltin(Error));

class ObjectNotFoundError extends ExtendableError {
}

const wordSeparatorsRegExp = /[ _-]+/g;
const whiteSpacesRegExp = / +/g;
const unsafeCharsRegExp = /[^a-zA-Z0-9 ]+/g;

function createId(name) {
  return name
    .replace(wordSeparatorsRegExp, ' ')
    .replace(unsafeCharsRegExp, '')
    .trim()
    .replace(whiteSpacesRegExp, '-')
    .toLowerCase();
}

function sanitizeName(name) {
  return name
    .replace(wordSeparatorsRegExp, ' ')
    .replace(unsafeCharsRegExp, '')
    .trim()
    .replace(whiteSpacesRegExp, '_');
}

function resolvePath(...args) {
  if (path.basename(__filename) === 'index.js') {
    return path.resolve(__dirname, ...args); // When bundled by rollup
  }
  return path.resolve(__dirname, '..', ...args);
}

function parseBoolean(value) {
  return value !== 'false' && value !== '0' && Boolean(value);
}

function removePrefix(value, prefix, caseInsensitive) {
  let currentPrefix = value.substr(0, prefix.length);

  if (caseInsensitive) {
    currentPrefix = currentPrefix.toLowerCase();
    prefix = prefix.toLowerCase();
  }

  if (currentPrefix === prefix) {
    return value.substr(prefix.length);
  }

  return value;
}

const romExtName = '.nes';
const thumbExtNames = ['.png', '.git', '.jpg', '.jpeg'];

function isRomFile(file) {
  return path.extname(file).toLowerCase() === romExtName;
}

function getRomId(romFile) {
  const extName = path.extname(romFile);
  const baseName = path.basename(romFile, extName);
  return createId(baseName);
}

function getRomName(romFile) {
  const extName = path.extname(romFile);
  return path.basename(romFile, extName).trim();
}

function compareRomsByName(rom1, rom2) {
  const name1 = removePrefix(rom1.name, 'the ', true);
  const name2 = removePrefix(rom2.name, 'the ', true);
  return name1.localeCompare(name2);
}

function findRomThumbFile(romFile) {
  const dirName = path.dirname(romFile);
  const extName = path.extname(romFile);
  const baseName = path.basename(romFile, extName);

  for (const thumbExtName of thumbExtNames) {
    const thumbFileName = baseName + thumbExtName;
    const thumbFile = path.join(dirName, thumbFileName);

    if (fs.existsSync(thumbFile)) {
      return thumbFile;
    }
  }

  return null;
}

function getPublicFileName(file) {
  const extName = path.extname(file);
  const baseName = path.basename(file, extName);
  return sanitizeName(baseName) + extName.toLowerCase();
}

class RomDb {

  constructor(romsDir, options = {}) {
    const {reloadDelay = 1000} = options;

    log.info('Creating ROM database');
    log.info('  directory: %s', romsDir);
    log.info('  reload delay: %d', reloadDelay);

    this.romsDir = romsDir;
    this.roms = [];
    this.romMap = {};
    this.fileMap = {};
    this.delayedReload = debounce(() => this.reload(), reloadDelay);
    this.reloadsCount = 0;
  }

  getRoms() {
    return this.roms;
  }

  getRom(id) {
    return this.romMap[id];
  }

  getFile(fileName) {
    return this.fileMap[fileName];
  }

  start() {
    if (this.watcher) {
      return;
    }
    const {romsDir} = this;
    if (!fs.existsSync(romsDir)) {
      log.info('Creating "%s" directory', romsDir);
      fs.mkdirSync(romsDir);
    }
    this.watcher = fs.watch(romsDir, this.delayedReload);
    this.reload();
  }

  stop() {
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
    }
  }

  reload() {
    const {romsDir} = this;
    this.reloadsCount++;
    log.info('Reloading "%s" directory (#%d)', romsDir, this.reloadsCount);

    const roms = [];
    const romMap = {};
    const fileMap = {};

    for (const romFileName of fs.readdirSync(romsDir)) {
      if (!isRomFile(romFileName)) {
        continue;
      }

      const romFile = path.resolve(romsDir, romFileName);
      const publicRomFileName = getPublicFileName(romFileName);
      fileMap[publicRomFileName] = romFile;

      const rom = {
        id: getRomId(romFileName),
        name: getRomName(romFileName),
        file: `${ROMS_FILES_PATH}/${publicRomFileName}`,
      };

      roms.push(rom);
      romMap[rom.id] = rom;

      const thumbFile = findRomThumbFile(romFile);
      if (thumbFile) {
        const publicThumbFileName = getPublicFileName(thumbFile);
        fileMap[publicThumbFileName] = thumbFile;
        rom.thumbnail = `${ROMS_FILES_PATH}/${publicThumbFileName}`;
      }
    }

    roms.sort(compareRomsByName);

    this.roms = roms;
    this.romMap = romMap;
    this.fileMap = fileMap;

    log.info('Found %d ROMs', roms.length);
  }

}

function createRouter(romDb) {
  const router = express.Router({caseSensitive: true, strict: true});

  router.get(`${ROMS_PATH}/`, (req, res) => {
    res.json(romDb.getRoms());
  });

  router.get(`${ROMS_PATH}/:id`, (req, res) => {
    const {id} = req.params;
    const rom = romDb.getRom(id);
    if (rom == null) {
      throw new ObjectNotFoundError(`ROM ${id} not found.`);
    }
    res.json(rom);
  });

  router.get(`${ROMS_FILES_PATH}/:name`, (req, res) => {
    const {name} = req.params;
    const file = romDb.getFile(name);
    if (file == null) {
      throw new ObjectNotFoundError(`File ${name} not found.`);
    }
    res.sendFile(file);
  });

  return router;
}

var defaults = {
  port: 5000, // Server port
  logLevel: OFF, // Log level (off/error/warn/info)
  morganEnabled: false, // Enables HTTP requests logging through morgan
  morganFormat: 'dev', // Morgan output format
  staticPath: resolvePath('static'), // Path to a directory with static resources
  romsPath: resolvePath('roms'), // Path to a directory with ROMs
  trustProxy: false, // Express 'trust proxy' property
  httpsRedirect: false, // Enables HTTPS redirect
};

function load(path$$1) {
  if (fs.existsSync(path$$1)) {
    const data = fs.readFileSync(path$$1, 'utf8');
    const config = parse(data);

    if (!config || typeof config !== 'object') {
      throw new Error('Invalid configuration');
    }

    return config;
  }

  return {};
}

function parse(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

const constantCase = require('constant-case');

function merge(env, values, defaults) {
  const result = {};

  for (const key in defaults) {
    result[key] = chooseValue(env, values, defaults, key);
  }

  return result;
}

function chooseValue(env, values, defaults, key) {
  const defaultValue = defaults[key];

  const envKey = constantCase(key);
  const envValue = env[envKey];

  if (envValue !== undefined) {
    const valueType = typeof defaultValue;

    if (valueType === 'boolean') {
      return parseBoolean(envValue);
    }

    if (valueType === 'number') {
      return parseFloat(envValue);
    }

    return envValue;
  }

  const value = values[key];
  if (value !== undefined) {
    return value;
  }

  return defaultValue;
}

function getConfig() {
  const config = load(resolvePath('config.json'));
  return merge(process.env, config, defaults);
}

const statusCodes = {
  [ObjectNotFoundError]: 404,
};

function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const {constructor, message} = err;
  const statusCode = statusCodes[constructor] || 500;
  if (statusCode === 500) {
    log.error(err);
  }
  res.status(statusCode).json({message});
}

function createApp(romDb, options) {
  const {
    staticPath = false,
    morganEnabled = false,
    morganFormat = false,
    trustProxy = false,
    httpsRedirect = false,
  } = options;

  log.info('Creating application');
  log.info('  static path: %s', staticPath);
  log.info('  morgan enabled: %s', morganEnabled);
  log.info('  morgan format: %s', morganFormat);
  log.info('  trust proxy: %s', trustProxy);
  log.info('  https redirect: %s', httpsRedirect);

  const app = express__default();

  app.disable('x-powered-by');
  app.set('trust proxy', trustProxy);

  app.use(compression());
  app.use(setHeaders);

  if (httpsRedirect) {
    app.use(doHttpsRedirect);
  }

  if (morganEnabled) {
    const morgan = require('morgan');
    app.use(morgan(morganFormat));
  }

  app.use('/', createRouter(romDb));
  app.use('/', express__default.static(staticPath));
  app.use(historyApiFallback('index.html', {root: staticPath}));
  app.use(errorHandler);

  return app;
}

function setHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
}

function doHttpsRedirect(req, res, next) {
  if (!req.secure) {
    res.redirect('https://' + req.hostname + req.originalUrl);
  } else {
    next();
  }
}

const config = getConfig();

log.setLevel(config.logLevel);

const romDb = new RomDb(config.romsPath);
const app = createApp(romDb, config);
const server = http.createServer(app);

server.listen(config.port);
romDb.start();
