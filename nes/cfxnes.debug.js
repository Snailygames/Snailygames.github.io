;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('cfxnes', [], function() {
      return factory({}).cfxnes;
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory({}).cfxnes;
  } else {
    factory(root);
  }
}(this, function(root) {
  // Compiler output [start]
  // Input 0
'use strict';
var c = c || {};
c.scope = {};
c.ASSUME_ES5 = !1;
c.ASSUME_NO_NATIVE_MAP = !1;
c.ASSUME_NO_NATIVE_SET = !1;
c.defineProperty = c.ASSUME_ES5 || 'function' == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) {
  a != Array.prototype && a != Object.prototype && (a[b] = d.value);
};
c.getGlobal = function(a) {
  return 'undefined' != typeof window && window === a ? a : 'undefined' != typeof global && null != global ? global : a;
};
c.global = c.getGlobal(this);
c.SYMBOL_PREFIX = 'jscomp_symbol_';
c.initSymbol = function() {
  c.initSymbol = function() {
  };
  c.global.Symbol || (c.global.Symbol = c.Symbol);
};
c.Symbol = function() {
  var a = 0;
  return function(b) {
    return c.SYMBOL_PREFIX + (b || '') + a++;
  };
}();
c.initSymbolIterator = function() {
  c.initSymbol();
  var a = c.global.Symbol.iterator;
  a || (a = c.global.Symbol.iterator = c.global.Symbol('iterator'));
  'function' != typeof Array.prototype[a] && c.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return c.arrayIterator(this);
  }});
  c.initSymbolIterator = function() {
  };
};
c.arrayIterator = function(a) {
  var b = 0;
  return c.iteratorPrototype(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
};
c.iteratorPrototype = function(a) {
  c.initSymbolIterator();
  a = {next:a};
  a[c.global.Symbol.iterator] = function() {
    return this;
  };
  return a;
};
c.makeIterator = function(a) {
  c.initSymbolIterator();
  c.initSymbol();
  c.initSymbolIterator();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : c.arrayIterator(a);
};
c.arrayFromIterator = function(a) {
  for (var b, d = []; !(b = a.next()).done;) {
    d.push(b.value);
  }
  return d;
};
c.objectCreate = c.ASSUME_ES5 || 'function' == typeof Object.create ? Object.create : function(a) {
  function b() {
  }
  b.prototype = a;
  return new b;
};
c.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (d) {
  }
  return !1;
};
c.setPrototypeOf = 'function' == typeof Object.setPrototypeOf ? Object.setPrototypeOf : c.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + ' is not extensible');
  }
  return a;
} : null;
c.inherits = function(a, b) {
  a.prototype = c.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if (c.setPrototypeOf) {
    var d = c.setPrototypeOf;
    d(a, b);
  } else {
    for (d in b) {
      if ('prototype' != d) {
        if (Object.defineProperties) {
          var f = Object.getOwnPropertyDescriptor(b, d);
          f && Object.defineProperty(a, d, f);
        } else {
          a[d] = b[d];
        }
      }
    }
  }
  a.superClass_ = b.prototype;
};
c.arrayFromIterable = function(a) {
  return a instanceof Array ? a : c.arrayFromIterator(c.makeIterator(a));
};
var ba = {OFF:'off', ERROR:'error', WARN:'warn', INFO:'info'};
// Input 1
var ca = {}, ea = /function ([^(]+)/;
function fa(a) {
  return a.name ? a.name : (a = a.toString().match(ea)) && a[1] ? a[1] : '';
}
ca.detectEndianness = function() {
  var a = new Uint16Array([4660]);
  return 52 === (new Uint8Array(a.buffer))[0] ? 'LE' : 'BE';
};
ca.decodeBase64 = function(a) {
  if ('undefined' !== typeof window && 'function' === typeof window.atob) {
    return window.atob(a);
  }
  if ('function' === typeof Buffer) {
    return Buffer.from(a, 'base64').toString('binary');
  }
  throw Error('Unable to decode base64 string');
};
ca.formatSize = function(a) {
  if ('number' === typeof a) {
    return 1024 > Math.abs(a) ? a + ' B' : 1048576 > Math.abs(a) ? ~~(a / 1024 * 1000) / 1000 + ' KB' : ~~(a / 1048576 * 1000) / 1000 + ' MB';
  }
};
ca.describe = function(a) {
  var b = typeof a;
  if ('string' === b) {
    return 80 < a.length ? '"' + a.substr(0, 80) + '..."' : '"' + a + '"';
  }
  if ('function' === b) {
    return b = fa(a.constructor), (a = fa(a)) ? b + '(' + a + ')' : b;
  }
  if (a && 'object' === b) {
    b = fa(a.constructor);
    if ('Object' === b) {
      return b;
    }
    a = a.length;
    return null != a ? b + '(' + a + ')' : b;
  }
  return String(a);
};
// Input 2
var ha = {}, ia = {}, ja = (ia.S0 = [0, 0, 0, 0], ia.S1 = [1, 1, 1, 1], ia.S2 = [2, 2, 2, 2], ia.S3 = [3, 3, 3, 3], ia.H = [0, 0, 1, 1], ia.V = [0, 1, 0, 1], ia['4S'] = [0, 1, 2, 3], ia);
ha.SCREEN_0 = 'S0';
ha.SCREEN_1 = 'S1';
ha.SCREEN_2 = 'S2';
ha.SCREEN_3 = 'S3';
ha.HORIZONTAL = 'H';
ha.VERTICAL = 'V';
ha.FOUR_SCREEN = '4S';
ha.getAreas = function(a) {
  var b = ja[a];
  if (b) {
    return b;
  }
  throw Error('Invalid mirroring: ' + ca.describe(a));
};
ha.getSingle = function(a) {
  return 'S' + a;
};
// Input 3
var ka = {}, la = {framesPerSecond:60, cpuFrequency:1789773, ppuClipTopBottom:!0, frameCounterMax4:[7457, 7456, 7458, 7457, 1, 1], frameCounterMax5:[7457, 7456, 7458, 7458, 7452, 1], noiseChannelTimerPeriods:[4, 8, 16, 32, 64, 96, 128, 160, 202, 254, 380, 508, 762, 1016, 2034, 4068], dmcChannelTimerPeriods:[428, 380, 340, 320, 286, 254, 226, 214, 190, 160, 142, 128, 106, 84, 72, 54]}, ma = {framesPerSecond:50, cpuFrequency:1491477.5, ppuClipTopBottom:!1, frameCounterMax4:[8313, 8314, 8312, 8313, 
1, 1], frameCounterMax5:[8313, 8314, 8312, 8314, 8312, 1], noiseChannelTimerPeriods:[4, 8, 14, 30, 60, 88, 118, 148, 188, 236, 354, 472, 708, 944, 1890, 3778], dmcChannelTimerPeriods:[398, 354, 316, 298, 276, 236, 210, 198, 176, 148, 132, 118, 98, 78, 66, 50]};
ka.NTSC = 'NTSC';
ka.PAL = 'PAL';
ka.getParams = function(a) {
  switch(a) {
    case 'NTSC':
      return la;
    case 'PAL':
      return ma;
    default:
      throw Error('Invalid region: ' + ca.describe(a));
  }
};
// Input 4
// Input 5
// Input 6
var na = {}, oa = {}, pa = (oa[ba.OFF] = 0, oa[ba.ERROR] = 1, oa[ba.WARN] = 2, oa[ba.INFO] = 3, oa);
function qa(a) {
  this.output = a;
  this.priority = 0;
  this.level = ba.OFF;
}
qa.prototype.setLevel = function(a) {
  var b = pa[a];
  if (null == b) {
    throw Error('Invalid log level: ' + ca.describe(a));
  }
  this.priority = b;
  this.level = a;
};
qa.prototype.getLevel = function() {
  return this.level;
};
qa.prototype.error = function(a, b) {
  if (1 <= this.priority) {
    this.output[ba.ERROR](a, b);
  }
};
qa.prototype.warn = function(a) {
  if (2 <= this.priority) {
    this.output[ba.WARN](a);
  }
};
qa.prototype.info = function(a) {
  if (3 <= this.priority) {
    this.output[ba.INFO](a);
  }
};
var ra = new qa(console);
na.Log = qa;
na.default = ra;
// Input 7
var e = {};
e.log = na.default;
e.LogLevel = ba;
e.Mirroring = ha;
e.Region = ka;
e.Mapper = {AOROM:'AOROM', BNROM:'BNROM', CNROM:'CNROM', COLOR_DREAMS:'COLOR_DREAMS', MMC1:'MMC1', MMC3:'MMC3', NINA_001:'NINA_001', NROM:'NROM', UNROM:'UNROM'};
e.Submapper = {SUROM:'SUROM', SOROM:'SOROM', SXROM:'SXROM'};
e.detectEndianness = ca.detectEndianness;
e.decodeBase64 = ca.decodeBase64;
e.formatSize = ca.formatSize;
e.describe = ca.describe;
// Input 8
var sa = {};
function g() {
  e.log.info('Initializing CPU memory');
  this.ram = new Uint8Array(2048);
  this.prgRAM = this.prgROM = null;
  this.prgROMMapping = new Uint32Array(4);
  this.prgRAMMapping = 0;
  this.inputDevices = [null, null, null];
  this.inputStrobe = 0;
  this.mapper = this.dma = this.apu = this.ppu = null;
}
g.prototype.connect = function(a) {
  e.log.info('Connecting CPU memory');
  this.ppu = a.ppu;
  this.apu = a.apu;
  this.dma = a.dma;
};
g.prototype.setMapper = function(a) {
  this.prgRAM = (this.mapper = a) && a.prgRAM;
  this.prgROM = a && a.prgROM;
};
g.prototype.reset = function() {
  e.log.info('Resetting CPU memory');
  this.resetRAM();
  this.resetRegisters();
  this.resetPRGRAM();
  this.resetPRGROM();
};
g.prototype.read = function(a) {
  return 32768 <= a ? this.readPRGROM(a) : 8192 > a ? this.readRAM(a) : 16416 > a ? this.readRegister(a) : 24576 <= a ? this.readPRGRAM(a) : this.readEXROM(a);
};
g.prototype.write = function(a, b) {
  32768 <= a ? this.writePRGROM(a, b) : 8192 > a ? this.writeRAM(a, b) : 16416 > a ? this.writeRegister(a, b) : 24576 <= a ? this.writePRGRAM(a, b) : this.writeEXROM(a, b);
};
g.prototype.resetRAM = function() {
  this.ram.fill(0);
};
g.prototype.readRAM = function(a) {
  return this.ram[this.mapRAMAddress(a)];
};
g.prototype.writeRAM = function(a, b) {
  this.ram[this.mapRAMAddress(a)] = b;
};
g.prototype.mapRAMAddress = function(a) {
  return a & 2047;
};
g.prototype.resetRegisters = function() {
  this.inputStrobe = 0;
};
g.prototype.readRegister = function(a) {
  switch(this.mapRegisterAddress(a)) {
    case 8194:
      return this.ppu.readStatus();
    case 8196:
      return this.ppu.readOAMData();
    case 8199:
      return this.ppu.readData();
    case 16405:
      return this.apu.readStatus();
    case 16406:
      return this.readInputDevice(1);
    case 16407:
      return this.readInputDevice(2);
    default:
      return 0;
  }
};
g.prototype.writeRegister = function(a, b) {
  switch(this.mapRegisterAddress(a)) {
    case 8192:
      this.ppu.writeControl(b);
      break;
    case 8193:
      this.ppu.writeMask(b);
      break;
    case 8195:
      this.ppu.writeOAMAddress(b);
      break;
    case 8196:
      this.ppu.writeOAMData(b);
      break;
    case 8197:
      this.ppu.writeScroll(b);
      break;
    case 8198:
      this.ppu.writeAddress(b);
      break;
    case 8199:
      this.ppu.writeData(b);
      break;
    case 16404:
      this.dma.writeAddress(b);
      break;
    case 16406:
      this.writeInputDevice(b);
      break;
    case 16384:
      this.apu.writePulseDutyEnvelope(1, b);
      break;
    case 16385:
      this.apu.writePulseSweep(1, b);
      break;
    case 16386:
      this.apu.writePulseTimer(1, b);
      break;
    case 16387:
      this.apu.writePulseLengthCounter(1, b);
      break;
    case 16388:
      this.apu.writePulseDutyEnvelope(2, b);
      break;
    case 16389:
      this.apu.writePulseSweep(2, b);
      break;
    case 16390:
      this.apu.writePulseTimer(2, b);
      break;
    case 16391:
      this.apu.writePulseLengthCounter(2, b);
      break;
    case 16392:
      this.apu.writeTriangleLinearCounter(b);
      break;
    case 16394:
      this.apu.writeTriangleTimer(b);
      break;
    case 16395:
      this.apu.writeTriangleLengthCounter(b);
      break;
    case 16396:
      this.apu.writeNoiseEnvelope(b);
      break;
    case 16398:
      this.apu.writeNoiseTimer(b);
      break;
    case 16399:
      this.apu.writeNoiseLengthCounter(b);
      break;
    case 16400:
      this.apu.writeDMCFlagsTimer(b);
      break;
    case 16401:
      this.apu.writeDMCOutputLevel(b);
      break;
    case 16402:
      this.apu.writeDMCSampleAddress(b);
      break;
    case 16403:
      this.apu.writeDMCSampleLength(b);
      break;
    case 16405:
      this.apu.writeStatus(b);
      break;
    case 16407:
      this.apu.writeFrameCounter(b), this.writeInputDevice(b);
  }
};
g.prototype.mapRegisterAddress = function(a) {
  return 16384 > a ? a & 8199 : a;
};
g.prototype.setInputDevice = function(a, b) {
  e.log.info((null != b ? 'Setting' : 'Clearing') + ' device connected to CPU memory on port #' + a);
  this.inputDevices[a] = b;
};
g.prototype.getInputDevice = function(a) {
  return this.inputDevices[a];
};
g.prototype.readInputDevice = function(a) {
  return (a = this.inputDevices[a]) ? a.read() : 0;
};
g.prototype.writeInputDevice = function(a) {
  (a &= 1) && !this.inputStrobe && (this.strobeInputDevice(1), this.strobeInputDevice(2));
  this.inputStrobe = a;
};
g.prototype.strobeInputDevice = function(a) {
  (a = this.inputDevices[a]) && a.strobe();
};
g.prototype.readEXROM = function() {
  return 0;
};
g.prototype.writeEXROM = function() {
};
g.prototype.resetPRGRAM = function() {
  this.prgRAMMapping = 0;
};
g.prototype.readPRGRAM = function(a) {
  return this.prgRAM && this.mapper.canReadPRGRAM ? this.prgRAM[this.mapPRGRAMAddress(a)] : 0;
};
g.prototype.writePRGRAM = function(a, b) {
  this.prgRAM && this.mapper.canWritePRGRAM && (this.prgRAM[this.mapPRGRAMAddress(a)] = b, this.mapper.hasPRGRAMRegisters && this.mapper.write(a, b));
};
g.prototype.mapPRGRAMAddress = function(a) {
  return this.prgRAMMapping | a & 8191;
};
g.prototype.mapPRGRAMBank = function(a, b) {
  this.prgRAMMapping = 8192 * b;
};
g.prototype.resetPRGROM = function() {
  this.prgROMMapping.fill(0);
};
g.prototype.readPRGROM = function(a) {
  return this.prgROM[this.mapPRGROMAddress(a)];
};
g.prototype.writePRGROM = function(a, b) {
  this.mapper.write(a, b);
};
g.prototype.mapPRGROMAddress = function(a) {
  return this.prgROMMapping[(a & 24576) >>> 13] | a & 8191;
};
g.prototype.mapPRGROMBank = function(a, b) {
  this.prgROMMapping[a] = 8192 * b;
};
sa.default = g;
// Input 9
var ta = {}, ua = [9, 1, 0, 1, 0, 2, 2, 13, 8, 16, 8, 36, 0, 0, 4, 44, 9, 1, 52, 3, 0, 4, 0, 20, 8, 58, 0, 2, 0, 32, 44, 8];
function h() {
  e.log.info('Initializing PPU memory');
  this.patterns = null;
  this.patternsMapping = new Uint32Array(8);
  this.canWritePattern = !1;
  this.nametables = new Uint8Array(4096);
  this.nametablesMapping = new Uint32Array(4);
  this.palettes = new Uint8Array(32);
  this.mapper = null;
}
h.prototype.setMapper = function(a) {
  this.patterns = (this.mapper = a) && (a.chrRAM || a.chrROM);
  this.canWritePattern = null != a && null != a.chrRAM;
};
h.prototype.reset = function() {
  e.log.info('Resetting PPU memory');
  this.resetPatterns();
  this.resetNametables();
  this.resetPalettes();
};
h.prototype.read = function(a) {
  a = this.mapAddress(a);
  return 8192 > a ? this.readPattern(a) : 16128 > a ? this.readNametable(a) : this.readPalette(a);
};
h.prototype.write = function(a, b) {
  a = this.mapAddress(a);
  8192 > a ? this.writePattern(a, b) : 16128 > a ? this.writeNametable(a, b) : this.writePalette(a, b);
};
h.prototype.mapAddress = function(a) {
  return a & 16383;
};
h.prototype.resetPatterns = function() {
  this.patternsMapping.fill(0);
};
h.prototype.readPattern = function(a) {
  return this.patterns[this.mapPatternAddress(a)];
};
h.prototype.writePattern = function(a, b) {
  this.canWritePattern && (this.patterns[this.mapPatternAddress(a)] = b);
};
h.prototype.mapPatternAddress = function(a) {
  return this.patternsMapping[(a & 7168) >>> 10] | a & 1023;
};
h.prototype.mapPatternsBank = function(a, b) {
  this.patternsMapping[a] = 1024 * b;
};
h.prototype.resetNametables = function() {
  this.nametables.fill(0);
  this.setNametablesMirroring(this.mapper && this.mapper.mirroring || e.Mirroring.SCREEN_0);
};
h.prototype.readNametable = function(a) {
  return this.nametables[this.mapNametableAddress(a)];
};
h.prototype.writeNametable = function(a, b) {
  this.nametables[this.mapNametableAddress(a)] = b;
};
h.prototype.mapNametableAddress = function(a) {
  return this.nametablesMapping[(a & 3072) >>> 10] | a & 1023;
};
h.prototype.setNametablesMirroring = function(a) {
  a = e.Mirroring.getAreas(a);
  for (var b = 0; 4 > b; b++) {
    this.nametablesMapping[b] = 1024 * a[b];
  }
};
h.prototype.resetPalettes = function() {
  this.palettes.set(ua);
};
h.prototype.readPalette = function(a) {
  return this.palettes[this.mapPaletteAddress(a)];
};
h.prototype.writePalette = function(a, b) {
  this.palettes[this.mapPaletteAddress(a)] = b;
};
h.prototype.mapPaletteAddress = function(a) {
  return a & 3 ? a & 31 : a & 15;
};
ta.default = h;
// Input 10
var va = {};
function wa() {
  e.log.info('Initializing DMA');
  this.baseAddress = this.cycle = 0;
  this.cpuMemory = null;
}
wa.prototype.connect = function(a) {
  e.log.info('Connecting DMA');
  this.cpuMemory = a.cpuMemory;
};
wa.prototype.reset = function() {
  e.log.info('Resetting DMA');
  this.cycle = 512;
};
wa.prototype.writeAddress = function(a) {
  this.cycle = 0;
  this.baseAddress = a << 8;
};
wa.prototype.tick = function() {
  this.isBlockingCPU() && (this.cycle++, this.cycle & 1 && this.transferData());
};
wa.prototype.isBlockingCPU = function() {
  return 512 > this.cycle;
};
wa.prototype.transferData = function() {
  var a = this.cpuMemory.read(this.baseAddress + (this.cycle >> 1));
  this.cpuMemory.write(8196, a);
};
va.default = wa;
// Input 11
var l = {};
function m(a) {
  e.log.info('Initializing mapper');
  this.mirroring = a.mirroring;
  this.prgROM = a.prgROM;
  this.chrROM = a.chrROM;
  this.prgROMSize = a.prgROMSize;
  this.chrROMSize = a.chrROMSize;
  var b = a.prgRAMSize, d = a.prgRAMSizeBattery;
  this.prgRAM = b ? new Uint8Array(b) : null;
  this.prgRAMSize = b;
  this.prgRAMSizeBattery = d;
  this.canReadPRGRAM = 0 < b;
  this.canWritePRGRAM = 0 < b;
  this.hasPRGRAMRegisters = !1;
  b = a.chrRAMSize;
  a = a.chrRAMSizeBattery;
  this.chrRAM = b ? new Uint8Array(b) : null;
  this.chrRAMSize = b;
  this.chrRAMSizeBattery = a;
  this.nvram = d ? this.prgRAM.subarray(0, d) : a ? this.chrRAM.subarray(0, a) : null;
  this.ppuMemory = this.cpuMemory = this.ppu = this.cpu = null;
}
m.prototype.connect = function(a) {
  e.log.info('Connecting mapper');
  this.cpu = a.cpu;
  this.ppu = a.ppu;
  this.cpuMemory = a.cpuMemory;
  this.ppuMemory = a.ppuMemory;
  this.cpu.setMapper(this);
  this.cpuMemory.setMapper(this);
  this.ppuMemory.setMapper(this);
};
m.prototype.disconnect = function() {
  e.log.info('Disconnecting mapper');
  this.ppuMemory.setMapper(null);
  this.cpuMemory.setMapper(null);
  this.cpu.setMapper(null);
  this.cpu = this.ppu = this.cpuMemory = this.ppuMemory = null;
};
m.prototype.reset = function() {
  e.log.info('Resetting mapper');
  this.resetPRGRAM();
  this.resetCHRRAM();
  this.resetState();
};
m.prototype.resetState = function() {
};
m.prototype.write = function() {
};
m.prototype.tick = function() {
};
m.prototype.mapPRGROMBank32K = function(a, b) {
  this.mapPRGROMBank8K(4 * a, 4 * b, 4);
};
m.prototype.mapPRGROMBank16K = function(a, b) {
  this.mapPRGROMBank8K(2 * a, 2 * b, 2);
};
m.prototype.mapPRGROMBank8K = function(a, b, d) {
  d = void 0 === d ? 1 : d;
  for (var f = this.prgROMSize - 1 >> 13, k = 0; k < d; k++) {
    this.cpuMemory.mapPRGROMBank(a + k, b + k & f);
  }
};
m.prototype.resetPRGRAM = function() {
  this.prgRAM && this.prgRAM.fill(0, this.prgRAMSizeBattery);
};
m.prototype.mapPRGRAMBank8K = function(a, b) {
  this.cpuMemory.mapPRGRAMBank(a, b & this.prgRAMSize - 1 >> 13);
};
m.prototype.resetCHRRAM = function() {
  this.chrRAM && this.chrRAM.fill(0, this.chrRAMSizeBattery);
};
m.prototype.mapCHRBank8K = function(a, b) {
  this.mapCHRBank1K(8 * a, 8 * b, 8);
};
m.prototype.mapCHRBank4K = function(a, b) {
  this.mapCHRBank1K(4 * a, 4 * b, 4);
};
m.prototype.mapCHRBank2K = function(a, b) {
  this.mapCHRBank1K(2 * a, 2 * b, 2);
};
m.prototype.mapCHRBank1K = function(a, b, d) {
  d = void 0 === d ? 1 : d;
  for (var f = (this.chrROMSize || this.chrRAMSize) - 1 >> 10, k = 0; k < d; k++) {
    this.ppuMemory.mapPatternsBank(a + k, b + k & f);
  }
};
m.prototype.getNVRAM = function() {
  return this.nvram;
};
m.prototype.setSingleScreenMirroring = function(a) {
  this.ppuMemory.setNametablesMirroring(e.Mirroring.getSingle(void 0 === a ? 0 : a));
};
m.prototype.setVerticalMirroring = function() {
  this.ppuMemory.setNametablesMirroring(e.Mirroring.VERTICAL);
};
m.prototype.setHorizontalMirroring = function() {
  this.ppuMemory.setNametablesMirroring(e.Mirroring.HORIZONTAL);
};
m.prototype.setFourScreenMirroring = function() {
  this.ppuMemory.setNametablesMirroring(e.Mirroring.FOUR_SCREEN);
};
l.default = m;
// Input 12
var xa = {};
function ya(a) {
  l.default.apply(this, arguments);
}
c.inherits(ya, l.default);
ya.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRBank8K(0, 0);
};
ya.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
  this.setSingleScreenMirroring((b & 16) >>> 4);
};
xa.default = ya;
// Input 13
var za = {};
function Aa(a) {
  l.default.apply(this, arguments);
}
c.inherits(Aa, l.default);
Aa.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRBank8K(0, 0);
};
Aa.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
};
za.default = Aa;
// Input 14
var Ba = {};
function Ca(a) {
  l.default.apply(this, arguments);
}
c.inherits(Ca, l.default);
Ca.prototype.resetState = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRBank8K(0, 0);
};
Ca.prototype.write = function(a, b) {
  this.mapCHRBank8K(0, b);
};
Ba.default = Ca;
// Input 15
var Da = {};
function Ea(a) {
  l.default.apply(this, arguments);
}
c.inherits(Ea, l.default);
Ea.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapCHRBank8K(0, 0);
};
Ea.prototype.write = function(a, b) {
  this.mapPRGROMBank32K(0, b);
  this.mapCHRBank8K(0, b >>> 4);
};
Da.default = Ea;
// Input 16
var Fa = {};
function Ga(a) {
  l.default.call(this, a);
  this.chrBankRegister2 = this.chrBankRegister1 = this.prgBankRegister = this.controlRegister = this.writesCount = this.shiftRegister = 0;
  this.snrom = (131072 === this.prgROMSize || 262144 === this.prgROMSize) && 8192 === this.prgRAMSize && (8192 === this.chrROMSize || 8192 === this.chrRAMSize);
}
c.inherits(Ga, l.default);
Ga.prototype.resetState = function() {
  this.resetShiftRegister();
  this.resetBankRegisters();
  this.synchronizeMapping();
};
Ga.prototype.resetShiftRegister = function() {
  this.writesCount = this.shiftRegister = 0;
};
Ga.prototype.resetBankRegisters = function() {
  this.controlRegister = 12;
  this.chrBankRegister2 = this.chrBankRegister1 = this.prgBankRegister = 0;
};
Ga.prototype.write = function(a, b) {
  b & 128 ? (this.resetShiftRegister(), this.controlRegister |= 12) : (this.shiftRegister |= (b & 1) << this.writesCount, 5 <= ++this.writesCount && (this.copyShiftRegister(a), this.resetShiftRegister(), this.synchronizeMapping()));
};
Ga.prototype.copyShiftRegister = function(a) {
  switch(a & 57344) {
    case 32768:
      this.controlRegister = this.shiftRegister;
      break;
    case 40960:
      this.chrBankRegister1 = this.shiftRegister;
      break;
    case 49152:
      this.chrBankRegister2 = this.shiftRegister;
      break;
    case 57344:
      this.prgBankRegister = this.shiftRegister;
  }
};
Ga.prototype.synchronizeMapping = function() {
  this.switchMirroring();
  this.switchPRGROMBanks();
  this.switchPRGRAMBank();
  this.switchCHRBanks();
};
Ga.prototype.switchMirroring = function() {
  switch(this.controlRegister & 3) {
    case 0:
      this.setSingleScreenMirroring(0);
      break;
    case 1:
      this.setSingleScreenMirroring(1);
      break;
    case 2:
      this.setVerticalMirroring();
      break;
    case 3:
      this.setHorizontalMirroring();
  }
};
Ga.prototype.switchPRGROMBanks = function() {
  var a = this.chrRAM ? this.chrBankRegister1 & 16 : 0, b = this.prgBankRegister & 15;
  switch(this.controlRegister & 12) {
    case 12:
      this.mapPRGROMBank16K(0, a | b);
      this.mapPRGROMBank16K(1, a | 15);
      break;
    case 8:
      this.mapPRGROMBank16K(0, a);
      this.mapPRGROMBank16K(1, a | b);
      break;
    default:
      this.mapPRGROMBank32K(0, (a | b) >>> 1);
  }
};
Ga.prototype.switchPRGRAMBank = function() {
  var a = 0 === (this.chrBankRegister1 & 16);
  a = 0 === (this.prgBankRegister & 16) && (!this.snrom || a);
  this.mapPRGRAMBank8K(0, this.chrRAM ? this.chrBankRegister1 >>> 2 : 0);
  this.canWritePRGRAM = this.canReadPRGRAM = a;
};
Ga.prototype.switchCHRBanks = function() {
  this.controlRegister & 16 ? (this.mapCHRBank4K(0, this.chrBankRegister1), this.mapCHRBank4K(1, this.chrBankRegister2)) : this.mapCHRBank8K(0, this.chrBankRegister1 >>> 1);
};
Fa.default = Ga;
// Input 17
var Ha = {RESET:1, NMI:2, IRQ_APU:4, IRQ_DMC:8, IRQ_EXT:16, IRQ:28};
// Input 18
var Ia = {};
function p(a) {
  l.default.call(this, a);
  this.irqDelay = this.irqEnabled = this.irqReload = this.irqLatch = this.irqCounter = this.bankSelect = 0;
  this.alternateMode = !1;
}
c.inherits(p, l.default);
p.prototype.resetState = function() {
  this.resetMapping();
  this.resetRegisters();
};
p.prototype.resetMapping = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapPRGRAMBank8K(0, 0);
  this.mapCHRBank8K(0, 0);
};
p.prototype.resetRegisters = function() {
  this.irqDelay = this.irqEnabled = this.irqReload = this.irqLatch = this.irqCounter = this.bankSelect = 0;
};
p.prototype.write = function(a, b) {
  switch(a & 57345) {
    case 32768:
      this.bankSelect = b;
      break;
    case 32769:
      this.writeBankData(b);
      break;
    case 40960:
      this.writeMirroring(b);
      break;
    case 40961:
      this.writePRGRAMEnable(b);
      break;
    case 49152:
      this.irqLatch = b;
      break;
    case 49153:
      this.writeIRQReload();
      break;
    case 57344:
      this.writeIRQEnable(!1);
      break;
    case 57345:
      this.writeIRQEnable(!0);
  }
};
p.prototype.writeBankData = function(a) {
  switch(this.bankSelect & 7) {
    case 0:
    case 1:
      this.switchDoubleCHRROMBanks(a);
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      this.switchSingleCHRROMBanks(a);
      break;
    case 6:
      this.switchPRGROMBanks0And2(a);
      break;
    case 7:
      this.switchPRGROMBank1(a);
  }
};
p.prototype.writeMirroring = function(a) {
  this.mirroring !== e.Mirroring.FOUR_SCREEN && this.switchMirroring(a);
};
p.prototype.writePRGRAMEnable = function(a) {
  this.canReadPRGRAM = 128 === (a & 128);
  this.canWritePRGRAM = 128 === (a & 192);
};
p.prototype.writeIRQReload = function() {
  this.alternateMode && (this.irqReload = !0);
  this.irqCounter = 0;
};
p.prototype.writeIRQEnable = function(a) {
  (this.irqEnabled = a) || this.cpu.clearInterrupt(Ha.IRQ_EXT);
};
p.prototype.switchDoubleCHRROMBanks = function(a) {
  this.mapCHRBank2K((this.bankSelect & 128) >>> 6 | this.bankSelect & 1, a >>> 1);
};
p.prototype.switchSingleCHRROMBanks = function(a) {
  this.mapCHRBank1K((~this.bankSelect & 128) >>> 5 | this.bankSelect - 2 & 3, a);
};
p.prototype.switchPRGROMBanks0And2 = function(a) {
  var b = (~this.bankSelect & 64) >>> 5;
  this.mapPRGROMBank8K((this.bankSelect & 64) >>> 5, a);
  this.mapPRGROMBank8K(b, -2);
};
p.prototype.switchPRGROMBank1 = function(a) {
  this.mapPRGROMBank8K(1, a);
};
p.prototype.switchMirroring = function(a) {
  a & 1 ? this.setHorizontalMirroring() : this.setVerticalMirroring();
};
p.prototype.tick = function() {
  this.ppu.addressBus & 4096 ? (this.irqDelay || this.updateIRQCounter(), this.irqDelay = 7) : this.irqDelay && this.irqDelay--;
};
p.prototype.updateIRQCounter = function() {
  var a = this.irqCounter;
  !this.irqCounter || this.irqReload ? this.irqCounter = this.irqLatch : this.irqCounter--;
  !this.irqEnabled || this.irqCounter || this.alternateMode && !a && !this.irqReload || this.cpu.activateInterrupt(Ha.IRQ_EXT);
  this.irqReload = !1;
};
Ia.default = p;
// Input 19
var Ja = {};
function Ka(a) {
  l.default.call(this, a);
  this.hasPRGRAMRegisters = !0;
}
c.inherits(Ka, l.default);
Ka.prototype.resetState = function() {
  this.mapPRGROMBank32K(0, 0);
  this.mapPRGRAMBank8K(0, 0);
  this.mapCHRBank8K(0, 0);
};
Ka.prototype.write = function(a, b) {
  switch(a) {
    case 32765:
      this.mapPRGROMBank32K(0, b);
      break;
    case 32766:
      this.mapCHRBank4K(0, b);
      break;
    case 32767:
      this.mapCHRBank4K(1, b);
  }
};
Ja.default = Ka;
// Input 20
var La = {};
function Ma(a) {
  l.default.apply(this, arguments);
}
c.inherits(Ma, l.default);
Ma.prototype.resetState = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRBank8K(0, 0);
};
La.default = Ma;
// Input 21
var Na = {};
function Oa(a) {
  l.default.apply(this, arguments);
}
c.inherits(Oa, l.default);
Oa.prototype.resetState = function() {
  this.mapPRGROMBank16K(0, 0);
  this.mapPRGROMBank16K(1, -1);
  this.mapCHRBank8K(0, 0);
};
Oa.prototype.write = function(a, b) {
  this.mapPRGROMBank16K(0, b);
};
Na.default = Oa;
// Input 22
var Pa = {}, Qa = {}, Ra = (Qa[e.Mapper.AOROM] = xa.default, Qa[e.Mapper.BNROM] = za.default, Qa[e.Mapper.CNROM] = Ba.default, Qa[e.Mapper.COLOR_DREAMS] = Da.default, Qa[e.Mapper.MMC1] = Fa.default, Qa[e.Mapper.MMC3] = Ia.default, Qa[e.Mapper.NINA_001] = Ja.default, Qa[e.Mapper.NROM] = La.default, Qa[e.Mapper.UNROM] = Na.default, Qa);
Pa.createMapper = function(a) {
  var b = a.mapper, d = Ra[b];
  if (d) {
    return e.log.info('Creating "' + b + '" mapper'), new d(a);
  }
  throw Error('Invalid mapper: ' + e.describe(b));
};
// Input 23
var Sa = {};
Sa.CPUMemory = sa.default;
Sa.PPUMemory = ta.default;
Sa.DMA = va.default;
Sa.createMapper = Pa.createMapper;
// Input 24
var Ta = {VIDEO_WIDTH:256, VIDEO_HEIGHT:240};
// Input 25
var r = {}, Ua = 'LE' === e.detectEndianness(), Xa = Ua ? Va : Wa, $a = Ua ? Ya : Za, ab = Xa(0, 0, 0);
function Va(a, b, d, f) {
  return ((void 0 === f ? 255 : f) << 24 | d << 16 | b << 8 | a) >>> 0;
}
function Wa(a, b, d, f) {
  return (a << 24 | b << 16 | d << 8 | (void 0 === f ? 255 : f)) >>> 0;
}
function Ya(a) {
  return [a & 255, a >>> 8 & 255, a >>> 16 & 255, a >>> 24 & 255];
}
function Za(a) {
  return [a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a & 255];
}
r.packColor = Xa;
r.unpackColor = $a;
r.BLACK_COLOR = ab;
r.packColorLE = Va;
r.packColorBE = Wa;
r.unpackColorLE = Ya;
r.unpackColorBE = Za;
// Input 26
// Input 27
// Input 28
// Input 29
// Input 30
// Input 31
// Input 32
// Input 33
// Input 34
// Input 35
// Input 36
// Input 37
var bb = {}, cb = {'asq-real-a':'YGBgACF7AACcMQCLWQBvbwAxZAAATxEALxkAJykAAEQAADk3ADlPAAAADAwMDAwMrq6uEFbOGyz/YCDsqQC/yhZUyhoInjoEZ1EAQ2EAAHwAAHFTAHGHDAwMDAwMDAwM////RJ7+XGz/mWb/12D//2KV/2RT9JQwwqwAkMQUUtIoIMaSGLrSTExMDAwMDAwM////o8z/pLT/wbb/4Lf//8DF/7yr/9Cf/OCQ4uqYyvKgoOrioOL6tra2DAwMDAwM', 'asq-real-b':'bGxsACCUAACoPACYcABwfAA8cAAAaBAARhoAPCwAAFAAADxMADpmAAAAEBAQEBAQurq6KljWPDL/gCDwwADA0BR00hokpjweflIAWGQAAIgAAHRoAHKeEBAQEBAQEBAQ////XqD/jIL/xHD//1z//2i8/3J8/JZK2a0AmMYuTtROOsiaLr7cWFhYEBAQEBAQ////xtj/1Mr/8MT//7z//8Tw/8rU/9i+/+am6uyyxvTGuuzqtub/wsLCEBAQEBAQ', 
'bmf-fin-r2':'UlJSAACACACKLAB+SgBOUAAGRAAAJggACiAAAC4AADIAACYKABxIAAAAAAAAAAAApKSkADjONBbsXgTcjACwmgBMkBgAcDYATFQADmwAAHQAAGwsAF6EAAAAAAAAAAAA////TJz/fHj/pmT/2lr/8FTA8GpW1oYQuqQAdsAARswaLshmNMK+Ojo6AAAAAAAA////ttr/yMr/2sL/8L7//Lzu+sLA8syi5tqSzOaOuO6iruq+rujisLCwAAAAAAAA', 'bmf-fin-r3':'aGhoABKZGgiqUQKafgBpjgAcfgMBURgAHzcAAU4AAFoAAFAcAEBhAAAAAAAAAAAAubm5DFzXUDXwiRnguwyzzgxhwCsOlU0BYW8AH4sAAZgMAJNLAIGbAAAAAAAAAAAA////Y7T/m5H/03f/72r/+WjA+X1s7Zstvb0WfNocS+hHNeWRP9ndYGBgAAAAAAAA////rOf/1c3/7br/+LD//rDs/b21+dKO6Ot8u/OCmfeiivXQkvTxvr6+AAAAAAAA', 
'fceu-13':'YGBgAAB4FACALABuSgBObAAYWgMCURgANCQAADQAADIAADQgACx4AAAAAgICAgICxMTEAFjeMB/8fxTgqACwwAZcwCsOpkAQb2EAMIAAAHwAAHw8AG6EFBQUBAQEBAQE8PDwTKr/b3P1sHD/2lr/8GDA+INt0JAw1MAwZtAAJt0aLshmNMK+VFRUBgYGBgYG////ttr/yMr/2sL/8L7//Lzu/9C0/9qQ7OyS3PaeuP+iruq+nu/vvr6+CAgICAgI', 'fceu-15':'YGBgAABwFACALABuSgBObAAYWgMCURgANCQAADQAADIAADQgACx4AAAAAgICAgICxMTEAFjeMB/8fxTgqACwwAZcwCsOpkAQb2EAMIAAAHwAAHw8AG6EFBQUBAQEBAQE8PDwTKr/b3P1sHD/2lr/8GDA+INt0JAw1MAwZtAAJt0aLshmNMK+VFRUBgYGBgYG////ttr/yMr/2sL/8L7//Lzu/9C0/9qQ7OyS3PaeuP+iruq+nu/vvr6+CAgICAgI', 
fceux:'dHR0JBiMAACoRACcjAB0qAAQpAAAfAgAQCwAAEQAAFAAADwUGDxcAAAAAAAAAAAAvLy8AHDsIDjsgADwvAC85ABY2CgAyEwMiHAAAJQAAKgAAJA4AICIAAAAAAAAAAAA/Pz8PLz8XJT8zIj89Hj8/HS0/HRg/Jg48Lw8gNAQTNxIWPiYAOjYeHh4AAAAAAAA/Pz8qOT8xNT81Mj8/MT8/MTY/Lyw/Nio/OSg4PygqPC8sPzMnPzwxMTEAAAAAAAA', 'nestopia-rgb':'bW1tACSSAADbbUnbkgBttgBttiQAkkkAbUkAJEkAAG0kAJIAAElJAAAAAAAAAAAAtra2AG3bAEn/kgD/tgD//wCS/wAA220Akm0AJJIAAJIAALZtAJKSJCQkAAAAAAAA////bbb/kpL/223//wD//23//5IA/7YA29sAbdsAAP8ASf/bAP//SUlJAAAAAAAA////ttv/27b//7b//5L//7a2/9uS//9J//9ttv9Jkv9tSf/bktv/kpKSAAAAAAAA', 
'nestopia-yuv':'ZmZmACqIFBKnOwCkXAB+bgBAbAcAVh0AMzUADEgAAFIAAE8IAEBNAAAAAAAAAAAAra2tFV/ZQkD/dSf+oBrMtx57tTEgmU4Aa20AOIcADZMAAI8yAHyNAAAAAAAAAAAA////ZLD/kpD/xnb/8mr//27M/4Fw6p4ivL4AiNgAXOQwReCCSM3eT09PAAAAAAAA////wN//09L/6Mj/+sL//8Tq/8zF99il5OWUz++WvfSrs/PMtevyuLi4AAAAAAAA', 'sony-cxa2025as':'WFhYACOMABObLQWFXQBSegAXeggAXxgANSoACTkAAD8AADwiADJdAAAAAAAAAAAAoaGhAFPuFTz+YCjkqR2Y1B5B0iwAqkQAbF4ALXMAAH0GAHhSAGmpAAAAAAAAAAAA////H6X+Xon+tXL+/mX2/meQ/nc8/pMIxLIAecoQOtVKEdGkBr/+QkJCAAAAAAAA////oNn+vcz+4cL+/rz7/r3Q/sWp/tGO6d6Gx+mSqO6wlezZkeT+rKysAAAAAAAA', 
'unsaturated-v6':'a2trAB6HHwuWOwyHWQ1hXgUoVREARhsAMDIACkgAAE4AAEYZADpYAAAAAAAAAAAAsrKyGlPRSDXucSPsmh63pR5ipS0Zh0sAZ2kAKYQAA4sAAIJAAHiRAAAAAAAAAAAA////Y639kIr+uXf853H+92/J9YNq3ZwpvbgHhNEHW9w7SNd9SMzOVVVVAAAAAAAA////xOP+19X+5s3++cr+/snw/tHH99ys6Oic0fKdv/Sxt/XNt/Duvr6+AAAAAAAA'};
bb.DEFAULT_PALETTE = 'fceux';
bb.isPaletteName = function(a) {
  return a in cb;
};
bb.createPalette = function(a) {
  a = void 0 === a ? 'fceux' : a;
  var b = cb[a];
  if (b) {
    e.log.info('Creating "' + a + '" palette');
    a = e.decodeBase64(b);
    if (192 !== a.length) {
      throw Error('Palette data does not contain 64 entries');
    }
    b = new Uint32Array(64);
    for (var d = 0; 64 > d; d++) {
      var f = 3 * d, k = a.charCodeAt(f), u = a.charCodeAt(f + 1);
      f = a.charCodeAt(f + 2);
      b[d] = r.packColor(k, u, f);
    }
    return b;
  }
  throw Error('Invalid palette: ' + e.describe(a));
};
bb.createPaletteVariant = function(a, b, d, f) {
  e.log.info('Creating palette variant (' + b + ', ' + d + ', ' + f + ')');
  for (var k = new Uint32Array(64), u = 0; 64 > u; u++) {
    var B = c.makeIterator(r.unpackColor(a[u])), C = B.next().value, n = B.next().value;
    B = B.next().value;
    C = Math.floor(b * C);
    n = Math.floor(d * n);
    B = Math.floor(f * B);
    k[u] = r.packColor(C, n, B);
  }
  return k;
};
// Input 38
for (var t = {}, w = new Uint32Array(262), D = 0; D < w.length; D++) {
  239 >= D && (w[D] |= 2, w[D] |= 512, w[D] |= 2048, w[D] |= 1024);
  if (239 >= D || 261 === D) {
    w[D] |= 4, w[D] |= 8, w[D] |= 16, w[D] |= 32, w[D] |= 64, w[D] |= 128, w[D] |= 256, w[D] |= 8192, w[D] |= 16384, w[D] |= 32768;
  }
  if (7 >= D || 232 <= D && 239 >= D) {
    w[D] |= 4096;
  }
}
w[241] |= 131072;
w[241] |= 262144;
w[261] |= 65536;
w[261] |= 524288;
w[261] |= 1048576;
for (var E = new Uint32Array(341), F = 0; F < E.length; F++) {
  1 <= F && 256 >= F && (E[F] |= 2, E[F] |= 4096);
  if (1 === (F & 7) || 339 === F) {
    E[F] |= 4;
  }
  3 === (F & 7) && 339 !== F && (E[F] |= 8);
  5 === (F & 7) && (E[F] |= 256 >= F || 321 <= F ? 16 : 64);
  7 === (F & 7) && (E[F] |= 256 >= F || 321 <= F ? 32 : 128);
  if (0 === (F & 7) && 8 <= F && 256 >= F || 328 === F || 336 === F) {
    E[F] |= 8192;
  }
  if (1 === (F & 7) && 9 <= F && 257 >= F || 329 === F || 337 === F) {
    E[F] |= 256;
  }
  if (1 <= F && 256 >= F || 321 <= F && 336 >= F) {
    E[F] |= 512;
  }
  280 <= F && 304 >= F && (E[F] |= 65536);
  1 <= F && 8 >= F && (E[F] |= 2048);
  1 <= F && 3 >= F && (E[F] |= 262144);
}
E[1] |= 131072;
E[1] |= 524288;
E[65] |= 1024;
E[256] |= 16384;
E[257] |= 32768;
E[338] |= 1048576;
t.RENDER = 2;
t.FETCH_NT = 4;
t.FETCH_AT = 8;
t.FETCH_BGL = 16;
t.FETCH_BGH = 32;
t.FETCH_SPL = 64;
t.FETCH_SPH = 128;
t.COPY_BG = 256;
t.SHIFT_BG = 512;
t.EVAL_SP = 1024;
t.CLIP_LEFT = 2048;
t.CLIP_TB = 4096;
t.INC_CX = 8192;
t.INC_FY = 16384;
t.COPY_HS = 32768;
t.COPY_VS = 65536;
t.VB_START = 131072;
t.VB_START2 = 262144;
t.VB_END = 524288;
t.SKIP = 1048576;
t.compute = function(a, b) {
  return w[a] & E[b];
};
// Input 39
var db = {default:function() {
  this.x = 0;
  this.horizontalFlip = this.zeroSprite = !1;
  this.paletteNumber = 0;
  this.inFront = !1;
  this.patternRow1 = this.patternRow0 = this.patternRowAddress = 0;
}};
// Input 40
var eb = {};
function H() {
  e.log.info('Initializing PPU');
  this.scanline = 261;
  this.cycleFlags = this.cycle = 0;
  this.oddFrame = !1;
  this.addressBus = 0;
  this.nmiSuppressed = this.vblankSuppressed = this.vblankActive = this.clipTopBottom = !1;
  this.nmiDelay = 0;
  this.frameBuffer = null;
  this.frameAvailable = !1;
  this.framePosition = 0;
  this.basePalette = null;
  this.paletteVariants = Array(8);
  this.palette = null;
  this.spriteNumber = this.spriteCount = 0;
  this.spriteCache = Array(261);
  this.spritePixelCache = new Uint8Array(261);
  this.primaryOAM = new Uint8Array(256);
  this.secondaryOAM = Array(8);
  this.vramReadBuffer = this.vramAddress = this.tempAddress = this.oamAddress = 0;
  this.writeToggle = !1;
  this.vblankFlag = this.spriteZeroHit = this.spriteOverflow = this.colorEmphasis = this.spritesVisible = this.backgroundVisible = this.spriteClipping = this.backgroundClipping = this.monochromeMode = this.nmiEnabled = this.bigSprites = this.bgPatternTableAddress = this.spPatternTableAddress = this.bigAddressIncrement = this.patternRowAddress = this.paletteLatchNext1 = this.paletteLatchNext0 = this.patternBufferNext1 = this.patternBufferNext0 = this.paletteLatch1 = this.paletteLatch0 = this.paletteBuffer1 = 
  this.paletteBuffer0 = this.patternBuffer1 = this.patternBuffer0 = this.fineXScroll = 0;
  this.ppuMemory = this.cpu = null;
}
H.prototype.connect = function(a) {
  e.log.info('Connecting PPU');
  this.cpu = a.cpu;
  this.ppuMemory = a.ppuMemory;
};
H.prototype.reset = function() {
  e.log.info('Resetting PPU');
  this.resetOAM();
  this.resetRegisters();
  this.resetState();
};
H.prototype.resetOAM = function() {
  this.primaryOAM.fill(0);
  for (var a = 0; a < this.secondaryOAM.length; a++) {
    this.secondaryOAM[a] = new db.default;
  }
};
H.prototype.resetRegisters = function() {
  this.setControl(0);
  this.setMask(0);
  this.setStatus(0);
  this.vramReadBuffer = this.vramAddress = this.tempAddress = this.oamAddress = 0;
  this.writeToggle = !1;
  this.paletteLatchNext1 = this.paletteLatchNext0 = this.patternBufferNext1 = this.patternBufferNext0 = this.paletteLatch1 = this.paletteLatch0 = this.paletteBuffer1 = this.paletteBuffer0 = this.patternBuffer1 = this.patternBuffer0 = this.fineXScroll = 0;
};
H.prototype.resetState = function() {
  this.scanline = 261;
  this.cycleFlags = this.cycle = 0;
  this.nmiSuppressed = this.vblankSuppressed = !1;
  this.nmiDelay = 0;
  this.oddFrame = !1;
  this.spriteNumber = this.spriteCount = 0;
  this.clearSprites();
};
H.prototype.setRegionParams = function(a) {
  e.log.info('Setting PPU region parameters');
  this.clipTopBottom = a.ppuClipTopBottom;
};
H.prototype.setBasePalette = function(a) {
  e.log.info('Setting PPU base palette');
  this.basePalette = a;
  this.createPaletteVariants();
  this.updatePalette();
};
H.prototype.getBasePalette = function() {
  return this.basePalette;
};
H.prototype.createPaletteVariants = function() {
  for (var a = 0; a < this.paletteVariants.length; a++) {
    this.paletteVariants[a] = bb.createPaletteVariant(this.basePalette, a & 6 ? 0.75 : 1.0, a & 5 ? 0.75 : 1.0, a & 3 ? 0.75 : 1.0);
  }
};
H.prototype.updatePalette = function() {
  this.palette = this.paletteVariants[this.colorEmphasis];
};
H.prototype.writeControl = function(a) {
  var b = this.nmiEnabled;
  this.setControl(a);
  this.tempAddress = this.tempAddress & 62463 | (a & 3) << 10;
  !this.vblankFlag || b || !this.nmiEnabled || this.cycleFlags & t.VB_END || (this.nmiDelay = 1);
};
H.prototype.setControl = function(a) {
  this.bigAddressIncrement = a >>> 2 & 1;
  this.spPatternTableAddress = a << 9 & 4096;
  this.bgPatternTableAddress = a << 8 & 4096;
  this.bigSprites = a >>> 5 & 1;
  this.nmiEnabled = a >>> 7;
};
H.prototype.writeMask = function(a) {
  this.setMask(a);
  this.updatePalette();
};
H.prototype.setMask = function(a) {
  this.monochromeMode = a & 1;
  this.backgroundClipping = ~a >>> 1 & 1;
  this.spriteClipping = ~a >>> 2 & 1;
  this.backgroundVisible = a >>> 3 & 1;
  this.spritesVisible = a >>> 4 & 1;
  this.colorEmphasis = a >>> 5 & 7;
};
H.prototype.readStatus = function() {
  var a = this.getStatus();
  this.vblankFlag = 0;
  this.writeToggle = !1;
  this.cycleFlags & t.VB_START && (this.vblankSuppressed = !0);
  this.cycleFlags & t.VB_START2 && (this.nmiSuppressed = !0);
  return a;
};
H.prototype.getStatus = function() {
  return this.spriteOverflow << 5 | this.spriteZeroHit << 6 | this.vblankFlag << 7;
};
H.prototype.setStatus = function(a) {
  this.spriteOverflow = a >>> 5 & 1;
  this.spriteZeroHit = a >>> 6 & 1;
  this.vblankFlag = a >>> 7;
};
H.prototype.writeOAMAddress = function(a) {
  this.oamAddress = a;
};
H.prototype.readOAMData = function() {
  var a = this.primaryOAM[this.oamAddress];
  2 === (this.oamAddress & 3) && (a &= 227);
  return a;
};
H.prototype.writeOAMData = function(a) {
  this.isRenderingActive() || (this.primaryOAM[this.oamAddress] = a);
  this.oamAddress = this.oamAddress + 1 & 255;
};
H.prototype.writeAddress = function(a) {
  (this.writeToggle = !this.writeToggle) ? this.tempAddress = this.tempAddress & 255 | (a & 63) << 8 : this.vramAddress = this.tempAddress = this.tempAddress & 65280 | a;
};
H.prototype.readData = function() {
  if (16128 === (this.vramAddress & 16128)) {
    var a = this.ppuMemory.read(this.vramAddress);
    this.vramReadBuffer = this.ppuMemory.read(this.vramAddress & 12287);
    this.incrementAddress();
    return a;
  }
  a = this.vramReadBuffer;
  this.vramReadBuffer = this.ppuMemory.read(this.vramAddress);
  this.incrementAddress();
  return a;
};
H.prototype.writeData = function(a) {
  this.isRenderingActive() || this.ppuMemory.write(this.vramAddress, a);
  this.incrementAddress();
};
H.prototype.incrementAddress = function() {
  this.vramAddress = this.vramAddress + (this.bigAddressIncrement ? 32 : 1) & 65535;
};
H.prototype.writeScroll = function(a) {
  (this.writeToggle = !this.writeToggle) ? (this.fineXScroll = a & 7, this.tempAddress = this.tempAddress & 65504 | a >>> 3) : this.tempAddress = this.tempAddress & 3103 | (a & 248) << 2 | (a & 7) << 12;
};
H.prototype.updateScrolling = function() {
  this.cycleFlags & t.INC_CX && this.incrementCoarseXScroll();
  this.cycleFlags & t.INC_FY && this.incrementFineYScroll();
  this.cycleFlags & t.COPY_HS && this.copyHorizontalScrollBits();
  this.cycleFlags & t.COPY_VS && this.copyVerticalScrollBits();
};
H.prototype.copyHorizontalScrollBits = function() {
  this.vramAddress = this.vramAddress & 31712 | this.tempAddress & 1055;
};
H.prototype.copyVerticalScrollBits = function() {
  this.vramAddress = this.vramAddress & 1055 | this.tempAddress & 31712;
};
H.prototype.incrementCoarseXScroll = function() {
  31 === (this.vramAddress & 31) ? (this.vramAddress &= 65504, this.vramAddress ^= 1024) : this.vramAddress += 1;
};
H.prototype.incrementFineYScroll = function() {
  28672 === (this.vramAddress & 28672) ? (this.vramAddress &= 4095, this.incrementCoarseYScroll()) : this.vramAddress += 4096;
};
H.prototype.incrementCoarseYScroll = function() {
  992 === (this.vramAddress & 992) ? this.vramAddress &= 64543 : 928 === (this.vramAddress & 992) ? (this.vramAddress &= 64543, this.vramAddress ^= 2048) : this.vramAddress += 32;
};
H.prototype.setFrameBuffer = function(a) {
  this.frameBuffer = a;
  this.framePosition = 0;
  this.frameAvailable = !1;
};
H.prototype.isFrameAvailable = function() {
  return this.frameAvailable;
};
H.prototype.isBrightFramePixel = function(a, b) {
  if (b < this.scanline - 5 || b >= this.scanline) {
    return !1;
  }
  var d = c.makeIterator(r.unpackColor(this.frameBuffer[b * Ta.VIDEO_WIDTH + a]));
  a = d.next().value;
  b = d.next().value;
  d = d.next().value;
  return 18 < a || 18 < b || 18 < d;
};
H.prototype.setFramePixel = function(a) {
  this.frameBuffer[this.framePosition++] = this.palette[a & 63];
};
H.prototype.setFramePixelOnPosition = function(a, b, d) {
  this.frameBuffer[b * Ta.VIDEO_WIDTH + a] = this.palette[d & 63];
};
H.prototype.clearFramePixel = function() {
  this.frameBuffer[this.framePosition++] = r.BLACK_COLOR;
};
H.prototype.updateVBlank = function() {
  this.nmiDelay && (this.nmiEnabled ? --this.nmiDelay || this.nmiSuppressed || this.cpu.activateInterrupt(Ha.NMI) : this.nmiDelay = 0);
  this.cycleFlags & t.VB_START ? this.enterVBlank() : this.cycleFlags & t.VB_END && this.leaveVBlank();
};
H.prototype.enterVBlank = function() {
  this.vblankSuppressed || (this.vblankFlag = 1);
  this.frameAvailable = this.vblankActive = !0;
  this.nmiDelay = 2;
};
H.prototype.leaveVBlank = function() {
  this.vblankActive = !1;
  this.vblankFlag = 0;
  this.nmiSuppressed = this.vblankSuppressed = !1;
  this.spriteOverflow = this.spriteZeroHit = 0;
};
H.prototype.incrementCycle = function() {
  this.cycleFlags & t.SKIP && this.oddFrame && this.isRenderingEnabled() && this.cycle++;
  this.cycle++;
  340 < this.cycle && this.incrementScanline();
  this.cycleFlags = t.compute(this.scanline, this.cycle);
};
H.prototype.incrementScanline = function() {
  this.cycle = 0;
  this.scanline++;
  261 < this.scanline && this.incrementFrame();
  239 >= this.scanline && (this.clearSprites(), 0 < this.scanline && this.preRenderSprites());
};
H.prototype.incrementFrame = function() {
  this.scanline = 0;
  this.oddFrame = !this.oddFrame;
  this.framePosition = 0;
};
H.prototype.tick = function() {
  this.isRenderingEnabled() ? (this.fetchData(), this.doRendering(), this.updateScrolling()) : (this.skipRendering(), this.addressBus = this.vramAddress);
  this.updateVBlank();
  this.incrementCycle();
};
H.prototype.fetchData = function() {
  this.cycleFlags & t.FETCH_NT ? this.fetchNametable() : this.cycleFlags & t.FETCH_AT ? this.fetchAttribute() : this.cycleFlags & t.FETCH_BGL ? this.fetchBackgroundLow() : this.cycleFlags & t.FETCH_BGH ? this.fetchBackgroundHigh() : this.cycleFlags & t.FETCH_SPL ? this.fetchSpriteLow() : this.cycleFlags & t.FETCH_SPH && this.fetchSpriteHigh();
};
H.prototype.doRendering = function() {
  this.cycleFlags & t.EVAL_SP && this.evaluateSprites();
  this.cycleFlags & t.COPY_BG && this.copyBackground();
  this.cycleFlags & t.RENDER && this.updateFramePixel();
  this.cycleFlags & t.SHIFT_BG && this.shiftBackground();
};
H.prototype.skipRendering = function() {
  this.cycleFlags & t.RENDER && this.clearFramePixel();
};
H.prototype.isRenderingActive = function() {
  return !this.vblankActive && this.isRenderingEnabled();
};
H.prototype.isRenderingEnabled = function() {
  return this.spritesVisible || this.backgroundVisible;
};
H.prototype.updateFramePixel = function() {
  var a = this.renderFramePixel();
  this.clipTopBottom && this.cycleFlags & t.CLIP_TB ? this.clearFramePixel() : (a = this.ppuMemory.readPalette(a), this.setFramePixel(a));
};
H.prototype.renderFramePixel = function() {
  var a = this.renderBackgroundPixel(), b = this.renderSpritePixel();
  if (a & 3) {
    if (b & 3) {
      var d = this.getRenderedSprite();
      d.zeroSprite && 256 !== this.cycle && (this.spriteZeroHit = 1);
      if (d.inFront) {
        return b;
      }
    }
    return a;
  }
  return b & 3 ? b : 0;
};
H.prototype.fetchNametable = function() {
  this.addressBus = 8192 | this.vramAddress & 4095;
  var a = this.ppuMemory.readNametable(this.addressBus);
  this.patternRowAddress = this.bgPatternTableAddress + (a << 4) + (this.vramAddress >>> 12 & 7);
};
H.prototype.fetchAttribute = function() {
  this.addressBus = (9152 | this.vramAddress & 3072) + (this.vramAddress >>> 4 & 56 | this.vramAddress >>> 2 & 7);
  var a = this.ppuMemory.readNametable(this.addressBus) >>> (this.vramAddress >>> 4 & 4 | this.vramAddress & 2) & 3;
  this.paletteLatchNext0 = a & 1;
  this.paletteLatchNext1 = a >>> 1 & 1;
};
H.prototype.fetchBackgroundLow = function() {
  this.addressBus = this.patternRowAddress;
  this.patternBufferNext0 = this.ppuMemory.readPattern(this.addressBus);
};
H.prototype.fetchBackgroundHigh = function() {
  this.addressBus = this.patternRowAddress + 8;
  this.patternBufferNext1 = this.ppuMemory.readPattern(this.addressBus);
};
H.prototype.copyBackground = function() {
  this.patternBuffer0 |= this.patternBufferNext0;
  this.patternBuffer1 |= this.patternBufferNext1;
  this.paletteLatch0 = this.paletteLatchNext0;
  this.paletteLatch1 = this.paletteLatchNext1;
};
H.prototype.shiftBackground = function() {
  this.patternBuffer0 <<= 1;
  this.patternBuffer1 <<= 1;
  this.paletteBuffer0 = this.paletteBuffer0 << 1 | this.paletteLatch0;
  this.paletteBuffer1 = this.paletteBuffer1 << 1 | this.paletteLatch1;
};
H.prototype.renderBackgroundPixel = function() {
  return this.isBackgroundPixelVisible() ? this.paletteBuffer1 << this.fineXScroll >> 4 & 8 | this.paletteBuffer0 << this.fineXScroll >> 5 & 4 | this.patternBuffer1 << this.fineXScroll >> 14 & 2 | this.patternBuffer0 << this.fineXScroll >> 15 & 1 : 0;
};
H.prototype.isBackgroundPixelVisible = function() {
  return this.backgroundVisible && !(this.backgroundClipping && this.cycleFlags & t.CLIP_LEFT);
};
H.prototype.evaluateSprites = function() {
  this.spriteCount = this.spriteNumber = 0;
  for (var a = this.bigSprites ? 16 : 8, b = this.scanline + 1, d = b - a + 1, f = 0; f < this.primaryOAM.length; f += 4) {
    var k = this.primaryOAM[f] + 1;
    if (!(k < d || k > b)) {
      if (8 <= this.spriteCount) {
        this.spriteOverflow = 1;
        break;
      }
      var u = this.spPatternTableAddress, B = this.primaryOAM[f + 1];
      this.bigSprites && (u = (B & 1) << 12, B &= 254);
      var C = this.primaryOAM[f + 2];
      k = b - k;
      C & 128 && (k = a - k - 1);
      8 <= k && (k -= 8, B++);
      var n = this.secondaryOAM[this.spriteCount];
      n.x = this.primaryOAM[f + 3];
      n.zeroSprite = 0 === f;
      n.horizontalFlip = C & 64;
      n.paletteNumber = 16 | (C & 3) << 2;
      n.inFront = 0 === (C & 32);
      n.patternRowAddress = u + (B << 4) + k;
      this.spriteCount++;
    }
  }
};
H.prototype.fetchSpriteLow = function() {
  if (this.spriteNumber < this.spriteCount) {
    var a = this.secondaryOAM[this.spriteNumber];
    this.addressBus = a.patternRowAddress;
    a.patternRow0 = this.ppuMemory.readPattern(this.addressBus);
  } else {
    this.addressBus = this.spPatternTableAddress | 4080;
  }
};
H.prototype.fetchSpriteHigh = function() {
  if (this.spriteNumber < this.spriteCount) {
    var a = this.secondaryOAM[this.spriteNumber++];
    this.addressBus = a.patternRowAddress + 8;
    a.patternRow1 = this.ppuMemory.readPattern(this.addressBus);
  } else {
    this.addressBus = this.spPatternTableAddress | 4080;
  }
};
H.prototype.clearSprites = function() {
  this.spriteCache.fill(null);
  this.spritePixelCache.fill(0);
};
H.prototype.preRenderSprites = function() {
  for (var a = 0; a < this.spriteCount; a++) {
    for (var b = this.secondaryOAM[a], d = 0; 8 > d; d++) {
      var f = b.x + d + 1;
      if (f > Ta.VIDEO_WIDTH) {
        break;
      }
      if (!this.spriteCache[f]) {
        var k = b.horizontalFlip ? d : d ^ 7;
        if (k = (b.patternRow1 >>> k & 1) << 1 | b.patternRow0 >>> k & 1) {
          this.spriteCache[f] = b, this.spritePixelCache[f] = b.paletteNumber | k;
        }
      }
    }
  }
};
H.prototype.renderSpritePixel = function() {
  return this.isSpritePixelVisible() ? this.spritePixelCache[this.cycle] : 0;
};
H.prototype.isSpritePixelVisible = function() {
  return this.spritesVisible && !(this.spriteClipping && this.cycleFlags & t.CLIP_LEFT);
};
H.prototype.getRenderedSprite = function() {
  return this.spriteCache[this.cycle];
};
H.prototype.renderDebugFrame = function() {
  this.renderPatterns();
  this.renderPalettes();
};
H.prototype.renderPatterns = function() {
  for (var a = 0; 16 > a; a++) {
    for (var b = a << 3, d = 0; 32 > d; d++) {
      this.renderPatternTile(d << 3, b, ((d & 16) << 4 | a << 4 | d & 15) << 4);
    }
  }
};
H.prototype.renderPatternTile = function(a, b, d) {
  for (var f = 0; 8 > f; f++) {
    for (var k = b + f, u = this.ppuMemory.readPattern(d + f), B = this.ppuMemory.readPattern(d + f + 8), C = 0; 8 > C; C++) {
      var n = a + C, q = C ^ 7;
      q = this.ppuMemory.readPalette((B >> q & 1) << 1 | u >> q & 1);
      this.setFramePixelOnPosition(n, k, q);
    }
  }
};
H.prototype.renderPalettes = function() {
  for (var a = 0; 4 > a; a++) {
    for (var b = 28 * a + 128, d = 0; 8 > d; d++) {
      var f = d << 5, k = this.ppuMemory.readPalette(a << 3 | d);
      this.renderPaletteTile(f, b, k);
    }
  }
};
H.prototype.renderPaletteTile = function(a, b, d) {
  for (var f = b; f < b + 28; f++) {
    for (var k = a; k < a + 32; k++) {
      this.setFramePixelOnPosition(k, f, d);
    }
  }
};
eb.default = H;
// Input 41
var I = {};
I.PPU = eb.default;
I.VIDEO_WIDTH = Ta.VIDEO_WIDTH;
I.VIDEO_HEIGHT = Ta.VIDEO_HEIGHT;
I.packColor = r.packColor;
I.unpackColor = r.unpackColor;
I.BLACK_COLOR = r.BLACK_COLOR;
I.createPalette = bb.createPalette;
I.isPaletteName = bb.isPaletteName;
I.DEFAULT_PALETTE = bb.DEFAULT_PALETTE;
// Input 42
var fb = {}, J = Array(255);
function K() {
  e.log.info('Initializing CPU');
  this.halted = !1;
  this.negativeFlag = this.overflowFlag = this.decimalFlag = this.interruptFlag = this.zeroFlag = this.carryFlag = this.registerY = this.registerX = this.accumulator = this.stackPointer = this.programCounter = this.pageCrossed = this.irqDisabled = this.activeInterrupts = this.operationFlags = 0;
  this.apu = this.ppu = this.dma = this.cpuMemory = this.mapper = null;
}
K.prototype.connect = function(a) {
  e.log.info('Connecting CPU');
  this.cpuMemory = a.cpuMemory;
  this.ppu = a.ppu;
  this.apu = a.apu;
  this.dma = a.dma;
};
K.prototype.setMapper = function(a) {
  this.mapper = a;
};
K.prototype.reset = function() {
  e.log.info('Resetting CPU');
  this.resetState();
  this.resetMemory();
  this.handleReset();
};
K.prototype.resetState = function() {
  this.activeInterrupts = 0;
  this.halted = !1;
  this.registerY = this.registerX = this.accumulator = this.stackPointer = 0;
  this.setStatus(0);
};
K.prototype.resetMemory = function() {
  for (var a = 0; 8 > a; a++) {
    this.cpuMemory.write(a, 255);
  }
  this.cpuMemory.write(8, 247);
  this.cpuMemory.write(9, 239);
  this.cpuMemory.write(10, 223);
  this.cpuMemory.write(15, 191);
  for (a = 16; 2048 > a; a++) {
    this.cpuMemory.write(a, 255);
  }
  for (a = 16384; 16400 > a; a++) {
    this.cpuMemory.write(a, 0);
  }
};
K.prototype.step = function() {
  var a = this.dma.isBlockingCPU() || this.apu.isBlockingCPU();
  this.activeInterrupts && !a && this.resolveInterrupt();
  this.halted || a ? this.tick() : this.readAndExecuteOperation();
};
K.prototype.resolveInterrupt = function() {
  if (this.activeInterrupts & Ha.RESET) {
    this.handleReset();
  } else {
    if (this.activeInterrupts & Ha.NMI) {
      this.handleNMI();
    } else {
      if (this.irqDisabled) {
        return;
      }
      this.handleIRQ();
    }
  }
  this.tick();
  this.tick();
};
K.prototype.handleReset = function() {
  this.writeByte(16405, 0);
  this.writeByte(16407, this.apu.frameCounterLast);
  this.stackPointer = this.stackPointer - 3 & 255;
  this.enterInterruptHandler(65532);
  this.clearInterrupt(Ha.RESET);
  this.tick();
  this.halted = !1;
};
K.prototype.handleNMI = function() {
  this.saveStateBeforeInterrupt();
  this.enterInterruptHandler(65530);
  this.clearInterrupt(Ha.NMI);
};
K.prototype.handleIRQ = function() {
  this.saveStateBeforeInterrupt();
  this.enterInterruptHandler(65534);
};
K.prototype.saveStateBeforeInterrupt = function() {
  this.pushWord(this.programCounter);
  this.pushByte(this.getStatus());
};
K.prototype.enterInterruptHandler = function(a) {
  this.interruptFlag = 1;
  this.programCounter = this.readWord(a);
};
K.prototype.readAndExecuteOperation = function() {
  var a = this.readOperation();
  a ? (this.beforeOperation(a), this.executeOperation(a)) : (e.log.warn('CPU halted!'), this.halted = !0);
};
K.prototype.beforeOperation = function(a) {
  this.irqDisabled = this.interruptFlag;
  this.operationFlags = a[2];
};
K.prototype.executeOperation = function(a) {
  var b = c.makeIterator(a);
  a = b.next().value;
  b = b.next().value.call(this);
  a.call(this, b);
};
K.prototype.readOperation = function() {
  return J[this.readNextProgramByte()];
};
K.prototype.readNextProgramByte = function() {
  return this.readByte(this.moveProgramCounter(1));
};
K.prototype.readNextProgramWord = function() {
  return this.readWord(this.moveProgramCounter(2));
};
K.prototype.moveProgramCounter = function(a) {
  var b = this.programCounter;
  this.programCounter = this.programCounter + a & 65535;
  return b;
};
K.prototype.readByte = function(a) {
  this.tick();
  return this.cpuMemory.read(a);
};
K.prototype.readWord = function(a) {
  var b = a + 1 & 65535;
  a = this.readByte(a);
  return this.readByte(b) << 8 | a;
};
K.prototype.readWordFromSamePage = function(a) {
  var b = a & 65280 | a + 1 & 255;
  a = this.readByte(a);
  return this.readByte(b) << 8 | a;
};
K.prototype.writeByte = function(a, b) {
  this.tick();
  this.cpuMemory.write(a, b);
  return b;
};
K.prototype.writeWord = function(a, b) {
  this.writeByte(a, b & 255);
  return this.writeByte(a + 1 & 65535, b >>> 8);
};
K.prototype.readWriteByte = function(a) {
  var b = this.readByte(a);
  return this.writeByte(a, b);
};
K.prototype.pushByte = function(a) {
  this.writeByte(256 + this.stackPointer, a);
  this.stackPointer = this.stackPointer - 1 & 255;
};
K.prototype.pushWord = function(a) {
  this.pushByte(a >>> 8);
  this.pushByte(a & 255);
};
K.prototype.popByte = function() {
  this.stackPointer = this.stackPointer + 1 & 255;
  return this.readByte(256 + this.stackPointer);
};
K.prototype.popWord = function() {
  return this.popByte() | this.popByte() << 8;
};
K.prototype.getStatus = function() {
  return this.carryFlag | this.zeroFlag << 1 | this.interruptFlag << 2 | this.decimalFlag << 3 | 32 | this.overflowFlag << 6 | this.negativeFlag << 7;
};
K.prototype.setStatus = function(a) {
  this.carryFlag = a & 1;
  this.zeroFlag = a >>> 1 & 1;
  this.interruptFlag = a >>> 2 & 1;
  this.decimalFlag = a >>> 3 & 1;
  this.overflowFlag = a >>> 6 & 1;
  this.negativeFlag = a >>> 7;
};
K.prototype.activateInterrupt = function(a) {
  this.activeInterrupts |= a;
};
K.prototype.clearInterrupt = function(a) {
  this.activeInterrupts &= ~a;
};
K.prototype.tick = function() {
  this.apu.isBlockingDMA() || (this.dma.tick(), this.mapper.tick());
  this.ppu.tick();
  this.ppu.tick();
  this.ppu.tick();
  this.apu.tick();
};
K.prototype.impliedMode = function() {
  this.tick();
};
K.prototype.accumulatorMode = function() {
  this.tick();
};
K.prototype.immediateMode = function() {
  return this.moveProgramCounter(1);
};
K.prototype.zeroPageMode = function() {
  return this.readNextProgramByte();
};
K.prototype.zeroPageXMode = function() {
  return this.computeZeroPageAddress(this.readNextProgramByte(), this.registerX);
};
K.prototype.zeroPageYMode = function() {
  return this.computeZeroPageAddress(this.readNextProgramByte(), this.registerY);
};
K.prototype.absoluteMode = function() {
  return this.readNextProgramWord();
};
K.prototype.absoluteXMode = function() {
  return this.computeAbsoluteAddress(this.readNextProgramWord(), this.registerX);
};
K.prototype.absoluteYMode = function() {
  return this.computeAbsoluteAddress(this.readNextProgramWord(), this.registerY);
};
K.prototype.relativeMode = function() {
  var a = this.readNextProgramByte();
  return this.programCounter + (a & 128 ? a - 256 : a) & 65535;
};
K.prototype.indirectMode = function() {
  return this.readWordFromSamePage(this.readNextProgramWord());
};
K.prototype.indirectXMode = function() {
  return this.readWordFromSamePage(this.zeroPageXMode());
};
K.prototype.indirectYMode = function() {
  var a = this.readWordFromSamePage(this.readNextProgramByte());
  return this.computeAbsoluteAddress(a, this.registerY);
};
K.prototype.computeZeroPageAddress = function(a, b) {
  this.readByte(a);
  return a + b & 255;
};
K.prototype.computeAbsoluteAddress = function(a, b) {
  b = a + b & 65535;
  this.pageCrossed = (a & 65280) !== (b & 65280);
  (this.operationFlags & 2 || this.pageCrossed) && this.readByte(a & 65280 | b & 255);
  return b;
};
K.prototype.NOP = function() {
  this.operationFlags & 1 && this.tick();
};
K.prototype.CLC = function() {
  this.carryFlag = 0;
};
K.prototype.CLI = function() {
  this.irqDisabled = this.interruptFlag;
  this.interruptFlag = 0;
};
K.prototype.CLD = function() {
  this.decimalFlag = 0;
};
K.prototype.CLV = function() {
  this.overflowFlag = 0;
};
K.prototype.SEC = function() {
  this.carryFlag = 1;
};
K.prototype.SEI = function() {
  this.irqDisabled = this.interruptFlag;
  this.interruptFlag = 1;
};
K.prototype.SED = function() {
  this.decimalFlag = 1;
};
K.prototype.STA = function(a) {
  this.writeByte(a, this.accumulator);
};
K.prototype.STX = function(a) {
  this.writeByte(a, this.registerX);
};
K.prototype.SAX = function(a) {
  this.writeByte(a, this.accumulator & this.registerX);
};
K.prototype.STY = function(a) {
  this.writeByte(a, this.registerY);
};
K.prototype.SHA = function(a) {
  this.storeHighAddressIntoMemory(a, this.accumulator & this.registerX);
};
K.prototype.SHX = function(a) {
  this.storeHighAddressIntoMemory(a, this.registerX);
};
K.prototype.SHY = function(a) {
  this.storeHighAddressIntoMemory(a, this.registerY);
};
K.prototype.LDA = function(a) {
  this.storeValueIntoAccumulator(this.readByte(a));
};
K.prototype.LDX = function(a) {
  this.storeValueIntoRegisterX(this.readByte(a));
};
K.prototype.LDY = function(a) {
  this.storeValueIntoRegisterY(this.readByte(a));
};
K.prototype.LAX = function(a) {
  a = this.readByte(a);
  this.storeValueIntoAccumulator(a);
  this.storeValueIntoRegisterX(a);
};
K.prototype.LAS = function(a) {
  this.stackPointer &= this.readByte(a);
  this.storeValueIntoAccumulator(this.stackPointer);
  this.storeValueIntoRegisterX(this.stackPointer);
};
K.prototype.TAX = function() {
  this.storeValueIntoRegisterX(this.accumulator);
};
K.prototype.TAY = function() {
  this.storeValueIntoRegisterY(this.accumulator);
};
K.prototype.TXA = function() {
  this.storeValueIntoAccumulator(this.registerX);
};
K.prototype.TYA = function() {
  this.storeValueIntoAccumulator(this.registerY);
};
K.prototype.TSX = function() {
  this.storeValueIntoRegisterX(this.stackPointer);
};
K.prototype.TXS = function() {
  this.stackPointer = this.registerX;
};
K.prototype.PHA = function() {
  this.pushByte(this.accumulator);
};
K.prototype.PHP = function() {
  this.pushByte(this.getStatus() | 16);
};
K.prototype.PLA = function() {
  this.tick();
  this.storeValueIntoAccumulator(this.popByte());
};
K.prototype.PLP = function() {
  this.tick();
  this.irqDisabled = this.interruptFlag;
  this.setStatus(this.popByte());
};
K.prototype.AND = function(a) {
  return this.storeValueIntoAccumulator(this.accumulator & this.readByte(a));
};
K.prototype.ORA = function(a) {
  this.storeValueIntoAccumulator(this.accumulator | this.readByte(a));
};
K.prototype.EOR = function(a) {
  this.storeValueIntoAccumulator(this.accumulator ^ this.readByte(a));
};
K.prototype.BIT = function(a) {
  a = this.readByte(a);
  this.zeroFlag = !(this.accumulator & a) | 0;
  this.overflowFlag = a >>> 6 & 1;
  this.negativeFlag = a >>> 7;
};
K.prototype.INC = function(a) {
  return this.storeValueIntoMemory(a, this.readWriteByte(a) + 1 & 255);
};
K.prototype.INX = function() {
  this.storeValueIntoRegisterX(this.registerX + 1 & 255);
};
K.prototype.INY = function() {
  this.storeValueIntoRegisterY(this.registerY + 1 & 255);
};
K.prototype.DEC = function(a) {
  return this.storeValueIntoMemory(a, this.readWriteByte(a) - 1 & 255);
};
K.prototype.DEX = function() {
  this.storeValueIntoRegisterX(this.registerX - 1 & 255);
};
K.prototype.DEY = function() {
  this.storeValueIntoRegisterY(this.registerY - 1 & 255);
};
K.prototype.CMP = function(a) {
  this.compareRegisterAndMemory(this.accumulator, a);
};
K.prototype.CPX = function(a) {
  this.compareRegisterAndMemory(this.registerX, a);
};
K.prototype.CPY = function(a) {
  this.compareRegisterAndMemory(this.registerY, a);
};
K.prototype.BCC = function(a) {
  this.branchIf(!this.carryFlag, a);
};
K.prototype.BCS = function(a) {
  this.branchIf(this.carryFlag, a);
};
K.prototype.BNE = function(a) {
  this.branchIf(!this.zeroFlag, a);
};
K.prototype.BEQ = function(a) {
  this.branchIf(this.zeroFlag, a);
};
K.prototype.BVC = function(a) {
  this.branchIf(!this.overflowFlag, a);
};
K.prototype.BVS = function(a) {
  this.branchIf(this.overflowFlag, a);
};
K.prototype.BPL = function(a) {
  this.branchIf(!this.negativeFlag, a);
};
K.prototype.BMI = function(a) {
  this.branchIf(this.negativeFlag, a);
};
K.prototype.JMP = function(a) {
  this.programCounter = a;
};
K.prototype.JSR = function(a) {
  this.tick();
  this.pushWord(this.programCounter - 1 & 65535);
  this.programCounter = a;
};
K.prototype.RTS = function() {
  this.tick();
  this.tick();
  this.programCounter = this.popWord() + 1 & 65535;
};
K.prototype.BRK = function() {
  this.moveProgramCounter(1);
  this.pushWord(this.programCounter);
  this.pushByte(this.getStatus() | 16);
  this.interruptFlag = this.irqDisabled = 1;
  this.programCounter = this.readWord(this.activeInterrupts & Ha.NMI ? 65530 : 65534);
};
K.prototype.RTI = function() {
  this.tick();
  this.setStatus(this.popByte());
  this.irqDisabled = this.interruptFlag;
  this.programCounter = this.popWord();
};
K.prototype.ADC = function(a) {
  this.addValueToAccumulator(this.readByte(a));
};
K.prototype.SBC = function(a) {
  this.addValueToAccumulator(this.readByte(a) ^ 255);
};
K.prototype.ASL = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateLeft, !1);
};
K.prototype.LSR = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateRight, !1);
};
K.prototype.ROL = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateLeft, !0);
};
K.prototype.ROR = function(a) {
  return this.rotateAccumulatorOrMemory(a, this.rotateRight, !0);
};
K.prototype.DCP = function(a) {
  this.compareRegisterAndOperand(this.accumulator, this.DEC(a));
};
K.prototype.ISB = function(a) {
  this.addValueToAccumulator(this.INC(a) ^ 255);
};
K.prototype.SLO = function(a) {
  this.storeValueIntoAccumulator(this.accumulator | this.ASL(a));
};
K.prototype.SRE = function(a) {
  this.storeValueIntoAccumulator(this.accumulator ^ this.LSR(a));
};
K.prototype.RLA = function(a) {
  this.storeValueIntoAccumulator(this.accumulator & this.ROL(a));
};
K.prototype.XAA = function(a) {
  this.storeValueIntoAccumulator(this.registerX & this.AND(a));
};
K.prototype.RRA = function(a) {
  this.addValueToAccumulator(this.ROR(a));
};
K.prototype.AXS = function(a) {
  this.registerX = this.compareRegisterAndMemory(this.accumulator & this.registerX, a);
};
K.prototype.ANC = function(a) {
  this.rotateLeft(this.AND(a), !1);
};
K.prototype.ALR = function(a) {
  this.AND(a);
  this.LSR(null);
};
K.prototype.ARR = function(a) {
  this.AND(a);
  this.ROR(null);
  this.carryFlag = this.accumulator >>> 6 & 1;
  this.overflowFlag = this.accumulator >>> 5 & 1 ^ this.carryFlag;
};
K.prototype.TAS = function(a) {
  this.stackPointer = this.accumulator & this.registerX;
  this.SHA(a);
};
K.prototype.storeValueIntoAccumulator = function(a) {
  this.updateZeroAndNegativeFlag(a);
  return this.accumulator = a;
};
K.prototype.storeValueIntoRegisterX = function(a) {
  this.updateZeroAndNegativeFlag(a);
  this.registerX = a;
};
K.prototype.storeValueIntoRegisterY = function(a) {
  this.updateZeroAndNegativeFlag(a);
  this.registerY = a;
};
K.prototype.storeValueIntoMemory = function(a, b) {
  this.updateZeroAndNegativeFlag(b);
  return this.writeByte(a, b);
};
K.prototype.storeHighAddressIntoMemory = function(a, b) {
  this.pageCrossed ? this.writeByte(a, this.cpuMemory.read(a)) : this.writeByte(a, b & (a >>> 8) + 1);
};
K.prototype.addValueToAccumulator = function(a) {
  var b = this.accumulator + a + this.carryFlag;
  this.carryFlag = b >>> 8 & 1;
  this.overflowFlag = ((this.accumulator ^ b) & (a ^ b)) >>> 7 & 1;
  return this.storeValueIntoAccumulator(b & 255);
};
K.prototype.compareRegisterAndMemory = function(a, b) {
  return this.compareRegisterAndOperand(a, this.readByte(b));
};
K.prototype.compareRegisterAndOperand = function(a, b) {
  a -= b;
  this.carryFlag = 0 <= a | 0;
  this.updateZeroAndNegativeFlag(a);
  return a & 255;
};
K.prototype.branchIf = function(a, b) {
  a && (this.tick(), (this.programCounter & 65280) !== (b & 65280) && this.tick(), this.programCounter = b);
};
K.prototype.rotateAccumulatorOrMemory = function(a, b, d) {
  if (null != a) {
    return b = b.call(this, this.readWriteByte(a), d), this.storeValueIntoMemory(a, b);
  }
  a = b.call(this, this.accumulator, d);
  return this.storeValueIntoAccumulator(a);
};
K.prototype.rotateLeft = function(a, b) {
  b &= this.carryFlag;
  this.carryFlag = a >>> 7;
  return (a << 1 | b) & 255;
};
K.prototype.rotateRight = function(a, b) {
  b = (b & this.carryFlag) << 7;
  this.carryFlag = a & 1;
  return a >>> 1 | b;
};
K.prototype.updateZeroAndNegativeFlag = function(a) {
  this.zeroFlag = !(a & 255) | 0;
  this.negativeFlag = a >>> 7 & 1;
};
var L = K.prototype;
J[26] = [L.NOP, L.impliedMode, 0];
J[58] = [L.NOP, L.impliedMode, 0];
J[90] = [L.NOP, L.impliedMode, 0];
J[122] = [L.NOP, L.impliedMode, 0];
J[218] = [L.NOP, L.impliedMode, 0];
J[234] = [L.NOP, L.impliedMode, 0];
J[250] = [L.NOP, L.impliedMode, 0];
J[128] = [L.NOP, L.immediateMode, 1];
J[130] = [L.NOP, L.immediateMode, 1];
J[137] = [L.NOP, L.immediateMode, 1];
J[194] = [L.NOP, L.immediateMode, 1];
J[226] = [L.NOP, L.immediateMode, 1];
J[4] = [L.NOP, L.zeroPageMode, 1];
J[68] = [L.NOP, L.zeroPageMode, 1];
J[100] = [L.NOP, L.zeroPageMode, 1];
J[20] = [L.NOP, L.zeroPageXMode, 1];
J[52] = [L.NOP, L.zeroPageXMode, 1];
J[84] = [L.NOP, L.zeroPageXMode, 1];
J[116] = [L.NOP, L.zeroPageXMode, 1];
J[212] = [L.NOP, L.zeroPageXMode, 1];
J[244] = [L.NOP, L.zeroPageXMode, 1];
J[12] = [L.NOP, L.absoluteMode, 1];
J[28] = [L.NOP, L.absoluteXMode, 1];
J[60] = [L.NOP, L.absoluteXMode, 1];
J[92] = [L.NOP, L.absoluteXMode, 1];
J[124] = [L.NOP, L.absoluteXMode, 1];
J[220] = [L.NOP, L.absoluteXMode, 1];
J[252] = [L.NOP, L.absoluteXMode, 1];
J[24] = [L.CLC, L.impliedMode, 0];
J[88] = [L.CLI, L.impliedMode, 0];
J[216] = [L.CLD, L.impliedMode, 0];
J[184] = [L.CLV, L.impliedMode, 0];
J[56] = [L.SEC, L.impliedMode, 0];
J[120] = [L.SEI, L.impliedMode, 0];
J[248] = [L.SED, L.impliedMode, 0];
J[133] = [L.STA, L.zeroPageMode, 0];
J[149] = [L.STA, L.zeroPageXMode, 0];
J[141] = [L.STA, L.absoluteMode, 0];
J[157] = [L.STA, L.absoluteXMode, 2];
J[153] = [L.STA, L.absoluteYMode, 2];
J[129] = [L.STA, L.indirectXMode, 0];
J[145] = [L.STA, L.indirectYMode, 2];
J[134] = [L.STX, L.zeroPageMode, 0];
J[150] = [L.STX, L.zeroPageYMode, 0];
J[142] = [L.STX, L.absoluteMode, 0];
J[135] = [L.SAX, L.zeroPageMode, 0];
J[151] = [L.SAX, L.zeroPageYMode, 0];
J[143] = [L.SAX, L.absoluteMode, 0];
J[131] = [L.SAX, L.indirectXMode, 0];
J[132] = [L.STY, L.zeroPageMode, 0];
J[148] = [L.STY, L.zeroPageXMode, 0];
J[140] = [L.STY, L.absoluteMode, 0];
J[147] = [L.SHA, L.indirectYMode, 2];
J[159] = [L.SHA, L.absoluteYMode, 2];
J[158] = [L.SHX, L.absoluteYMode, 2];
J[156] = [L.SHY, L.absoluteXMode, 2];
J[169] = [L.LDA, L.immediateMode, 0];
J[165] = [L.LDA, L.zeroPageMode, 0];
J[181] = [L.LDA, L.zeroPageXMode, 0];
J[173] = [L.LDA, L.absoluteMode, 0];
J[189] = [L.LDA, L.absoluteXMode, 0];
J[185] = [L.LDA, L.absoluteYMode, 0];
J[161] = [L.LDA, L.indirectXMode, 0];
J[177] = [L.LDA, L.indirectYMode, 0];
J[162] = [L.LDX, L.immediateMode, 0];
J[166] = [L.LDX, L.zeroPageMode, 0];
J[182] = [L.LDX, L.zeroPageYMode, 0];
J[174] = [L.LDX, L.absoluteMode, 0];
J[190] = [L.LDX, L.absoluteYMode, 0];
J[160] = [L.LDY, L.immediateMode, 0];
J[164] = [L.LDY, L.zeroPageMode, 0];
J[180] = [L.LDY, L.zeroPageXMode, 0];
J[172] = [L.LDY, L.absoluteMode, 0];
J[188] = [L.LDY, L.absoluteXMode, 0];
J[171] = [L.LAX, L.immediateMode, 0];
J[167] = [L.LAX, L.zeroPageMode, 0];
J[183] = [L.LAX, L.zeroPageYMode, 0];
J[175] = [L.LAX, L.absoluteMode, 0];
J[191] = [L.LAX, L.absoluteYMode, 0];
J[163] = [L.LAX, L.indirectXMode, 0];
J[179] = [L.LAX, L.indirectYMode, 0];
J[187] = [L.LAS, L.absoluteYMode, 0];
J[170] = [L.TAX, L.impliedMode, 0];
J[168] = [L.TAY, L.impliedMode, 0];
J[138] = [L.TXA, L.impliedMode, 0];
J[152] = [L.TYA, L.impliedMode, 0];
J[154] = [L.TXS, L.impliedMode, 0];
J[186] = [L.TSX, L.impliedMode, 0];
J[72] = [L.PHA, L.impliedMode, 0];
J[8] = [L.PHP, L.impliedMode, 0];
J[104] = [L.PLA, L.impliedMode, 0];
J[40] = [L.PLP, L.impliedMode, 0];
J[41] = [L.AND, L.immediateMode, 0];
J[37] = [L.AND, L.zeroPageMode, 0];
J[53] = [L.AND, L.zeroPageXMode, 0];
J[45] = [L.AND, L.absoluteMode, 0];
J[61] = [L.AND, L.absoluteXMode, 0];
J[57] = [L.AND, L.absoluteYMode, 0];
J[33] = [L.AND, L.indirectXMode, 0];
J[49] = [L.AND, L.indirectYMode, 0];
J[9] = [L.ORA, L.immediateMode, 0];
J[5] = [L.ORA, L.zeroPageMode, 0];
J[21] = [L.ORA, L.zeroPageXMode, 0];
J[13] = [L.ORA, L.absoluteMode, 0];
J[29] = [L.ORA, L.absoluteXMode, 0];
J[25] = [L.ORA, L.absoluteYMode, 0];
J[1] = [L.ORA, L.indirectXMode, 0];
J[17] = [L.ORA, L.indirectYMode, 0];
J[73] = [L.EOR, L.immediateMode, 0];
J[69] = [L.EOR, L.zeroPageMode, 0];
J[85] = [L.EOR, L.zeroPageXMode, 0];
J[77] = [L.EOR, L.absoluteMode, 0];
J[93] = [L.EOR, L.absoluteXMode, 0];
J[89] = [L.EOR, L.absoluteYMode, 0];
J[65] = [L.EOR, L.indirectXMode, 0];
J[81] = [L.EOR, L.indirectYMode, 0];
J[36] = [L.BIT, L.zeroPageMode, 0];
J[44] = [L.BIT, L.absoluteMode, 0];
J[230] = [L.INC, L.zeroPageMode, 0];
J[246] = [L.INC, L.zeroPageXMode, 0];
J[238] = [L.INC, L.absoluteMode, 0];
J[254] = [L.INC, L.absoluteXMode, 2];
J[232] = [L.INX, L.impliedMode, 0];
J[200] = [L.INY, L.impliedMode, 0];
J[198] = [L.DEC, L.zeroPageMode, 0];
J[214] = [L.DEC, L.zeroPageXMode, 0];
J[206] = [L.DEC, L.absoluteMode, 0];
J[222] = [L.DEC, L.absoluteXMode, 2];
J[202] = [L.DEX, L.impliedMode, 0];
J[136] = [L.DEY, L.impliedMode, 0];
J[201] = [L.CMP, L.immediateMode, 0];
J[197] = [L.CMP, L.zeroPageMode, 0];
J[213] = [L.CMP, L.zeroPageXMode, 0];
J[205] = [L.CMP, L.absoluteMode, 0];
J[221] = [L.CMP, L.absoluteXMode, 0];
J[217] = [L.CMP, L.absoluteYMode, 0];
J[193] = [L.CMP, L.indirectXMode, 0];
J[209] = [L.CMP, L.indirectYMode, 0];
J[224] = [L.CPX, L.immediateMode, 0];
J[228] = [L.CPX, L.zeroPageMode, 0];
J[236] = [L.CPX, L.absoluteMode, 0];
J[192] = [L.CPY, L.immediateMode, 0];
J[196] = [L.CPY, L.zeroPageMode, 0];
J[204] = [L.CPY, L.absoluteMode, 0];
J[144] = [L.BCC, L.relativeMode, 0];
J[176] = [L.BCS, L.relativeMode, 0];
J[208] = [L.BNE, L.relativeMode, 0];
J[240] = [L.BEQ, L.relativeMode, 0];
J[80] = [L.BVC, L.relativeMode, 0];
J[112] = [L.BVS, L.relativeMode, 0];
J[16] = [L.BPL, L.relativeMode, 0];
J[48] = [L.BMI, L.relativeMode, 0];
J[76] = [L.JMP, L.absoluteMode, 0];
J[108] = [L.JMP, L.indirectMode, 0];
J[32] = [L.JSR, L.absoluteMode, 0];
J[96] = [L.RTS, L.impliedMode, 0];
J[0] = [L.BRK, L.impliedMode, 0];
J[64] = [L.RTI, L.impliedMode, 0];
J[105] = [L.ADC, L.immediateMode, 0];
J[101] = [L.ADC, L.zeroPageMode, 0];
J[117] = [L.ADC, L.zeroPageXMode, 0];
J[109] = [L.ADC, L.absoluteMode, 0];
J[125] = [L.ADC, L.absoluteXMode, 0];
J[121] = [L.ADC, L.absoluteYMode, 0];
J[97] = [L.ADC, L.indirectXMode, 0];
J[113] = [L.ADC, L.indirectYMode, 0];
J[233] = [L.SBC, L.immediateMode, 0];
J[235] = [L.SBC, L.immediateMode, 0];
J[229] = [L.SBC, L.zeroPageMode, 0];
J[245] = [L.SBC, L.zeroPageXMode, 0];
J[237] = [L.SBC, L.absoluteMode, 0];
J[253] = [L.SBC, L.absoluteXMode, 0];
J[249] = [L.SBC, L.absoluteYMode, 0];
J[225] = [L.SBC, L.indirectXMode, 0];
J[241] = [L.SBC, L.indirectYMode, 0];
J[10] = [L.ASL, L.accumulatorMode, 0];
J[6] = [L.ASL, L.zeroPageMode, 0];
J[22] = [L.ASL, L.zeroPageXMode, 0];
J[14] = [L.ASL, L.absoluteMode, 0];
J[30] = [L.ASL, L.absoluteXMode, 2];
J[74] = [L.LSR, L.accumulatorMode, 0];
J[70] = [L.LSR, L.zeroPageMode, 0];
J[86] = [L.LSR, L.zeroPageXMode, 0];
J[78] = [L.LSR, L.absoluteMode, 0];
J[94] = [L.LSR, L.absoluteXMode, 2];
J[42] = [L.ROL, L.accumulatorMode, 0];
J[38] = [L.ROL, L.zeroPageMode, 0];
J[54] = [L.ROL, L.zeroPageXMode, 0];
J[46] = [L.ROL, L.absoluteMode, 0];
J[62] = [L.ROL, L.absoluteXMode, 2];
J[106] = [L.ROR, L.accumulatorMode, 0];
J[102] = [L.ROR, L.zeroPageMode, 0];
J[118] = [L.ROR, L.zeroPageXMode, 0];
J[110] = [L.ROR, L.absoluteMode, 0];
J[126] = [L.ROR, L.absoluteXMode, 2];
J[199] = [L.DCP, L.zeroPageMode, 0];
J[215] = [L.DCP, L.zeroPageXMode, 0];
J[207] = [L.DCP, L.absoluteMode, 0];
J[223] = [L.DCP, L.absoluteXMode, 2];
J[219] = [L.DCP, L.absoluteYMode, 2];
J[195] = [L.DCP, L.indirectXMode, 0];
J[211] = [L.DCP, L.indirectYMode, 2];
J[231] = [L.ISB, L.zeroPageMode, 0];
J[247] = [L.ISB, L.zeroPageXMode, 0];
J[239] = [L.ISB, L.absoluteMode, 0];
J[255] = [L.ISB, L.absoluteXMode, 2];
J[251] = [L.ISB, L.absoluteYMode, 2];
J[227] = [L.ISB, L.indirectXMode, 0];
J[243] = [L.ISB, L.indirectYMode, 2];
J[7] = [L.SLO, L.zeroPageMode, 0];
J[23] = [L.SLO, L.zeroPageXMode, 0];
J[15] = [L.SLO, L.absoluteMode, 0];
J[31] = [L.SLO, L.absoluteXMode, 2];
J[27] = [L.SLO, L.absoluteYMode, 2];
J[3] = [L.SLO, L.indirectXMode, 0];
J[19] = [L.SLO, L.indirectYMode, 2];
J[71] = [L.SRE, L.zeroPageMode, 0];
J[87] = [L.SRE, L.zeroPageXMode, 0];
J[79] = [L.SRE, L.absoluteMode, 0];
J[95] = [L.SRE, L.absoluteXMode, 2];
J[91] = [L.SRE, L.absoluteYMode, 2];
J[67] = [L.SRE, L.indirectXMode, 0];
J[83] = [L.SRE, L.indirectYMode, 2];
J[39] = [L.RLA, L.zeroPageMode, 0];
J[55] = [L.RLA, L.zeroPageXMode, 0];
J[47] = [L.RLA, L.absoluteMode, 0];
J[63] = [L.RLA, L.absoluteXMode, 2];
J[59] = [L.RLA, L.absoluteYMode, 2];
J[35] = [L.RLA, L.indirectXMode, 0];
J[51] = [L.RLA, L.indirectYMode, 2];
J[139] = [L.XAA, L.immediateMode, 0];
J[103] = [L.RRA, L.zeroPageMode, 0];
J[119] = [L.RRA, L.zeroPageXMode, 0];
J[111] = [L.RRA, L.absoluteMode, 0];
J[127] = [L.RRA, L.absoluteXMode, 2];
J[123] = [L.RRA, L.absoluteYMode, 2];
J[99] = [L.RRA, L.indirectXMode, 0];
J[115] = [L.RRA, L.indirectYMode, 2];
J[203] = [L.AXS, L.immediateMode, 0];
J[11] = [L.ANC, L.immediateMode, 0];
J[43] = [L.ANC, L.immediateMode, 0];
J[75] = [L.ALR, L.immediateMode, 0];
J[107] = [L.ARR, L.immediateMode, 0];
J[155] = [L.TAS, L.absoluteYMode, 2];
fb.default = K;
// Input 43
var gb = {};
gb.CPU = fb.default;
gb.Interrupt = Ha;
// Input 44
var hb = {LENGTH_COUNTER_VALUES:[10, 254, 20, 2, 40, 4, 80, 6, 160, 8, 60, 10, 14, 12, 26, 14, 12, 16, 24, 18, 48, 20, 96, 22, 192, 24, 72, 26, 16, 28, 32, 30]};
// Input 45
var ib = {}, jb = [[0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0], [1, 0, 0, 1, 1, 1, 1, 1]];
function M(a) {
  e.log.info('Initializing pulse channel #' + a);
  this.id = a;
  this.enabled = !1;
  this.gain = 1;
  this.lengthCounter = this.timerPeriod = this.timerCycle = 0;
  this.useConstantVolume = this.lengthCounterHalt = !1;
  this.constantVolume = 0;
  this.envelopeReset = !1;
  this.envelopeVolume = this.envelopeCycle = 0;
  this.envelopeLoop = !1;
  this.envelopePeriod = 0;
  this.sweepEnabled = !1;
  this.sweepCycle = 0;
  this.sweepNegate = this.sweepReset = !1;
  this.dutySelection = this.dutyPosition = this.sweepShift = this.sweepPeriod = 0;
}
M.prototype.reset = function() {
  e.log.info('Resetting pulse channel #' + this.id);
  this.sweepCycle = this.envelopeVolume = this.envelopeCycle = this.timerPeriod = this.timerCycle = 0;
  this.setEnabled(!1);
  this.writeDutyEnvelope(0);
  this.writeSweep(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
M.prototype.setEnabled = function(a) {
  a || (this.lengthCounter = 0);
  this.enabled = a;
};
M.prototype.writeDutyEnvelope = function(a) {
  this.dutySelection = (a & 192) >>> 6;
  this.lengthCounterHalt = 0 !== (a & 32);
  this.useConstantVolume = 0 !== (a & 16);
  this.constantVolume = a & 15;
  this.envelopeLoop = this.lengthCounterHalt;
  this.envelopePeriod = this.constantVolume;
};
M.prototype.writeSweep = function(a) {
  this.sweepEnabled = 0 !== (a & 128);
  this.sweepPeriod = (a & 112) >>> 4;
  this.sweepNegate = 0 !== (a & 8);
  this.sweepShift = a & 7;
  this.sweepReset = !0;
};
M.prototype.writeTimer = function(a) {
  this.timerPeriod = this.timerPeriod & 1792 | a & 255;
};
M.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = hb.LENGTH_COUNTER_VALUES[(a & 248) >>> 3]);
  this.timerPeriod = this.timerPeriod & 255 | (a & 7) << 8;
  this.dutyPosition = 0;
  this.envelopeReset = !0;
};
M.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod + 1 << 1, this.dutyPosition = this.dutyPosition + 1 & 7);
};
M.prototype.tickQuarterFrame = function() {
  this.updateEnvelope();
};
M.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
  this.updateSweep();
};
M.prototype.updateEnvelope = function() {
  this.envelopeReset ? (this.envelopeReset = !1, this.envelopeCycle = this.envelopePeriod, this.envelopeVolume = 15) : 0 < this.envelopeCycle ? this.envelopeCycle-- : (this.envelopeCycle = this.envelopePeriod, 0 < this.envelopeVolume ? this.envelopeVolume-- : this.envelopeLoop && (this.envelopeVolume = 15));
};
M.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
M.prototype.updateSweep = function() {
  0 < this.sweepCycle ? this.sweepCycle-- : (this.sweepEnabled && this.sweepShift && this.isTimerPeriodValid() && (this.timerPeriod += this.getSweep()), this.sweepCycle = this.sweepPeriod);
  this.sweepReset && (this.sweepReset = !1, this.sweepCycle = this.sweepPeriod);
};
M.prototype.getSweep = function() {
  var a = this.timerPeriod >>> this.sweepShift;
  return this.sweepNegate ? 1 === this.id ? ~a : -a : a;
};
M.prototype.isTimerPeriodValid = function() {
  return 8 <= this.timerPeriod && 2048 > this.timerPeriod + this.getSweep();
};
M.prototype.getOutput = function() {
  return this.lengthCounter && this.isTimerPeriodValid() ? this.gain * (this.useConstantVolume ? this.constantVolume : this.envelopeVolume) * jb[this.dutySelection][this.dutyPosition] : 0;
};
ib.default = M;
// Input 46
var kb = {}, lb = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function mb() {
  e.log.info('Initializing triangle channel');
  this.enabled = !1;
  this.gain = 1;
  this.lengthCounter = this.timerPeriod = this.timerCycle = 0;
  this.lengthCounterHalt = !1;
  this.linearCounterMax = this.linearCounter = 0;
  this.linearCounterReset = this.linearCounterControl = !1;
  this.dutyPosition = 15;
}
mb.prototype.reset = function() {
  e.log.info('Resetting triangle channel');
  this.linearCounter = this.dutyPosition = this.timerPeriod = this.timerCycle = 0;
  this.setEnabled(!1);
  this.writeLinearCounter(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
mb.prototype.setEnabled = function(a) {
  a || (this.lengthCounter = 0);
  this.enabled = a;
};
mb.prototype.writeLinearCounter = function(a) {
  this.lengthCounterHalt = 0 !== (a & 128);
  this.linearCounterMax = a & 127;
  this.linearCounterControl = this.lengthCounterHalt;
};
mb.prototype.writeTimer = function(a) {
  this.timerPeriod = this.timerPeriod & 1792 | a & 255;
};
mb.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = hb.LENGTH_COUNTER_VALUES[(a & 248) >>> 3]);
  this.timerPeriod = this.timerPeriod & 255 | (a & 7) << 8;
  this.linearCounterReset = !0;
};
mb.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod + 1, this.lengthCounter && this.linearCounter && 3 < this.timerPeriod && (this.dutyPosition = this.dutyPosition + 1 & 31));
};
mb.prototype.tickQuarterFrame = function() {
  this.updateLinearCounter();
};
mb.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
};
mb.prototype.updateLinearCounter = function() {
  this.linearCounterReset ? this.linearCounter = this.linearCounterMax : 0 < this.linearCounter && this.linearCounter--;
  this.linearCounterControl || (this.linearCounterReset = !1);
};
mb.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
mb.prototype.getOutput = function() {
  return this.gain * lb[this.dutyPosition];
};
kb.default = mb;
// Input 47
var nb = {};
function ob() {
  e.log.info('Initializing noise channel');
  this.enabled = !1;
  this.gain = 1;
  this.timerMode = !1;
  this.timerPeriod = this.timerCycle = 0;
  this.timerPeriods = null;
  this.lengthCounter = 0;
  this.useConstantVolume = this.lengthCounterHalt = !1;
  this.constantVolume = 0;
  this.envelopeReset = !1;
  this.envelopeVolume = this.envelopeCycle = 0;
  this.envelopeLoop = !1;
  this.shiftRegister = this.envelopePeriod = 0;
}
ob.prototype.reset = function() {
  e.log.info('Resetting noise channel');
  this.envelopeVolume = this.envelopeCycle = this.timerCycle = 0;
  this.shiftRegister = 1;
  this.setEnabled(!1);
  this.writeEnvelope(0);
  this.writeTimer(0);
  this.writeLengthCounter(0);
};
ob.prototype.setEnabled = function(a) {
  a || (this.lengthCounter = 0);
  this.enabled = a;
};
ob.prototype.setRegionParams = function(a) {
  this.timerPeriods = a.noiseChannelTimerPeriods;
};
ob.prototype.writeEnvelope = function(a) {
  this.lengthCounterHalt = 0 !== (a & 32);
  this.useConstantVolume = 0 !== (a & 16);
  this.constantVolume = a & 15;
  this.envelopeLoop = this.lengthCounterHalt;
  this.envelopePeriod = this.constantVolume;
};
ob.prototype.writeTimer = function(a) {
  this.timerMode = 0 !== (a & 128);
  this.timerPeriod = this.timerPeriods[a & 15];
};
ob.prototype.writeLengthCounter = function(a) {
  this.enabled && (this.lengthCounter = hb.LENGTH_COUNTER_VALUES[(a & 248) >>> 3]);
  this.envelopeReset = !0;
};
ob.prototype.tick = function() {
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod, this.updateShiftRegister());
};
ob.prototype.tickQuarterFrame = function() {
  this.updateEnvelope();
};
ob.prototype.tickHalfFrame = function() {
  this.updateLengthCounter();
};
ob.prototype.updateShiftRegister = function() {
  this.shiftRegister = this.shiftRegister >>> 1 | (this.shiftRegister & 1 ^ this.shiftRegister >>> (this.timerMode ? 6 : 1) & 1) << 14;
};
ob.prototype.updateEnvelope = function() {
  this.envelopeReset ? (this.envelopeReset = !1, this.envelopeCycle = this.envelopePeriod, this.envelopeVolume = 15) : 0 < this.envelopeCycle ? this.envelopeCycle-- : (this.envelopeCycle = this.envelopePeriod, 0 < this.envelopeVolume ? this.envelopeVolume-- : this.envelopeLoop && (this.envelopeVolume = 15));
};
ob.prototype.updateLengthCounter = function() {
  0 < this.lengthCounter && !this.lengthCounterHalt && this.lengthCounter--;
};
ob.prototype.getOutput = function() {
  return !this.lengthCounter || this.shiftRegister & 1 ? 0 : this.gain * (this.useConstantVolume ? this.constantVolume : this.envelopeVolume);
};
nb.default = ob;
// Input 48
var pb = {};
function N() {
  e.log.info('Initializing DMC channel');
  this.enabled = !1;
  this.output = 0;
  this.gain = 1;
  this.timerPeriod = this.timerCycle = 0;
  this.timerPeriods = null;
  this.sampleRemainingLength = this.sampleCurrentAddress = this.sampleLength = this.sampleAddress = 0;
  this.sampleLoop = !1;
  this.shiftRegister = this.sampleBuffer = -1;
  this.memoryAccessCycles = this.shiftRegisterBits = 0;
  this.irqActive = this.irqEnabled = !1;
  this.cpuMemory = this.cpu = null;
}
N.prototype.connect = function(a) {
  e.log.info('Connecting DMC channel');
  this.cpu = a.cpu;
  this.cpuMemory = a.cpuMemory;
};
N.prototype.reset = function() {
  e.log.info('Resetting DMC channel');
  this.timerCycle = 0;
  this.shiftRegister = this.sampleBuffer = -1;
  this.memoryAccessCycles = this.shiftRegisterBits = 0;
  this.setEnabled(!1);
  this.writeFlagsTimer(0);
  this.writeOutputLevel(0);
  this.writeSampleAddress(0);
  this.writeSampleLength(0);
};
N.prototype.setEnabled = function(a) {
  a ? 0 === this.sampleRemainingLength && (this.sampleCurrentAddress = this.sampleAddress, this.sampleRemainingLength = this.sampleLength) : this.sampleRemainingLength = 0;
  this.enabled = a;
  this.clearIRQ();
};
N.prototype.setRegionParams = function(a) {
  this.timerPeriods = a.dmcChannelTimerPeriods;
};
N.prototype.activateIRQ = function() {
  this.irqActive = !0;
  this.cpu.activateInterrupt(Ha.IRQ_DMC);
};
N.prototype.clearIRQ = function() {
  this.irqActive = !1;
  this.cpu.clearInterrupt(Ha.IRQ_DMC);
};
N.prototype.writeFlagsTimer = function(a) {
  this.irqEnabled = 0 !== (a & 128);
  this.sampleLoop = 0 !== (a & 64);
  this.timerPeriod = this.timerPeriods[a & 15];
  this.irqEnabled || this.clearIRQ();
};
N.prototype.writeOutputLevel = function(a) {
  this.output = a & 127;
};
N.prototype.writeSampleAddress = function(a) {
  this.sampleAddress = 49152 | (a & 255) << 6;
};
N.prototype.writeSampleLength = function(a) {
  this.sampleLength = (a & 255) << 4 | 1;
};
N.prototype.tick = function() {
  0 < this.memoryAccessCycles && this.memoryAccessCycles--;
  0 >= --this.timerCycle && (this.timerCycle = this.timerPeriod, this.updateSample());
};
N.prototype.updateSample = function() {
  this.updateSampleBuffer();
  this.updateShiftRegister();
  this.updateOutput();
};
N.prototype.updateSampleBuffer = function() {
  0 > this.sampleBuffer && 0 < this.sampleRemainingLength && (this.sampleBuffer = this.cpuMemory.read(this.sampleCurrentAddress), this.memoryAccessCycles = 4, 65535 > this.sampleCurrentAddress ? this.sampleCurrentAddress++ : this.sampleCurrentAddress = 32768, 0 >= --this.sampleRemainingLength && (this.sampleLoop ? (this.sampleCurrentAddress = this.sampleAddress, this.sampleRemainingLength = this.sampleLength) : this.irqEnabled && this.activateIRQ()));
};
N.prototype.updateShiftRegister = function() {
  0 >= --this.shiftRegisterBits && (this.shiftRegisterBits = 8, this.shiftRegister = this.sampleBuffer, this.sampleBuffer = -1);
};
N.prototype.updateOutput = function() {
  0 <= this.shiftRegister && (this.shiftRegister & 1 ? 125 >= this.output && (this.output += 2) : 2 <= this.output && (this.output -= 2), this.shiftRegister >>>= 1);
};
N.prototype.getOutput = function() {
  return this.gain * this.output;
};
pb.default = N;
// Input 49
var qb = {};
qb.Pulse = ib.default;
qb.Triangle = kb.default;
qb.Noise = nb.default;
qb.DMC = pb.default;
// Input 50
var rb = {};
function O() {
  e.log.info('Initializing APU');
  this.pulse1 = new qb.Pulse(1);
  this.pulse2 = new qb.Pulse(2);
  this.triangle = new qb.Triangle;
  this.noise = new qb.Noise;
  this.dmc = new qb.DMC;
  this.channels = [this.pulse1, this.pulse2, this.triangle, this.noise, this.dmc];
  this.frameCounter = -1;
  this.frameCounterMax5 = this.frameCounterMax4 = null;
  this.frameCounterLast = this.frameCounterResetDelay = 0;
  this.frameFiveStepMode = !1;
  this.frameStep = 0;
  this.frameIrqDisabled = this.frameIrqActive = !1;
  this.ticksPerSecond = this.ticksToOutput = this.sampleRate = 0;
  this.cpu = this.callback = null;
}
O.prototype.connect = function(a) {
  e.log.info('Connecting APU');
  this.cpu = a.cpu;
  this.dmc.connect(a);
};
O.prototype.reset = function() {
  e.log.info('Resetting APU');
  this.pulse1.reset();
  this.pulse2.reset();
  this.triangle.reset();
  this.noise.reset();
  this.dmc.reset();
  this.clearFrameIRQ();
  this.writeFrameCounter(0);
};
O.prototype.setRegionParams = function(a) {
  e.log.info('Setting APU region parameters');
  this.frameCounterMax4 = a.frameCounterMax4;
  this.frameCounterMax5 = a.frameCounterMax5;
  this.ticksPerSecond = 29829.55 * a.framesPerSecond;
  this.noise.setRegionParams(a);
  this.dmc.setRegionParams(a);
};
O.prototype.setSampleRate = function(a) {
  this.sampleRate = a;
};
O.prototype.getSampleRate = function() {
  return this.sampleRate;
};
O.prototype.setCallback = function(a) {
  e.log.info((a ? 'Setting' : 'Removing') + ' APU callback');
  this.callback = a;
};
O.prototype.getCallback = function() {
  return this.callback;
};
O.prototype.setVolume = function(a, b) {
  e.log.info('Setting volume of APU channel #' + a + ' to ' + b);
  this.channels[a].gain = b;
};
O.prototype.getVolume = function(a) {
  return this.channels[a].gain;
};
O.prototype.writeFrameCounter = function(a) {
  this.frameCounterLast = a;
  this.frameFiveStepMode = 0 !== (a & 128);
  this.frameIrqDisabled = 0 !== (a & 64);
  this.frameCounterResetDelay = 4;
  this.frameStep = 0;
  0 > this.frameCounter && (this.frameCounter = this.getFrameCounterMax());
  this.frameIrqDisabled && this.clearFrameIRQ();
  this.frameFiveStepMode && (this.tickHalfFrame(), this.tickQuarterFrame());
};
O.prototype.getFrameCounterMax = function() {
  return (this.frameFiveStepMode ? this.frameCounterMax5 : this.frameCounterMax4)[this.frameStep];
};
O.prototype.activateFrameIRQ = function() {
  this.frameIrqActive = !0;
  this.cpu.activateInterrupt(Ha.IRQ_APU);
};
O.prototype.clearFrameIRQ = function() {
  this.frameIrqActive = !1;
  this.cpu.clearInterrupt(Ha.IRQ_APU);
};
O.prototype.writePulseDutyEnvelope = function(a, b) {
  this.getPulse(a).writeDutyEnvelope(b);
};
O.prototype.writePulseSweep = function(a, b) {
  this.getPulse(a).writeSweep(b);
};
O.prototype.writePulseTimer = function(a, b) {
  this.getPulse(a).writeTimer(b);
};
O.prototype.writePulseLengthCounter = function(a, b) {
  this.getPulse(a).writeLengthCounter(b);
};
O.prototype.getPulse = function(a) {
  return 1 === a ? this.pulse1 : this.pulse2;
};
O.prototype.writeTriangleLinearCounter = function(a) {
  this.triangle.writeLinearCounter(a);
};
O.prototype.writeTriangleTimer = function(a) {
  this.triangle.writeTimer(a);
};
O.prototype.writeTriangleLengthCounter = function(a) {
  this.triangle.writeLengthCounter(a);
};
O.prototype.writeNoiseEnvelope = function(a) {
  this.noise.writeEnvelope(a);
};
O.prototype.writeNoiseTimer = function(a) {
  this.noise.writeTimer(a);
};
O.prototype.writeNoiseLengthCounter = function(a) {
  this.noise.writeLengthCounter(a);
};
O.prototype.writeDMCFlagsTimer = function(a) {
  this.dmc.writeFlagsTimer(a);
};
O.prototype.writeDMCOutputLevel = function(a) {
  this.dmc.writeOutputLevel(a);
};
O.prototype.writeDMCSampleAddress = function(a) {
  this.dmc.writeSampleAddress(a);
};
O.prototype.writeDMCSampleLength = function(a) {
  this.dmc.writeSampleLength(a);
};
O.prototype.writeStatus = function(a) {
  this.pulse1.setEnabled(0 !== (a & 1));
  this.pulse2.setEnabled(0 !== (a & 2));
  this.triangle.setEnabled(0 !== (a & 4));
  this.noise.setEnabled(0 !== (a & 8));
  this.dmc.setEnabled(0 !== (a & 16));
};
O.prototype.readStatus = function() {
  var a = this.getStatus();
  this.clearFrameIRQ();
  return a;
};
O.prototype.getStatus = function() {
  return 0 < this.pulse1.lengthCounter | (0 < this.pulse2.lengthCounter) << 1 | (0 < this.triangle.lengthCounter) << 2 | (0 < this.noise.lengthCounter) << 3 | (0 < this.dmc.sampleRemainingLength) << 4 | this.frameIrqActive << 6 | this.dmc.irqActive << 7;
};
O.prototype.isBlockingCPU = function() {
  return 0 < this.dmc.memoryAccessCycles;
};
O.prototype.isBlockingDMA = function() {
  return 2 < this.dmc.memoryAccessCycles;
};
O.prototype.tick = function() {
  this.tickFrameCounter();
  this.pulse1.tick();
  this.pulse2.tick();
  this.triangle.tick();
  this.noise.tick();
  this.dmc.tick();
  this.tickOutput();
};
O.prototype.tickFrameCounter = function() {
  this.frameCounterResetDelay && 0 >= --this.frameCounterResetDelay && (this.frameCounter = this.getFrameCounterMax());
  0 >= --this.frameCounter && this.tickFrameStep();
};
O.prototype.tickFrameStep = function() {
  this.frameStep = (this.frameStep + 1) % 6;
  this.frameCounter = this.getFrameCounterMax();
  switch(this.frameStep) {
    case 1:
      this.tickQuarterFrame();
      break;
    case 2:
      this.tickQuarterFrame();
      this.tickHalfFrame();
      break;
    case 3:
      this.tickQuarterFrame();
      break;
    case 4:
      this.tickFrameIRQ();
      break;
    case 5:
      this.tickQuarterFrame();
      this.tickHalfFrame();
      this.tickFrameIRQ();
      break;
    case 0:
      this.tickFrameIRQ();
  }
};
O.prototype.tickQuarterFrame = function() {
  this.pulse1.tickQuarterFrame();
  this.pulse2.tickQuarterFrame();
  this.triangle.tickQuarterFrame();
  this.noise.tickQuarterFrame();
};
O.prototype.tickHalfFrame = function() {
  this.pulse1.tickHalfFrame();
  this.pulse2.tickHalfFrame();
  this.triangle.tickHalfFrame();
  this.noise.tickHalfFrame();
};
O.prototype.tickFrameIRQ = function() {
  this.frameIrqDisabled || this.frameFiveStepMode || this.activateFrameIRQ();
};
O.prototype.tickOutput = function() {
  this.callback && 0 >= --this.ticksToOutput && (this.ticksToOutput += this.ticksPerSecond / this.sampleRate, this.callback(this.getOutput()));
};
O.prototype.getOutput = function() {
  var a = 0, b = this.pulse1.getOutput(), d = this.pulse2.getOutput();
  if (b || d) {
    a += 95.88 / (8128 / (b + d) + 100);
  }
  b = this.triangle.getOutput();
  d = this.noise.getOutput();
  var f = this.dmc.getOutput();
  if (b || d || f) {
    a += 159.79 / (1 / (b / 8227 + d / 12241 + f / 22638) + 100);
  }
  return a;
};
rb.default = O;
// Input 51
var sb = {};
sb.APU = rb.default;
// Input 52
var tb = {};
function P(a) {
  a = void 0 === a ? {} : a;
  e.log.info('Initializing NES');
  this.cpu = a.cpu || new gb.CPU;
  this.ppu = a.ppu || new I.PPU;
  this.apu = a.apu || new sb.APU;
  this.dma = a.dma || new Sa.DMA;
  this.cpuMemory = a.cpuMemory || new Sa.CPUMemory;
  this.ppuMemory = a.ppuMemory || new Sa.PPUMemory;
  this.region = this.mapper = this.cartridge = null;
  this.connectUnits();
  this.applyRegion();
}
P.prototype.connectUnits = function() {
  this.cpu.connect(this);
  this.ppu.connect(this);
  this.apu.connect(this);
  this.dma.connect(this);
  this.cpuMemory.connect(this);
};
P.prototype.resetUnits = function() {
  this.cpuMemory.reset();
  this.ppuMemory.reset();
  this.mapper.reset();
  this.ppu.reset();
  this.apu.reset();
  this.dma.reset();
  this.cpu.reset();
};
P.prototype.setRegion = function(a) {
  this.region = a;
  this.applyRegion();
};
P.prototype.getRegion = function() {
  return this.region;
};
P.prototype.getUsedRegion = function() {
  return this.region || this.cartridge && this.cartridge.region || e.Region.NTSC;
};
P.prototype.applyRegion = function() {
  e.log.info('Updating region parameters');
  var a = this.getUsedRegion(), b = e.Region.getParams(a);
  e.log.info('Detected region: "' + a + '"');
  this.ppu.setRegionParams(b);
  this.apu.setRegionParams(b);
};
P.prototype.setCartridge = function(a) {
  this.cartridge && (e.log.info('Removing current cartridge'), this.mapper.disconnect(), this.cartridge = this.mapper = null);
  a && (e.log.info('Inserting cartridge'), this.cartridge = a, this.mapper = Sa.createMapper(a), this.mapper.connect(this), this.applyRegion(), this.power());
};
P.prototype.getCartridge = function() {
  return this.cartridge;
};
P.prototype.power = function() {
  this.cartridge && this.resetUnits();
};
P.prototype.reset = function() {
  this.cpu.activateInterrupt(gb.Interrupt.RESET);
};
P.prototype.setInputDevice = function(a, b) {
  var d = this.cpuMemory.getInputDevice(a);
  d && d.disconnect();
  this.cpuMemory.setInputDevice(a, b);
  b && b.connect(this);
};
P.prototype.getInputDevice = function(a) {
  return this.cpuMemory.getInputDevice(a);
};
P.prototype.setPalette = function(a) {
  this.ppu.setBasePalette(a);
};
P.prototype.getPalette = function() {
  return this.ppu.getBasePalette();
};
P.prototype.renderFrame = function(a) {
  if (this.cartridge) {
    for (this.ppu.setFrameBuffer(a); !this.ppu.isFrameAvailable();) {
      this.cpu.step();
    }
  } else {
    this.renderWhiteNoise(a);
  }
};
P.prototype.renderDebugFrame = function(a) {
  this.cartridge ? (this.ppu.setFrameBuffer(a), this.ppu.renderDebugFrame()) : this.renderEmptyFrame(a);
};
P.prototype.renderWhiteNoise = function(a) {
  for (var b = 0; b < a.length; b++) {
    var d = ~~(255 * Math.random());
    a[b] = I.packColor(d, d, d);
  }
};
P.prototype.renderEmptyFrame = function(a) {
  a.fill(I.BLACK_COLOR);
};
P.prototype.setAudioSampleRate = function(a) {
  this.apu.setSampleRate(a);
};
P.prototype.getAudioSampleRate = function() {
  return this.apu.getSampleRate();
};
P.prototype.setAudioCallback = function(a) {
  this.apu.setCallback(a);
};
P.prototype.getAudioCallback = function() {
  return this.apu.getCallback();
};
P.prototype.setAudioVolume = function(a, b) {
  this.apu.setVolume(a, b);
};
P.prototype.getAudioVolume = function(a) {
  return this.apu.getVolume(a);
};
P.prototype.getNVRAM = function() {
  return this.mapper ? this.mapper.getNVRAM() : null;
};
tb.default = P;
// Input 53
var ub = {};
function vb() {
  this.buttonStates = new Uint8Array(24);
  this.buttonStates[19] = 1;
  this.readPosition = 0;
}
vb.prototype.connect = function() {
  e.log.info('Connecting joypad');
};
vb.prototype.disconnect = function() {
  e.log.info('Disconnecting joypad');
};
vb.prototype.strobe = function() {
  this.readPosition = 0;
};
vb.prototype.read = function() {
  var a = this.buttonStates[this.readPosition];
  this.readPosition = (this.readPosition + 1) % this.buttonStates.length;
  return a;
};
vb.prototype.setButtonPressed = function(a, b) {
  this.buttonStates[a] = b ? 1 : 0;
};
vb.prototype.isButtonPressed = function(a) {
  return 1 === this.buttonStates[a];
};
ub.Button = {A:0, B:1, SELECT:2, START:3, UP:4, DOWN:5, LEFT:6, RIGHT:7};
ub.default = vb;
// Input 54
var wb = {};
function xb() {
  this.triggerPressed = !1;
  this.beamY = this.beamX = -1;
  this.ppu = null;
}
xb.prototype.connect = function(a) {
  e.log.info('Connecting zapper');
  this.ppu = a.ppu;
};
xb.prototype.disconnect = function() {
  e.log.info('Disconnecting zapper');
  this.ppu = null;
};
xb.prototype.strobe = function() {
};
xb.prototype.read = function() {
  return this.triggerPressed << 4 | !this.isLightDetected() << 3;
};
xb.prototype.isLightDetected = function() {
  return 0 <= this.beamX && this.beamX < I.VIDEO_WIDTH && 0 <= this.beamY && this.beamY < I.VIDEO_HEIGHT && this.ppu.isBrightFramePixel(this.beamX, this.beamY);
};
xb.prototype.setTriggerPressed = function(a) {
  this.triggerPressed = a;
};
xb.prototype.isTriggerPressed = function() {
  return this.triggerPressed;
};
xb.prototype.setBeamPosition = function(a, b) {
  this.beamX = a;
  this.beamY = b;
};
xb.prototype.getBeamPosition = function() {
  return [this.beamX, this.beamY];
};
wb.default = xb;
// Input 55
var yb = {};
yb.Joypad = ub.default;
yb.Button = ub.Button;
yb.Zapper = wb.default;
// Input 56
var zb = {}, Ab = {0:e.Mapper.NROM, 1:e.Mapper.MMC1, 2:e.Mapper.UNROM, 3:e.Mapper.CNROM, 4:e.Mapper.MMC3, 7:e.Mapper.AOROM, 11:e.Mapper.COLOR_DREAMS, 34:e.Mapper.BNROM}, Bb = {}, Cb = (Bb[17] = e.Submapper.SUROM, Bb[18] = e.Submapper.SOROM, Bb[19] = e.Submapper.SXROM, Bb);
function Db(a) {
  return 78 === a[0] && 69 === a[1] && 83 === a[2] && 26 === a[3];
}
function Eb(a) {
  return 0 < a ? 128 * Math.pow(2, a - 1) : 0;
}
zb.name = 'iNES / NES 2.0';
zb.supports = Db;
zb.parse = function(a) {
  if (!Db(a)) {
    throw Error('Incorrect signature');
  }
  if (16 > a.length) {
    throw Error('Input is too short: expected at least 16 B but got ' + e.formatSize(a.length));
  }
  var b = a[4], d = a[5], f = a[7] & 240 | a[6] >>> 4;
  var k = a[6] & 8 ? e.Mirroring.FOUR_SCREEN : a[6] & 1 ? e.Mirroring.VERTICAL : e.Mirroring.HORIZONTAL;
  if (8 === (a[7] & 12)) {
    e.log.info('Detected NES 2.0 format');
    var u = 2;
    f |= (a[8] & 15) << 8;
    var B = (a[8] & 240) >>> 4;
    b |= (a[9] & 15) << 8;
    d |= (a[9] & 240) << 4;
    var C = Eb((a[10] & 240) >>> 4);
    var n = Eb((a[11] & 240) >>> 4);
    var q = C + Eb(a[10] & 15);
    var S = n + Eb(a[11] & 15);
    var da = a[12] & 1 ? e.Region.PAL : e.Region.NTSC;
  } else {
    e.log.info('Detected iNES format'), u = 1, q = 8192 * (a[8] || 1), C = a[6] & 2 ? q : 0, S = d ? 0 : 8192, n = 0, da = a[9] & 1 ? e.Region.PAL : e.Region.NTSC;
  }
  if (0 === b) {
    throw Error('Invalid header: 0 PRG ROM units');
  }
  var W = 16 + (a[6] & 4 ? 512 : 0);
  b *= 16384;
  var Z = W + b;
  d *= 8192;
  var aa = Z + d, v = Ab[f] || f.toString();
  v === e.Mapper.BNROM && 0 < d && (v = e.Mapper.NINA_001);
  f = Cb[f << 4 | B];
  if (a.length < aa) {
    throw Error('Input is too short: expected at least ' + e.formatSize(aa) + ' but got ' + e.formatSize(a.length));
  }
  W = a.subarray(W, Z);
  a = d ? a.subarray(Z, aa) : void 0;
  return {version:u, mirroring:k, region:da, mapper:v, submapper:f, prgROMSize:b, prgROM:W, prgRAMSize:q, prgRAMSizeBattery:C, chrROMSize:d, chrROM:a, chrRAMSize:S, chrRAMSizeBattery:n};
};
// Input 57
var Fb = {default:[zb]};
// Input 58
var Gb = {}, Q = '0123456789abcdef'.split(''), Hb = [-2147483648, 8388608, 32768, 128], Ib = [24, 16, 8, 0];
Gb.default = function(a) {
  var b = a.length, d = Array(17), f = 0, k = 0, u = 0, B = 0, C = !1, n, q, S = 1732584193, da = 4023233417, W = 2562383102, Z = 271733878, aa = 3285377520;
  do {
    d[0] = f;
    d.fill(0, 1, 17);
    for (n = u; k < b && 64 > n; k++) {
      d[n >> 2] |= a[k] << Ib[n++ & 3];
    }
    B += n - u;
    u = n - 64;
    k === b && (d[n >> 2] |= Hb[n & 3], k++);
    f = d[16];
    k > b && 56 > n && (d[15] = B << 3, C = !0);
    for (q = 16; 80 > q; q++) {
      n = d[q - 3] ^ d[q - 8] ^ d[q - 14] ^ d[q - 16], d[q] = n << 1 | n >>> 31;
    }
    var v = S, x = da, y = W, z = Z, A = aa;
    for (q = 0; 20 > q; q += 5) {
      var G = x & y | ~x & z;
      n = v << 5 | v >>> 27;
      A = n + G + A + 1518500249 + d[q] << 0;
      x = x << 30 | x >>> 2;
      G = v & x | ~v & y;
      n = A << 5 | A >>> 27;
      z = n + G + z + 1518500249 + d[q + 1] << 0;
      v = v << 30 | v >>> 2;
      G = A & v | ~A & x;
      n = z << 5 | z >>> 27;
      y = n + G + y + 1518500249 + d[q + 2] << 0;
      A = A << 30 | A >>> 2;
      G = z & A | ~z & v;
      n = y << 5 | y >>> 27;
      x = n + G + x + 1518500249 + d[q + 3] << 0;
      z = z << 30 | z >>> 2;
      G = y & z | ~y & A;
      n = x << 5 | x >>> 27;
      v = n + G + v + 1518500249 + d[q + 4] << 0;
      y = y << 30 | y >>> 2;
    }
    for (; 40 > q; q += 5) {
      G = x ^ y ^ z, n = v << 5 | v >>> 27, A = n + G + A + 1859775393 + d[q] << 0, x = x << 30 | x >>> 2, G = v ^ x ^ y, n = A << 5 | A >>> 27, z = n + G + z + 1859775393 + d[q + 1] << 0, v = v << 30 | v >>> 2, G = A ^ v ^ x, n = z << 5 | z >>> 27, y = n + G + y + 1859775393 + d[q + 2] << 0, A = A << 30 | A >>> 2, G = z ^ A ^ v, n = y << 5 | y >>> 27, x = n + G + x + 1859775393 + d[q + 3] << 0, z = z << 30 | z >>> 2, G = y ^ z ^ A, n = x << 5 | x >>> 27, v = n + G + v + 1859775393 + d[q + 4] << 
      0, y = y << 30 | y >>> 2;
    }
    for (; 60 > q; q += 5) {
      G = x & y | x & z | y & z, n = v << 5 | v >>> 27, A = n + G + A - 1894007588 + d[q] << 0, x = x << 30 | x >>> 2, G = v & x | v & y | x & y, n = A << 5 | A >>> 27, z = n + G + z - 1894007588 + d[q + 1] << 0, v = v << 30 | v >>> 2, G = A & v | A & x | v & x, n = z << 5 | z >>> 27, y = n + G + y - 1894007588 + d[q + 2] << 0, A = A << 30 | A >>> 2, G = z & A | z & v | A & v, n = y << 5 | y >>> 27, x = n + G + x - 1894007588 + d[q + 3] << 0, z = z << 30 | z >>> 2, G = y & z | y & A | z & A, n = 
      x << 5 | x >>> 27, v = n + G + v - 1894007588 + d[q + 4] << 0, y = y << 30 | y >>> 2;
    }
    for (; 80 > q; q += 5) {
      G = x ^ y ^ z, n = v << 5 | v >>> 27, A = n + G + A - 899497514 + d[q] << 0, x = x << 30 | x >>> 2, G = v ^ x ^ y, n = A << 5 | A >>> 27, z = n + G + z - 899497514 + d[q + 1] << 0, v = v << 30 | v >>> 2, G = A ^ v ^ x, n = z << 5 | z >>> 27, y = n + G + y - 899497514 + d[q + 2] << 0, A = A << 30 | A >>> 2, G = z ^ A ^ v, n = y << 5 | y >>> 27, x = n + G + x - 899497514 + d[q + 3] << 0, z = z << 30 | z >>> 2, G = y ^ z ^ A, n = x << 5 | x >>> 27, v = n + G + v - 899497514 + d[q + 4] << 0, y = 
      y << 30 | y >>> 2;
    }
    S = S + v << 0;
    da = da + x << 0;
    W = W + y << 0;
    Z = Z + z << 0;
    aa = aa + A << 0;
  } while (!C);
  return Q[S >> 28 & 15] + Q[S >> 24 & 15] + Q[S >> 20 & 15] + Q[S >> 16 & 15] + Q[S >> 12 & 15] + Q[S >> 8 & 15] + Q[S >> 4 & 15] + Q[S & 15] + Q[da >> 28 & 15] + Q[da >> 24 & 15] + Q[da >> 20 & 15] + Q[da >> 16 & 15] + Q[da >> 12 & 15] + Q[da >> 8 & 15] + Q[da >> 4 & 15] + Q[da & 15] + Q[W >> 28 & 15] + Q[W >> 24 & 15] + Q[W >> 20 & 15] + Q[W >> 16 & 15] + Q[W >> 12 & 15] + Q[W >> 8 & 15] + Q[W >> 4 & 15] + Q[W & 15] + Q[Z >> 28 & 15] + Q[Z >> 24 & 15] + Q[Z >> 20 & 15] + Q[Z >> 16 & 15] + Q[Z >> 
  12 & 15] + Q[Z >> 8 & 15] + Q[Z >> 4 & 15] + Q[Z & 15] + Q[aa >> 28 & 15] + Q[aa >> 24 & 15] + Q[aa >> 20 & 15] + Q[aa >> 16 & 15] + Q[aa >> 12 & 15] + Q[aa >> 8 & 15] + Q[aa >> 4 & 15] + Q[aa & 15];
};
// Input 59
var Jb = {default:function(a) {
  e.log.info('Creating cartridge from ROM image');
  if (!(a instanceof Uint8Array)) {
    throw Error('Invalid ROM image: ' + e.describe(a));
  }
  e.log.info('Parsing ' + e.formatSize(a.length) + ' of data');
  for (var b = c.makeIterator(Fb.default), d = b.next(); !d.done; d = b.next()) {
    if (d = d.value, d.supports(a)) {
      return e.log.info('Using "' + d.name + '" parser'), a = d.parse(a), e.log.info('Computing SHA-1'), b = new Uint8Array(a.prgROMSize + a.chrROMSize), b.set(a.prgROM), a.chrROM && b.set(a.chrROM, a.prgROMSize), a.sha1 = Gb.default(b), e.log.info('==========[Cartridge Info - Start]=========='), e.log.info('SHA-1                 : ' + a.sha1), e.log.info('Mapper                : ' + a.mapper), e.log.info('Submapper             : ' + a.submapper), e.log.info('Region                : ' + a.region), 
      e.log.info('Mirroring             : ' + a.mirroring), e.log.info('PRG ROM size          : ' + e.formatSize(a.prgROMSize)), e.log.info('PRG RAM size          : ' + e.formatSize(a.prgRAMSize)), e.log.info('PRG RAM size (battery): ' + e.formatSize(a.prgRAMSizeBattery)), e.log.info('CHR ROM size          : ' + e.formatSize(a.chrROMSize)), e.log.info('CHR RAM size          : ' + e.formatSize(a.chrRAMSize)), e.log.info('CHR RAM size (battery): ' + e.formatSize(a.chrRAMSizeBattery)), e.log.info('==========[Cartridge Info - End]=========='), 
      a;
    }
  }
  throw Error('Unknown ROM image format');
}};
// Input 60
// Input 61
var Kb = {};
Kb.createCartridge = Jb.default;
Kb.readCartridge = function(a) {
  e.log.info('Reading ROM image from file "' + a + '"');
  a = require('fs').readFileSync(a);
  return Jb.default(new Uint8Array(a));
};
// Input 62
var R = {};
R.NES = tb.default;
R.APU = sb.APU;
R.CPU = gb.CPU;
R.Button = yb.Button;
R.Joypad = yb.Joypad;
R.Zapper = yb.Zapper;
R.createCartridge = Kb.createCartridge;
R.readCartridge = Kb.readCartridge;
R.log = e.log;
R.LogLevel = e.LogLevel;
R.Region = e.Region;
R.Mapper = e.Mapper;
R.formatSize = e.formatSize;
R.describe = e.describe;
R.PPU = I.PPU;
R.createPalette = I.createPalette;
R.isPaletteName = I.isPaletteName;
R.unpackColor = I.unpackColor;
R.DEFAULT_PALETTE = I.DEFAULT_PALETTE;
R.BLACK_COLOR = I.BLACK_COLOR;
R.VIDEO_WIDTH = I.VIDEO_WIDTH;
R.VIDEO_HEIGHT = I.VIDEO_HEIGHT;
// Input 63
var T = {};
T.NES = R.NES;
T.Button = R.Button;
T.Joypad = R.Joypad;
T.Zapper = R.Zapper;
T.createCartridge = R.createCartridge;
T.createPalette = R.createPalette;
T.isPaletteName = R.isPaletteName;
T.Region = R.Region;
T.LogLevel = R.LogLevel;
T.log = R.log;
T.formatSize = R.formatSize;
T.describe = R.describe;
T.DEFAULT_PALETTE = R.DEFAULT_PALETTE;
T.BLACK_COLOR = R.BLACK_COLOR;
T.VIDEO_WIDTH = R.VIDEO_WIDTH;
T.VIDEO_HEIGHT = R.VIDEO_HEIGHT;
// Input 64
var Lb = {}, Mb, Nb = window.AudioContext || window.webkitAudioContext;
Lb.hasAudioContext = function() {
  return null != Nb;
};
Lb.getAudioContext = function() {
  null == Mb && (Mb = new Nb);
  return Mb;
};
Lb.closeAudioContext = function() {
  if (null == Mb) {
    return Promise.resolve();
  }
  var a = Mb.close();
  Mb = void 0;
  return a;
};
// Input 65
var Ob = {};
function Pb(a, b) {
  var d = this;
  T.log.info('Initializing audio processor');
  this.nes = a;
  this.processorNode = b.createScriptProcessor(4096, 0, 1);
  this.processorNode.onaudioprocess = function(a) {
    return d.emptyOutputBuffer(a.outputBuffer);
  };
  this.lastSample = 0;
  this.receiveSample = this.receiveSample.bind(this);
  this.recordPosition = 0;
  this.recordBuffer = new Float32Array(4096);
  this.outputBuffer = new Float32Array(4096);
  this.outputBufferFull = !1;
}
Pb.prototype.connect = function(a) {
  T.log.info('Connecting audio processor');
  this.nes.setAudioCallback(this.receiveSample);
  this.processorNode.connect(a);
};
Pb.prototype.disconnect = function() {
  T.log.info('Disconnecting audio processor');
  this.nes.setAudioCallback(null);
  this.processorNode.disconnect();
};
Pb.prototype.setSampleRate = function(a) {
  T.log.info('Setting sample rate to ' + a + ' Hz');
  this.nes.setAudioSampleRate(a);
};
Pb.prototype.receiveSample = function(a) {
  if (4096 === this.recordPosition) {
    if (this.outputBufferFull) {
      return;
    }
    this.swapBuffers();
  }
  this.lastSample = this.recordBuffer[this.recordPosition++] = a;
};
Pb.prototype.emptyOutputBuffer = function(a) {
  this.outputBufferFull || (this.recordBuffer.fill(this.lastSample, this.recordPosition), this.swapBuffers());
  a.copyToChannel ? a.copyToChannel(this.outputBuffer, 0) : a.getChannelData(0).set(this.outputBuffer);
  this.outputBufferFull = !1;
  this.adjustSampleRate();
};
Pb.prototype.swapBuffers = function() {
  var a = c.makeIterator([this.recordBuffer, this.outputBuffer]);
  this.outputBuffer = a.next().value;
  this.recordBuffer = a.next().value;
  this.outputBufferFull = !0;
  this.recordPosition = 0;
};
Pb.prototype.adjustSampleRate = function() {
  var a = 100 * (0.5 - this.recordPosition / 4096);
  this.nes.setAudioSampleRate(this.nes.getAudioSampleRate() + a);
};
Ob.default = Pb;
// Input 66
var Qb = {}, Rb = {master:-1, pulse1:0, pulse2:1, triangle:2, noise:3, dmc:4};
function Sb(a, b) {
  T.log.info('Initializing audio mixer');
  this.nes = a;
  this.volume = 0.5;
  this.gainNode = b.createGain();
  this.gainNode.connect(b.destination);
  this.applyVolume();
}
Sb.prototype.getInput = function() {
  return this.gainNode;
};
Sb.prototype.setVolume = function(a, b) {
  if ('number' !== typeof b || 0 > b || 1 < b) {
    throw Error('Invalid audio volume: ' + T.describe(b));
  }
  this.getVolume(a) !== b && (T.log.info('Setting volume of "' + a + '" channel to ' + ~~(100 * b) + '%'), a = Rb[a], 0 <= a ? this.nes.setAudioVolume(a, b) : (this.volume = b, this.applyVolume()));
};
Sb.prototype.applyVolume = function() {
  this.gainNode.gain.value = this.volume;
};
Sb.prototype.getVolume = function(a) {
  var b = Rb[a];
  if (null == b) {
    throw Error('Invalid audio channel: ' + T.describe(a));
  }
  return 0 <= b ? this.nes.getAudioVolume(b) : this.volume;
};
Qb.channels = Rb;
Qb.default = Sb;
// Input 67
var Tb = {};
function Ub(a) {
  T.log.info('Initializing audio');
  this.enabled = !0;
  this.active = !1;
  this.speed = 1;
  this.context = Lb.getAudioContext();
  this.processor = new Ob.default(a, this.context);
  this.mixer = new Qb.default(a, this.context);
  this.applyEnabledAndActive();
  this.applySpeed();
}
Ub.prototype.setEnabled = function(a) {
  if ('boolean' !== typeof a) {
    throw Error('Invalid audio enabled: ' + T.describe(a));
  }
  this.enabled !== a && (T.log.info('Audio ' + (a ? 'enabled' : 'disabled')), this.enabled = a, this.applyEnabledAndActive());
};
Ub.prototype.isEnabled = function() {
  return this.enabled;
};
Ub.prototype.setActive = function(a) {
  this.active !== a && (T.log.info('Audio ' + (a ? 'resumed' : 'suspended')), this.active = a, this.applyEnabledAndActive());
};
Ub.prototype.isActive = function() {
  return this.active;
};
Ub.prototype.applyEnabledAndActive = function() {
  this.enabled && this.active ? (this.processor.connect(this.mixer.getInput()), this.context.resume()) : this.processor.disconnect();
};
Ub.prototype.setSpeed = function(a) {
  this.speed !== a && (T.log.info('Setting audio speed to ' + a + 'x'), this.speed = a, this.applySpeed());
};
Ub.prototype.applySpeed = function() {
  this.processor.setSampleRate(this.context.sampleRate / this.speed);
};
Ub.prototype.getSpeed = function() {
  return this.speed;
};
Ub.prototype.setVolume = function(a, b) {
  this.mixer.setVolume(a, b);
};
Ub.prototype.getVolume = function(a) {
  return this.mixer.getVolume(a);
};
Tb.default = Ub;
// Input 68
var Vb = {};
Vb.Audio = Tb.default;
Vb.channels = Qb.channels;
Vb.hasAudioContext = Lb.hasAudioContext;
Vb.closeAudioContext = Lb.closeAudioContext;
// Input 69
var Wb = {}, Xb = [1, 2];
Wb.default = Xb;
Wb.isPort = function(a) {
  return 0 <= Xb.indexOf(a);
};
// Input 70
var Yb = {};
function Zb(a, b) {
  this.source = a;
  this.name = b;
}
Zb.fromString = function(a) {
  a = a.split('.');
  if (2 !== a.length) {
    return null;
  }
  var b = c.makeIterator(a);
  a = b.next().value;
  b = b.next().value;
  return new Zb(a, b);
};
Zb.prototype.equals = function(a) {
  return this.source === a.source && this.name === a.name;
};
Zb.prototype.toString = function() {
  return this.source + '.' + this.name;
};
Yb.default = Zb;
// Input 71
var $b = {}, ac = {65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i', 74:'j', 75:'k', 76:'l', 77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r', 83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x', 89:'y', 90:'z', 48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 57:'9', 32:'space', 188:',', 190:'.', 191:'/', 186:';', 222:"'", 220:'\\', 219:'[', 221:']', 192:'`', 189:'-', 187:'=', 112:'f1', 113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 
121:'f10', 122:'f11', 123:'f12', 16:'shift', 17:'ctrl', 18:'alt', 37:'left', 38:'up', 39:'right', 40:'down', 9:'tab', 36:'home', 35:'end', 33:'page-up', 34:'page-down', 27:'escape', 19:'pause', 13:'enter', 8:'backspace', 45:'insert', 46:'delete', 20:'caps-lock', 144:'num-lock', 145:'scroll-lock', 96:'numpad-0', 97:'numpad-1', 98:'numpad-2', 99:'numpad-3', 100:'numpad-4', 101:'numpad-5', 102:'numpad-6', 103:'numpad-7', 104:'numpad-8', 105:'numpad-9', 107:'add', 109:'subtract', 106:'multiply', 111:'divide', 
110:'decimal-point'};
function bc(a) {
  var b = this;
  T.log.info('Initializing keyboard');
  this.router = a;
  this.keyDownCallback = function(a) {
    return b.onKeyChange(a, !0);
  };
  this.keyUpCallback = function(a) {
    return b.onKeyChange(a, !1);
  };
}
bc.prototype.activate = function() {
  T.log.info('Activating keyboard');
  window.addEventListener('keydown', this.keyDownCallback);
  window.addEventListener('keyup', this.keyUpCallback);
};
bc.prototype.deactivate = function() {
  T.log.info('Deactivating keyboard');
  window.removeEventListener('keydown', this.keyDownCallback);
  window.removeEventListener('keyup', this.keyUpCallback);
};
bc.prototype.onKeyChange = function(a, b) {
  var d = new Yb.default('keyboard', ac[a.keyCode || a.which]);
  this.router.routeInput(d, b) && a.preventDefault();
};
$b.KEYBOARD = 'keyboard';
$b.default = bc;
// Input 72
var cc = {}, dc = {0:'left', 1:'middle', 2:'right'};
function ec(a) {
  var b = this;
  T.log.info('Initializing mouse');
  this.router = a;
  this.mouseDownCallback = function(a) {
    return b.onButtonChange(a, !0);
  };
  this.mouseUpCallback = function(a) {
    return b.onButtonChange(a, !1);
  };
  this.mouseMoveCallback = function(a) {
    return b.onCursorChange(a);
  };
}
ec.prototype.activate = function() {
  T.log.info('Activating mouse');
  window.addEventListener('mousedown', this.mouseDownCallback);
  window.addEventListener('mouseup', this.mouseUpCallback);
  window.addEventListener('mousemove', this.mouseMoveCallback);
};
ec.prototype.deactivate = function() {
  T.log.info('Deactivating mouse');
  window.removeEventListener('mousedown', this.mouseDownCallback);
  window.removeEventListener('mouseup', this.mouseUpCallback);
  window.removeEventListener('mousemove', this.mouseMoveCallback);
};
ec.prototype.onButtonChange = function(a, b) {
  var d = new Yb.default('mouse', dc[a.button]);
  this.router.routeInput(d, b) && a.preventDefault();
};
ec.prototype.onCursorChange = function(a) {
  a = [a.clientX, a.clientY];
  var b = new Yb.default('mouse', 'cursor');
  this.router.routeInput(b, a);
};
cc.MOUSE = 'mouse';
cc.MOUSE_CURSOR = 'cursor';
cc.default = ec;
// Input 73
var fc = {}, gc = ['left-stick-x', 'left-stick-y', 'right-stick-x', 'right-stick-y'], hc = 'a b x y left-bumper right-bumper left-trigger right-trigger back start left-stick right-stick dpad-up dpad-down dpad-left dpad-right guide'.split(' ');
function ic(a) {
  T.log.info('Initializing gamepads');
  this.router = a;
  this.gamepads = null;
  this.requestId = 0;
}
ic.prototype.activate = function() {
  navigator.getGamepads ? (T.log.info('Activating gamepads'), this.requestUpdate()) : T.log.warn('Cannot activate gamepads (Gamepad API is not available)');
};
ic.prototype.deactivate = function() {
  T.log.info('Deactivating gamepads');
  cancelAnimationFrame(this.requestId);
};
ic.prototype.requestUpdate = function() {
  var a = this;
  this.requestId = requestAnimationFrame(function() {
    return a.updateGamepads();
  });
};
ic.prototype.updateGamepads = function() {
  var a = this.readGamepads();
  this.gamepads && this.detectChanges(this.gamepads, a);
  this.gamepads = a;
  this.requestUpdate();
};
ic.prototype.readGamepads = function() {
  return Array.from(navigator.getGamepads()).map(function(a) {
    return a && {index:a.index, mapping:a.mapping, axes:a.axes.map(Math.round), buttons:a.buttons.map(function(a) {
      return a.pressed;
    })};
  });
};
ic.prototype.detectChanges = function(a, b) {
  for (var d = 0; d < a.length; d++) {
    var f = a[d], k = b[d];
    if (f && k) {
      for (var u = f.axes, B = k.axes, C = 0; C < Math.min(u.length, B.length); C++) {
        if (u[C] !== B[C]) {
          this.onAxisChange(k, C, u[C], B[C]);
        }
      }
      f = f.buttons;
      u = k.buttons;
      for (B = 0; B < Math.min(f.length, u.length); B++) {
        if (f[B] !== u[B]) {
          this.onButtonChange(k, B, u[B]);
        }
      }
    }
  }
};
ic.prototype.onAxisChange = function(a, b, d, f) {
  d && (d = jc(a, b, d), this.routeInput(a, d, !1));
  f && (b = jc(a, b, f), this.routeInput(a, b, !0));
};
ic.prototype.onButtonChange = function(a, b, d) {
  b = 'standard' === a.mapping ? hc[b] : 'button-' + b;
  this.routeInput(a, b, d);
};
ic.prototype.routeInput = function(a, b, d) {
  a = new Yb.default('gamepad' + a.index, b);
  this.router.routeInput(a, d);
};
function jc(a, b, d) {
  d = 0 < d ? '+' : '-';
  return 'standard' === a.mapping ? gc[b] + d : 'axis-' + b + d;
}
fc.GAMEPAD = 'gamepad';
fc.default = ic;
// Input 74
var kc = {}, lc = {}, mc = (lc[$b.KEYBOARD] = {Source:$b.default, indexed:!1}, lc[cc.MOUSE] = {Source:cc.default, indexed:!1}, lc[fc.GAMEPAD] = {Source:fc.default, indexed:!0}, lc);
kc.default = mc;
kc.KEYBOARD = $b.KEYBOARD;
kc.MOUSE = cc.MOUSE;
kc.MOUSE_CURSOR = cc.MOUSE_CURSOR;
kc.GAMEPAD = fc.GAMEPAD;
// Input 75
var nc = {};
function oc(a) {
  T.log.info('Initializing sources');
  this.router = a;
  this.sources = [];
  this.suspended = this.active = !1;
  this.recordCallback = null;
  for (var b in kc.default) {
    this.sources.push(new kc.default[b].Source(this));
  }
}
oc.prototype.setActive = function(a) {
  this.active !== a && (T.log.info('Sources ' + (a ? 'activated' : 'deactivated')), a ? this.sources.forEach(function(a) {
    return a.activate();
  }) : this.sources.forEach(function(a) {
    return a.deactivate();
  }), this.active = a);
};
oc.prototype.isActive = function() {
  return this.active;
};
oc.prototype.recordInput = function(a) {
  if ('function' !== typeof a) {
    throw Error('Invalid record input callback: ' + T.describe(a));
  }
  T.log.info('Recording source input');
  this.recordCallback = a;
  this.suspended = this.active;
  this.setActive(!0);
};
oc.prototype.isRecording = function() {
  return null != this.recordCallback;
};
oc.prototype.routeInput = function(a, b) {
  return this.recordCallback ? (b || (T.log.info('Caught "' + a + '" source input'), this.setActive(this.suspended), this.recordCallback(a.toString()), this.recordCallback = null), !0) : this.router.routeInput(a, b);
};
nc.default = oc;
// Input 76
var pc = {};
function qc(a, b, d) {
  this.port = a;
  this.device = b;
  this.name = d;
}
qc.fromString = function(a) {
  a = a.split('.');
  if (3 !== a.length) {
    return null;
  }
  var b = c.makeIterator(a), d = b.next().value;
  a = b.next().value;
  b = b.next().value;
  var f = parseInt(d, 10);
  d = isNaN(f) ? d : f;
  return new qc(d, a, b);
};
qc.prototype.equals = function(a) {
  return this.port === a.port && this.device === a.device && this.name === a.name;
};
qc.prototype.toString = function() {
  return this.port + '.' + this.device + '.' + this.name;
};
pc.default = qc;
// Input 77
var rc = {}, sc = {a:T.Button.A, b:T.Button.B, select:T.Button.SELECT, start:T.Button.START, up:T.Button.UP, down:T.Button.DOWN, left:T.Button.LEFT, right:T.Button.RIGHT};
function tc(a) {
  this.joypad = a;
}
tc.prototype.getDevice = function() {
  return this.joypad;
};
tc.prototype.setInput = function(a, b) {
  if (a in sc) {
    if ('boolean' !== typeof b) {
      throw Error('Invalid joypad button state: ' + T.describe(b));
    }
    this.joypad.setButtonPressed(sc[a], b);
  } else {
    throw Error('Invalid joypad button: ' + T.describe(a));
  }
};
tc.prototype.getInput = function(a) {
  if (a in sc) {
    return this.joypad.isButtonPressed(sc[a]);
  }
  throw Error('Invalid joypad button: ' + T.describe(a));
};
rc.default = tc;
// Input 78
var uc = {};
function vc(a) {
  this.zapper = a;
}
vc.prototype.getDevice = function() {
  return this.zapper;
};
vc.prototype.setInput = function(a, b) {
  if ('trigger' === a) {
    if ('boolean' !== typeof b) {
      throw Error('Invalid zapper trigger state: ' + T.describe(b));
    }
    this.zapper.setTriggerPressed(b);
  } else {
    if ('beam' === a) {
      if (!Array.isArray(b) || 2 !== b.length) {
        throw Error('Invalid zapper beam position: ' + T.describe(b));
      }
      b = c.makeIterator(b);
      a = b.next().value;
      b = b.next().value;
      if ('number' !== typeof a) {
        throw Error('Invalid zapper beam X position: ' + T.describe(a));
      }
      if ('number' !== typeof b) {
        throw Error('Invalid zapper beam Y position: ' + T.describe(b));
      }
      this.zapper.setBeamPosition(a, b);
    } else {
      throw Error('Invalid zapper input: ' + T.describe(a));
    }
  }
};
vc.prototype.getInput = function(a) {
  if ('trigger' === a) {
    return this.zapper.isTriggerPressed();
  }
  if ('beam' === a) {
    return this.zapper.getBeamPosition();
  }
  throw Error('Invalid zapper input: ' + T.describe(a));
};
uc.ZAPPER_TRIGGER = 'trigger';
uc.ZAPPER_BEAM = 'beam';
uc.default = vc;
// Input 79
var U = {}, wc = {}, xc = (wc.joypad = {Device:T.Joypad, Adapter:rc.default}, wc.zapper = {Device:T.Zapper, Adapter:uc.default}, wc);
U.JOYPAD = 'joypad';
U.ZAPPER = 'zapper';
U.ZAPPER_BEAM = uc.ZAPPER_BEAM;
U.ZAPPER_TRIGGER = uc.ZAPPER_TRIGGER;
U.default = xc;
U.isDevice = function(a) {
  return a in xc;
};
// Input 80
// Input 81
var yc = {};
yc.SourceInput = Yb.default;
yc.DeviceInput = pc.default;
yc.parseInput = function(a, b) {
  if ('string' === typeof a) {
    if (null == b || b === Yb.default) {
      var d = Yb.default.fromString(a);
      if (d) {
        a = d.source;
        b = a.replace(/[0-9]+$/, '');
        var f = kc.default[b];
        if (!f || f.indexed !== (a !== b)) {
          throw Error('Invalid input source: ' + T.describe(a));
        }
        return d;
      }
    }
    if (null == b || b === pc.default) {
      if (d = pc.default.fromString(a)) {
        a = d.port;
        b = d.device;
        if (!Wb.isPort(a)) {
          throw Error('Invalid input port: ' + T.describe(a));
        }
        if (!U.isDevice(b)) {
          throw Error('Invalid input device: ' + T.describe(b));
        }
        return d;
      }
    }
  }
  if (null != b) {
    throw Error('Invalid ' + (b === Yb.default ? 'source' : 'device') + ' input: ' + T.describe(a));
  }
  throw Error('Invalid input: ' + T.describe(a));
};
// Input 82
var zc = {};
function Ac(a) {
  T.log.info('Initializing devices');
  this.nes = a;
  a = {};
  for (var b = c.makeIterator(Wb.default), d = b.next(); !d.done; d = b.next()) {
    d = d.value;
    a[d] = {};
    for (var f in U.default) {
      var k = U.default[f];
      a[d][f] = new k.Adapter(new k.Device);
    }
  }
  this.adapters = a;
  this.set(1, U.JOYPAD);
  this.set(2, U.ZAPPER);
}
Ac.prototype.set = function(a, b) {
  if (!Wb.isPort(a)) {
    throw Error('Invalid port: ' + T.describe(a));
  }
  if (null !== b && !U.isDevice(b)) {
    throw Error('Invalid device: ' + T.describe(b));
  }
  this.get(a) !== b && (T.log.info('Setting device on port ' + a + ' to "' + (b || 'none') + '"'), b = null !== b ? this.adapters[a][b].getDevice() : null, this.nes.setInputDevice(a, b));
};
Ac.prototype.get = function(a) {
  if (!Wb.isPort(a)) {
    throw Error('Invalid port: ' + T.describe(a));
  }
  a = this.nes.getInputDevice(a);
  for (var b in U.default) {
    if (a instanceof U.default[b].Device) {
      return b;
    }
  }
  return null;
};
Ac.prototype.setInput = function(a, b) {
  a = yc.parseInput(a, yc.DeviceInput);
  this.setRawInput(a.port, a.device, a.name, b);
};
Ac.prototype.setRawInput = function(a, b, d, f) {
  this.adapters[a][b].setInput(d, f);
};
Ac.prototype.getInput = function(a) {
  a = yc.parseInput(a, yc.DeviceInput);
  return this.adapters[a.port][a.device].getInput(a.name);
};
zc.default = Ac;
// Input 83
var Bc = {};
function Cc() {
  T.log.info('Initializing input map');
  this.items = [];
}
Cc.prototype.setAll = function(a) {
  if (!a || 'object' !== typeof a) {
    throw Error('Invalid mapping: ' + T.describe(a));
  }
  this.deleteAll();
  for (var b in a) {
    var d = a[b];
    if ('string' === typeof d) {
      this.set(b, d);
    } else {
      if (Array.isArray(d)) {
        d = c.makeIterator(d);
        for (var f = d.next(); !f.done; f = d.next()) {
          this.set(b, f.value);
        }
      } else {
        throw Error('Invalid source input(s): ' + T.describe(d));
      }
    }
  }
};
Cc.prototype.set = function(a, b) {
  a = yc.parseInput(a, yc.DeviceInput);
  b = yc.parseInput(b, yc.SourceInput);
  this.has(a, b) || (T.log.info('Mapping "' + a + '" input to "' + b + '"'), this.items.push({devInput:a, srcInput:b}));
};
Cc.prototype.getAll = function() {
  for (var a = {}, b = c.makeIterator(this.items), d = b.next(); !d.done; d = b.next()) {
    var f = d.value;
    d = f.devInput.toString();
    f = f.srcInput.toString();
    a[d] = a[d] || [];
    a[d].push(f);
  }
  return a;
};
Cc.prototype.get = function(a) {
  var b = [];
  a = yc.parseInput(a);
  this.forEach(a, function(a) {
    b.push(a.toString());
  });
  return b;
};
Cc.prototype.deleteAll = function() {
  T.log.info('Unmapping all inputs');
  this.items.length = 0;
};
Cc.prototype.delete = function(a) {
  var b = yc.parseInput(a);
  T.log.info('Unmapping "' + b + '" input');
  this.items = this.items.filter(function(a) {
    var d = a.srcInput;
    return !a.devInput.equals(b) && !d.equals(b);
  });
};
Cc.prototype.has = function(a, b) {
  for (var d = c.makeIterator(this.items), f = d.next(); !f.done; f = d.next()) {
    if (f = f.value, f.devInput.equals(a) && f.srcInput.equals(b)) {
      return !0;
    }
  }
  return !1;
};
Cc.prototype.forEach = function(a, b) {
  if (a instanceof yc.DeviceInput) {
    for (var d = c.makeIterator(this.items), f = d.next(); !f.done; f = d.next()) {
      f = f.value, f.devInput.equals(a) && b(f.srcInput);
    }
  } else {
    if (a instanceof yc.SourceInput) {
      for (d = c.makeIterator(this.items), f = d.next(); !f.done; f = d.next()) {
        f = f.value, f.srcInput.equals(a) && b(f.devInput);
      }
    }
  }
};
Bc.default = Cc;
// Input 84
var Dc = {};
function Ec(a, b, d) {
  T.log.info('Initializing input router');
  this.map = a;
  this.devices = b;
  this.video = d;
  this.mouseCursor = null;
}
Ec.prototype.routeInput = function(a, b) {
  var d = this;
  if (a.source === kc.MOUSE) {
    if (null == this.video.getOutput()) {
      return !1;
    }
    if (a.name === kc.MOUSE_CURSOR) {
      this.mouseCursor = b;
      b = this.video.getOutputCoordinates(b[0], b[1]);
      a = c.makeIterator(Wb.default);
      for (var f = a.next(); !f.done; f = a.next()) {
        this.devices.setRawInput(f.value, U.ZAPPER, U.ZAPPER_BEAM, b);
      }
      return !0;
    }
    if (this.mouseCursor) {
      var k = c.makeIterator(this.mouseCursor);
      f = k.next().value;
      k = k.next().value;
      var u = this.video.getOutputRect(), B = u.top, C = u.bottom, n = u.right;
      if (f < u.left || f > n || k < B || k > C) {
        return !1;
      }
    }
  }
  var q = !1;
  this.map.forEach(a, function(a) {
    d.devices.setRawInput(a.port, a.device, a.name, b);
    q = !0;
  });
  return q;
};
Dc.default = Ec;
// Input 85
var Fc = {};
Fc.ports = Wb.default;
Fc.Sources = nc.default;
Fc.Devices = zc.default;
Fc.InputMap = Bc.default;
Fc.InputRouter = Dc.default;
// Input 86
var Gc = {};
function Hc(a) {
  this.index = this.time = 0;
  this.diffs = Array(void 0 === a ? 50 : a).fill(0);
}
Hc.prototype.update = function(a) {
  a = void 0 === a ? window.performance.now() : a;
  this.diffs[this.index] = a - this.time;
  this.index = (this.index + 1) % this.diffs.length;
  this.time = a;
};
Hc.prototype.get = function() {
  return 1000 / (this.diffs.reduce(function(a, b) {
    return a + b;
  }) / this.diffs.length);
};
Gc.default = Hc;
// Input 87
var Ic = {}, Jc = {}, Kc = (Jc.auto = null, Jc.ntsc = T.Region.NTSC, Jc.pal = T.Region.PAL, Jc), Lc = {setActive:function() {
}, setSpeed:function() {
}};
function V(a, b, d, f) {
  var k = this;
  T.log.info('Initializing system');
  this.nes = a;
  this.video = b;
  this.audio = d || Lc;
  this.autoPaused = !1;
  this.regionName = 'auto';
  this.speed = 1;
  this.drawId = this.execId = 0;
  this.sources = f;
  this.fps = new Gc.default;
  this.applyRegion();
  this.applySpeed();
  'https:' === location.protocol && document.addEventListener('visibilitychange', function() {
    return k.onVisibilityChange();
  });
}
V.prototype.onVisibilityChange = function() {
  document.hidden ? (T.log.info('Lost visibility'), this.autoPaused = this.isRunning(), this.stop()) : (T.log.info('Gained visibility'), this.autoPaused && this.start());
};
V.prototype.start = function() {
  var a = this;
  if (!this.isRunning()) {
    T.log.info('Starting execution');
    var b = 1000 / (this.speed * this.getTargetFPS());
    this.execId = setInterval(function() {
      return a.step();
    }, b);
    this.audio.setActive(!0);
    this.sources.setActive(!0);
  }
};
V.prototype.stop = function() {
  this.isRunning() && (T.log.info('Stopping execution'), clearInterval(this.execId), cancelAnimationFrame(this.drawId), this.execId = 0, this.audio.setActive(!1), this.sources.setActive(!1));
};
V.prototype.restart = function() {
  this.stop();
  this.start();
};
V.prototype.isRunning = function() {
  return !!this.execId;
};
V.prototype.step = function() {
  var a = this;
  this.video.getOutput() && (this.video.renderFrame(), cancelAnimationFrame(this.drawId), this.drawId = requestAnimationFrame(function() {
    return a.video.drawFrame();
  }));
  this.fps.update();
};
V.prototype.power = function() {
  T.log.info('HW reset');
  this.nes.power();
};
V.prototype.reset = function() {
  T.log.info('SW reset');
  this.nes.reset();
};
V.prototype.setRegion = function(a) {
  if (!(a in Kc)) {
    throw Error('Invalid region: ' + T.describe(a));
  }
  this.regionName !== a && (T.log.info('Setting region to "' + a + '"'), this.regionName = a, this.applyRegion(), this.isRunning() && this.restart());
};
V.prototype.applyRegion = function() {
  this.nes.setRegion(Kc[this.regionName]);
};
V.prototype.getRegion = function() {
  return this.regionName;
};
V.prototype.setSpeed = function(a) {
  if ('number' !== typeof a || 0 >= a) {
    throw Error('Invalid speed: ' + T.describe(a));
  }
  this.speed !== a && (T.log.info('Setting emulation speed to ' + a + 'x'), this.speed = a, this.applySpeed(), this.isRunning() && this.restart());
};
V.prototype.applySpeed = function() {
  this.audio.setSpeed(this.speed);
};
V.prototype.getSpeed = function() {
  return this.speed;
};
V.prototype.getFPS = function() {
  return this.fps.get();
};
V.prototype.getTargetFPS = function() {
  var a = this.nes.getUsedRegion();
  return T.Region.getParams(a).framesPerSecond;
};
Ic.default = V;
// Input 88
var Mc = {};
Mc.System = Ic.default;
// Input 89
var Nc = {}, Oc = ['maximized', 'normalized', 'stretched'], Pc = {position:'fixed', top:'0', right:'0', bottom:'0', left:'0', margin:'auto', width:'auto', height:'auto'};
Nc.MAXIMIZED = 'maximized';
Nc.NORMALIZED = 'normalized';
Nc.STRETCHED = 'stretched';
Nc.isStyleName = function(a) {
  return 0 <= Oc.indexOf(a);
};
Nc.applyStyle = function(a, b) {
  T.log.info('Applying "' + b + '" style to canvas');
  var d = Object.assign(a.style, Pc);
  'maximized' === b ? a.width / a.height > window.innerWidth / window.innerHeight ? d.width = '100%' : d.height = '100%' : 'stretched' === b && (d.width = '100%', d.height = '100%');
};
Nc.removeStyle = function(a) {
  T.log.info('Removing style from canvas');
  a = a.style;
  for (var b in Pc) {
    a.removeProperty(b);
  }
};
// Input 90
var Qc = {NEAREST:'nearest', LINEAR:'linear', isFilter:function(a) {
  return 0 <= ['nearest', 'linear'].indexOf(a);
}};
// Input 91
var Rc = {}, Sc;
function Tc() {
  if (null == Sc) {
    T.log.info('Creating auxiliary canvas');
    var a = document.createElement('canvas');
    a.width = T.VIDEO_WIDTH;
    a.height = T.VIDEO_HEIGHT;
    Sc = Uc(a);
  }
  return Sc;
}
function Uc(a) {
  T.log.info('Getting 2d canvas context');
  a = a.getContext('2d', {alpha:!1});
  if (null == a) {
    throw Error('Unable to get 2d canvas context');
  }
  return a;
}
function Vc(a) {
  this.context = Uc(a);
  this.filter = Qc.NEAREST;
  this.scale = 1;
}
Vc.prototype.createFrame = function(a, b, d, f) {
  d = this.context.createImageData(d, f);
  f = (new Uint32Array(d.data.buffer)).fill(T.BLACK_COLOR);
  return {x:a, y:b, data:f, image:d};
};
Vc.prototype.drawFrame = function(a) {
  (1 !== this.scale ? Tc() : this.context).putImageData(a.image, a.x, a.y);
};
Vc.prototype.begin = function() {
};
Vc.prototype.end = function() {
  1 !== this.scale && (this.applyFilter(), this.applyScaling());
};
Vc.prototype.setFilter = function(a) {
  this.filter = a;
};
Vc.prototype.applyFilter = function() {
  var a = this.filter === Qc.LINEAR;
  this.context.imageSmoothingEnabled = a;
  this.context.mozImageSmoothingEnabled = a;
  this.context.oImageSmoothingEnabled = a;
  this.context.msImageSmoothingEnabled = a;
};
Vc.prototype.setScale = function(a) {
  this.scale = a;
};
Vc.prototype.applyScaling = function() {
  var a = Tc().canvas, b = this.context.canvas;
  this.context.drawImage(a, 0, 0, a.width, a.height, 0, 0, b.width, b.height);
};
Rc.default = Vc;
// Input 92
var Wc = {};
function Xc(a, b, d) {
  b = a.createShader(b);
  a.shaderSource(b, d);
  a.compileShader(b);
  if (!a.getShaderParameter(b, a.COMPILE_STATUS)) {
    throw Error('Shader compilation error: ' + a.getShaderInfoLog(b));
  }
  return b;
}
function Yc(a) {
  a: {
    for (var b = {alpha:!1, depth:!1, antialias:!1}, d = c.makeIterator(['webgl', 'experimental-webgl']), f = d.next(); !f.done; f = d.next()) {
      if (f = f.value, T.log.info('Getting ' + f + ' canvas context'), f = a.getContext(f, b)) {
        break a;
      }
    }
    throw Error('Unable to get webgl or experimental-webgl canvas context');
  }
  a = f;
  b = a.createProgram();
  a.attachShader(b, Xc(a, a.VERTEX_SHADER, '\n  uniform vec2 uScreenSize;\n  attribute vec2 aVertexPosition;\n  attribute vec2 aTextureCoord;\n  varying vec2 vTextureCoord;\n\n  void main(void) {\n    float x = aVertexPosition.x / (0.5 * uScreenSize.x) - 1.0; // [0, width] -> [-1, 1]\n    float y = 1.0 - aVertexPosition.y / (0.5 * uScreenSize.y); // [height, 0] -> [-1, 1]\n    gl_Position = vec4(x, y, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n  }\n'));
  a.attachShader(b, Xc(a, a.FRAGMENT_SHADER, '\n  precision mediump float;\n\n  uniform sampler2D uSampler;\n  varying vec2 vTextureCoord;\n\n  void main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n  }\n'));
  a.linkProgram(b);
  if (!a.getProgramParameter(b, a.LINK_STATUS)) {
    throw Error('Shader linking error');
  }
  d = a.getUniformLocation(b, 'uScreenSize');
  f = a.getUniformLocation(b, 'uSampler');
  var k = a.getAttribLocation(b, 'aVertexPosition'), u = a.getAttribLocation(b, 'aTextureCoord');
  a.enableVertexAttribArray(k);
  a.enableVertexAttribArray(u);
  a.useProgram(b);
  this.gl = a;
  this.scale = 1;
  this.filter = Qc.NEAREST;
  this.screenSizeUniform = d;
  this.samplerUniform = f;
  this.vertexPositionAttribute = k;
  this.textureCoordAttribute = u;
}
Yc.prototype.createFrame = function(a, b, d, f) {
  d = Zc(d);
  f = Zc(f);
  var k = this.gl, u = this.createFrameData(d, f);
  a = this.createFrameVertices(a, b, d, f);
  b = this.createFrameCoords();
  k = k.createTexture();
  return {width:d, height:f, data:u, vertices:a, coords:b, texture:k};
};
Yc.prototype.createFrameData = function(a, b) {
  return (new Uint32Array(a * b)).fill(T.BLACK_COLOR);
};
Yc.prototype.createFrameVertices = function(a, b, d, f) {
  var k = this.gl;
  a = new Float32Array([a, b, a + d, b, a + d, b + f, a, b + f]);
  b = k.createBuffer();
  k.bindBuffer(k.ARRAY_BUFFER, b);
  k.bufferData(k.ARRAY_BUFFER, a, k.STATIC_DRAW);
  return b;
};
Yc.prototype.createFrameCoords = function() {
  var a = this.gl, b = new Float32Array([0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]), d = a.createBuffer();
  a.bindBuffer(a.ARRAY_BUFFER, d);
  a.bufferData(a.ARRAY_BUFFER, b, a.STATIC_DRAW);
  return d;
};
Yc.prototype.drawFrame = function(a) {
  this.updateFrameTexture(a);
  this.updateShaderParams(a);
  this.drawFrameVertices(a);
};
Yc.prototype.updateFrameTexture = function(a) {
  var b = this.gl, d = this.filter === Qc.LINEAR ? b.LINEAR : b.NEAREST, f = new Uint8Array(a.data.buffer);
  b.activeTexture(b.TEXTURE0);
  b.bindTexture(b.TEXTURE_2D, a.texture);
  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, d);
  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, d);
  b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, a.width, a.height, 0, b.RGBA, b.UNSIGNED_BYTE, f);
};
Yc.prototype.updateShaderParams = function(a) {
  var b = this.gl;
  b.uniform1i(this.samplerUniform, 0);
  b.bindBuffer(b.ARRAY_BUFFER, a.vertices);
  b.vertexAttribPointer(this.vertexPositionAttribute, 2, b.FLOAT, !1, 0, 0);
  b.bindBuffer(b.ARRAY_BUFFER, a.coords);
  b.vertexAttribPointer(this.textureCoordAttribute, 2, b.FLOAT, !1, 0, 0);
};
Yc.prototype.drawFrameVertices = function(a) {
  var b = this.gl;
  b.bindBuffer(b.ARRAY_BUFFER, a.vertices);
  b.drawArrays(b.TRIANGLE_FAN, 0, 4);
};
Yc.prototype.begin = function() {
  var a = this.gl, b = a.canvas, d = b.width;
  b = b.height;
  var f = d / this.scale, k = b / this.scale;
  a.viewport(0, 0, d, b);
  a.clearColor(0.0, 0.0, 0.0, 1.0);
  a.clear(a.COLOR_BUFFER_BIT);
  a.uniform2f(this.screenSizeUniform, f, k);
};
Yc.prototype.end = function() {
  this.gl.flush();
};
Yc.prototype.setScale = function(a) {
  this.scale = a;
};
Yc.prototype.setFilter = function(a) {
  this.filter = a;
};
function Zc(a) {
  for (var b = 1; b < a;) {
    b *= 2;
  }
  return b;
}
Wc.default = Yc;
// Input 93
var $c = {}, ad = {}, bd = (ad.canvas = Rc.default, ad.webgl = Wc.default, ad), cd = {}, dd = (cd.webgl = 'canvas', cd);
$c.CANVAS = 'canvas';
$c.WEBGL = 'webgl';
$c.renderers = bd;
$c.isRendererName = function(a) {
  return a in bd;
};
$c.createRenderer = function(a, b) {
  do {
    var d = bd[a];
    if (null == d) {
      throw Error('Invalid renderer: ' + T.describe(a));
    }
    try {
      return T.log.info('Creating "' + a + '" renderer'), new d(b);
    } catch (f) {
      T.log.error('Failed to create "' + a + '" renderer', f);
    }
    a = dd[a];
  } while (a);
  throw Error('Unable to create renderer');
};
// Input 94
for (var ed = {}, fd = null, gd = c.makeIterator(['', 'webkit', 'moz', 'ms']), hd = gd.next(); !hd.done; hd = gd.next()) {
  var id = hd.value;
  if (jd('fullscreenElement', id) in document) {
    fd = id;
    break;
  }
}
function jd(a, b) {
  b = void 0 === b ? fd : b;
  'moz' === b && (a = a.replace('exit', 'cancel').replace('screen', 'Screen'));
  return b + kd(a);
}
function kd(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}
function ld() {
  var a = this;
  this.request = null;
  this.on('change', function() {
    return a.onChange();
  });
  this.on('error', function() {
    return a.onError();
  });
}
ld.prototype.supported = function() {
  return null != fd;
};
ld.prototype.enabled = function() {
  return this.supported() ? document[jd('fullscreenEnabled')] : !1;
};
ld.prototype.is = function() {
  return this.supported() ? null != document[jd('fullscreenElement')] : !1;
};
ld.prototype.on = function(a, b) {
  this.supported() && (a = 'ms' === fd ? 'MSFullscreen' + kd(a) : fd + 'fullscreen' + a, document.addEventListener(a, b));
};
ld.prototype.enter = function(a) {
  var b = this;
  T.log.info('Fullscreen enter requested');
  if (!this.supported()) {
    return Promise.reject(Error('Browser does not support fullscreen API'));
  }
  if (!this.enabled()) {
    return Promise.reject(Error('Browser is blocking fullscreen request'));
  }
  if (this.is()) {
    return Promise.resolve();
  }
  if (this.request && 'exit' === this.request.type) {
    return Promise.reject(Error('Fullscreen exit in progress'));
  }
  null == this.request && (this.request = {type:'enter'}, this.request.promise = new Promise(function(d, f) {
    T.log.info('Entering fullscreen');
    b.request.resolve = d;
    b.request.reject = f;
    a[jd('requestFullscreen')]();
  }));
  return this.request.promise;
};
ld.prototype.exit = function() {
  var a = this;
  T.log.info('Fullscreen exit requested');
  if (!this.is()) {
    return Promise.resolve();
  }
  if (this.request && 'enter' === this.request.type) {
    return Promise.reject(Error('Fullscreen enter in progress'));
  }
  null == this.request && (this.request = {type:'exit'}, this.request.promise = new Promise(function(b, d) {
    T.log.info('Exiting fullscreen');
    a.request.resolve = b;
    a.request.reject = d;
    document[jd('exitFullscreen')]();
  }));
  return this.request.promise;
};
ld.prototype.onChange = function() {
  var a = this.is() ? 'enter' : 'exit';
  T.log.info('Fullscreen ' + a + 'ed');
  this.request && this.request.type === a && (this.request.resolve(), this.request = null);
};
ld.prototype.onError = function() {
  T.log.error('Detected fullscreen error');
  this.request && (this.request.reject(Error('Failed to ' + this.request.type + ' fullscreen')), this.request = null);
};
ed.default = ld;
// Input 95
var md = {};
function X(a) {
  var b = this;
  T.log.info('Initializing video');
  this.nes = a;
  this.renderer = this.canvas = null;
  this.rendererName = $c.WEBGL;
  this.paletteName = T.DEFAULT_PALETTE;
  this.debugFrame = this.frame = null;
  this.scale = 1;
  this.filter = Qc.NEAREST;
  this.debug = !1;
  this.fullscreenType = Nc.MAXIMIZED;
  this.fullscreen = new ed.default;
  this.fullscreen.on('change', function() {
    return b.onFullscreenChange();
  });
  this.applyPalette();
  'https:' === location.protocol && window.addEventListener('deviceorientation', function() {
    return b.onResolutionChange();
  });
  window.addEventListener('resize', function() {
    return b.onResolutionChange();
  });
}
X.prototype.onResolutionChange = function() {
  this.isFullscreen() && (T.log.info('Updating fullscreen canvas after resolution change'), this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame());
};
X.prototype.onFullscreenChange = function() {
  this.canvas && (T.log.info('Updating canvas after fullscreen change'), this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame());
};
X.prototype.setOutput = function(a) {
  if (null !== a && !(a instanceof HTMLCanvasElement)) {
    throw Error('Invalid video output: ' + T.describe(a));
  }
  T.log.info('Setting video output to ' + a);
  if (this.canvas = a) {
    this.createRenderer(), this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame();
  }
};
X.prototype.getOutput = function() {
  return this.canvas;
};
X.prototype.getOutputRect = function() {
  return this.canvas ? this.canvas.getBoundingClientRect() : null;
};
X.prototype.getOutputCoordinates = function(a, b) {
  if (this.canvas) {
    var d = this.getOutputRect(), f = d.height, k = d.top, u = d.left;
    d = d.width / this.getBaseWidth();
    f /= this.getBaseHeight();
    return [~~((a - u) / d), ~~((b - k) / f)];
  }
  return null;
};
X.prototype.updateSize = function() {
  this.canvas.width = this.getTargetScale() * this.getBaseWidth();
  this.canvas.height = this.getTargetScale() * this.getBaseHeight();
  T.log.info('Canvas resized to ' + this.canvas.width + 'x' + this.canvas.height + ' px');
};
X.prototype.updateStyle = function() {
  this.isFullscreen() ? Nc.applyStyle(this.canvas, this.fullscreenType) : Nc.removeStyle(this.canvas);
};
X.prototype.getBaseWidth = function() {
  return T.VIDEO_WIDTH * (this.debug ? 2 : 1);
};
X.prototype.getBaseHeight = function() {
  return T.VIDEO_HEIGHT;
};
X.prototype.setRenderer = function(a) {
  if (!$c.isRendererName(a)) {
    throw Error('Invalid video renderer: ' + T.describe(a));
  }
  if (this.rendererName !== a) {
    if (this.canvas) {
      throw Error('Cannot change video renderer once output is set');
    }
    T.log.info('Using "' + a + '" video renderer');
    this.rendererName = a;
  }
};
X.prototype.getRenderer = function() {
  return this.rendererName;
};
X.prototype.createRenderer = function() {
  this.renderer = $c.createRenderer(this.rendererName, this.canvas);
  this.frame = this.renderer.createFrame(0, 0, T.VIDEO_WIDTH, T.VIDEO_HEIGHT);
  this.debugFrame = this.renderer.createFrame(T.VIDEO_WIDTH, 0, T.VIDEO_WIDTH, T.VIDEO_HEIGHT);
};
X.prototype.updateRenderer = function() {
  this.renderer.setFilter(this.filter);
  this.renderer.setScale(this.getTargetScale());
};
X.prototype.renderFrame = function() {
  this.nes.renderFrame(this.frame.data);
  this.debug && this.nes.renderDebugFrame(this.debugFrame.data);
};
X.prototype.drawFrame = function() {
  this.renderer.begin();
  this.renderer.drawFrame(this.frame);
  this.debug && this.renderer.drawFrame(this.debugFrame);
  this.renderer.end();
};
X.prototype.clearFrame = function() {
  if (null == this.canvas) {
    throw Error('No video output');
  }
  this.nes.renderEmptyFrame(this.frame.data);
  this.debug && this.nes.renderEmptyFrame(this.debugFrame.data);
  this.drawFrame();
};
X.prototype.setPalette = function(a) {
  if (!T.isPaletteName(a)) {
    throw Error('Invalid video palette: ' + T.describe(a));
  }
  this.paletteName !== a && (T.log.info('Setting video palette to "' + a + '"'), this.paletteName = a, this.applyPalette(), this.canvas && (this.renderFrame(), this.drawFrame()));
};
X.prototype.applyPalette = function() {
  this.nes.setPalette(T.createPalette(this.paletteName));
};
X.prototype.getPalette = function() {
  return this.paletteName;
};
X.prototype.setScale = function(a) {
  if ('number' !== typeof a || 0 >= a) {
    throw Error('Invalid video scale: ' + T.describe(a));
  }
  this.scale !== a && (T.log.info('Setting video scale to ' + a), this.scale = a, this.canvas && (this.updateRenderer(), this.updateSize(), this.updateStyle(), this.drawFrame()));
};
X.prototype.getScale = function() {
  return this.scale;
};
X.prototype.getTargetScale = function() {
  return this.isFullscreen() ? this.getFullscreenScale() : this.scale;
};
X.prototype.getFullscreenScale = function() {
  var a = window.innerWidth / this.getBaseWidth(), b = window.innerHeight / this.getBaseHeight();
  a = Math.min(a, b);
  return 1 < a ? ~~a : a;
};
X.prototype.setFilter = function(a) {
  if (!Qc.isFilter(a)) {
    throw Error('Invalid video filter: ' + T.describe(a));
  }
  this.filter !== a && (T.log.info('Setting video filter to "' + a + '"'), this.filter = a, this.canvas && (this.updateRenderer(), this.drawFrame()));
};
X.prototype.getFilter = function() {
  return this.filter;
};
X.prototype.setDebug = function(a) {
  if ('boolean' !== typeof a) {
    throw Error('Invalid video debug: ' + T.describe(a));
  }
  this.debug !== a && (T.log.info('Setting video debug to ' + (a ? 'on' : 'off')), this.debug = a, this.canvas && (this.updateRenderer(), this.updateSize(), this.updateStyle(), this.renderFrame(), this.drawFrame()));
};
X.prototype.isDebug = function() {
  return this.debug;
};
X.prototype.enterFullscreen = function() {
  if (null == this.canvas) {
    throw Error('No video output');
  }
  return this.fullscreen.enter(this.canvas.parentElement);
};
X.prototype.exitFullscreen = function() {
  return this.fullscreen.exit();
};
X.prototype.isFullscreen = function() {
  return this.fullscreen.is();
};
X.prototype.setFullscreenType = function(a) {
  if (!Nc.isStyleName(a)) {
    throw Error('Invalid fullscreen type: ' + T.describe(a));
  }
  this.fullscreenType !== a && (T.log.info('Setting fullscreen type to "' + a + '"'), this.fullscreenType = a, this.isFullscreen() && this.updateStyle());
};
X.prototype.getFullscreenType = function() {
  return this.fullscreenType;
};
md.default = X;
// Input 96
var nd = {};
nd.Video = md.default;
// Input 97
var od = {fetchURL:function(a) {
  T.log.info('Downloading data from "' + a + '"');
  return new Promise(function(b, d) {
    var f = new XMLHttpRequest;
    f.open('GET', a, !0);
    f.responseType = 'arraybuffer';
    f.onload = function() {
      200 === f.status ? b(f.response) : 0 === f.status ? d(Error('Failed to connect to the server')) : d(Error('Failed to download data (' + f.status + ' ' + f.statusText + ')'));
    };
    f.onerror = function() {
      d(Error('Failed to connect to the server'));
    };
    f.send();
  });
}, readBlob:function(a) {
  T.log.info('Reading contents of ' + T.formatSize(a.size) + ' blob');
  return new Promise(function(b, d) {
    if (10485760 < a.size) {
      d(Error('Input is too large (' + T.formatSize(a.size) + ')'));
    } else {
      var f = new FileReader;
      f.onload = function(a) {
        b(a.target.result);
      };
      f.onerror = function(a) {
        d(Error(a.target.error || 'Unknown error'));
      };
      f.readAsArrayBuffer(a);
    }
  });
}};
// Input 98
var pd = {};
function qd(a, b, d) {
  T.log.info('Initializing ROM loader');
  this.nes = a;
  this.system = b;
  this.JSZip = d;
}
qd.prototype.load = function(a) {
  var b = this;
  if ('string' === typeof a) {
    return od.fetchURL(a).then(function(a) {
      return b.loadData(a);
    });
  }
  if (a instanceof Blob) {
    return od.readBlob(a).then(function(a) {
      return b.loadData(a);
    });
  }
  if (a instanceof Array || a instanceof ArrayBuffer || a instanceof Uint8Array) {
    return this.loadData(a);
  }
  throw Error('Invalid source: ' + T.describe(a));
};
qd.prototype.loadData = function(a) {
  var b = this;
  a instanceof Uint8Array || (a = new Uint8Array(a));
  return this.unzipData(a).then(function(a) {
    a = T.createCartridge(a);
    b.nes.setCartridge(a);
    b.system.isRunning() && b.system.restart();
  });
};
qd.prototype.unzipData = function(a) {
  if (80 === a[0] && 75 === a[1] && 3 === a[2] && 4 === a[3]) {
    T.log.info('Extracting ROM image from ' + T.formatSize(a.length) + ' ZIP archive');
    var b = this.JSZip;
    if (null == b || null == b.loadAsync) {
      throw Error('Unable to extract ROM image: JSZip 3 is not available');
    }
    return b.loadAsync(a).then(function(a) {
      a = a.file(/^.*\.nes$/i);
      if (0 === a.length) {
        throw Error('ZIP archive does not contain ".nes" ROM image');
      }
      return a[0].async('uint8array');
    });
  }
  return Promise.resolve(a);
};
qd.prototype.unload = function() {
  this.isLoaded() && (T.log.info('Unloading ROM image'), this.nes.setCartridge(null));
};
qd.prototype.isLoaded = function() {
  return null != this.nes.getCartridge();
};
qd.prototype.getSHA1 = function() {
  var a = this.nes.getCartridge();
  return a ? a.sha1 : null;
};
pd.default = qd;
// Input 99
var rd = {};
rd.ROM = pd.default;
// Input 100
var sd = {};
function td(a) {
  var b = {}, d;
  for (d in a) {
    var f = Object.getOwnPropertyDescriptor(a, d);
    if (f.enumerable) {
      var k = a[d];
      f.writable || f.set ? b[d] = k : 'object' === typeof k && (b[d] = td(k));
    }
  }
  return b;
}
sd.default = td;
// Input 101
var ud = {};
function vd(a, b) {
  for (var d in b) {
    if (d in a) {
      var f = b[d];
      if (void 0 !== f) {
        var k = Object.getOwnPropertyDescriptor(a, d);
        k.enumerable && (k.writable || k.set ? a[d] = f : 'object' === typeof f && vd(a[d], f));
      }
    }
  }
}
ud.default = vd;
// Input 102
var wd = {};
function xd(a) {
  return {value:a};
}
function yd(a, b, d) {
  for (var f = [], k = 2; k < arguments.length; ++k) {
    f[k - 2] = arguments[k];
  }
  return {get:zd.apply(null, [].concat([a], c.arrayFromIterable(f))), set:zd.apply(null, [].concat([b], c.arrayFromIterable(f))), enumerable:!0};
}
function Ad(a) {
  return {value:Object.defineProperties({}, a), enumerable:!0};
}
function zd(a, b) {
  for (var d = [], f = 1; f < arguments.length; ++f) {
    d[f - 1] = arguments[f];
  }
  return d.length ? a.bind.apply(a, [].concat(c.arrayFromIterable(d))) : a;
}
wd.constantProperty = xd;
wd.computedProperty = function(a, b) {
  for (var d = [], f = 1; f < arguments.length; ++f) {
    d[f - 1] = arguments[f];
  }
  return {get:zd.apply(null, [].concat([a], c.arrayFromIterable(d)))};
};
wd.writableProperty = yd;
wd.hiddenWritableProperty = function(a, b, d) {
  for (var f = [], k = 2; k < arguments.length; ++k) {
    f[k - 2] = arguments[k];
  }
  return {get:zd.apply(null, [].concat([a], c.arrayFromIterable(f))), set:zd.apply(null, [].concat([b], c.arrayFromIterable(f)))};
};
wd.methodProperty = function(a, b) {
  for (var d = [], f = 1; f < arguments.length; ++f) {
    d[f - 1] = arguments[f];
  }
  return xd(zd.apply(null, [].concat([a], c.arrayFromIterable(d))));
};
wd.nestedProperty = Ad;
wd.nestedWritableProperty = function(a, b, d, f) {
  for (var k = [], u = 3; u < arguments.length; ++u) {
    k[u - 3] = arguments[u];
  }
  u = c.makeIterator(k);
  k = u.next().value;
  u = c.arrayFromIterator(u);
  for (var B = {}, C = c.makeIterator(a), n = C.next(); !n.done; n = C.next()) {
    n = n.value, B[n] = yd.apply(null, [].concat([b, d, k, n], c.arrayFromIterable(u)));
  }
  return Ad(B);
};
// Input 103
var Y = {};
Y.readProperties = sd.default;
Y.writeProperties = ud.default;
Y.constantProperty = wd.constantProperty;
Y.computedProperty = wd.computedProperty;
Y.writableProperty = wd.writableProperty;
Y.hiddenWritableProperty = wd.hiddenWritableProperty;
Y.methodProperty = wd.methodProperty;
Y.nestedProperty = wd.nestedProperty;
Y.nestedWritableProperty = wd.nestedWritableProperty;
// Input 104
var Bd = Object.defineProperties;
function Cd(a) {
  function b(a) {
    Y.writeProperties(S, a);
    'inputs' in a && C.setAll(a.inputs);
  }
  a = void 0 === a ? {} : a;
  if (!a || 'object' !== typeof a) {
    throw Error('Invalid initialization options: ' + T.describe(a));
  }
  var d = a.JSZip || window.JSZip, f = new T.NES, k = new nd.Video(f), u = Vb.hasAudioContext() ? new Vb.Audio(f) : null, B = new Fc.Devices(f), C = new Fc.InputMap, n = new Fc.InputRouter(C, B, k);
  n = new Fc.Sources(n);
  var q = new Mc.System(f, k, u, n);
  d = new rd.ROM(f, q, d);
  var S = Bd({}, {running:Y.computedProperty(q.isRunning, q), fps:Y.computedProperty(q.getFPS, q), region:Y.writableProperty(q.getRegion, q.setRegion, q), speed:Y.writableProperty(q.getSpeed, q.setSpeed, q), start:Y.methodProperty(q.start, q), stop:Y.methodProperty(q.stop, q), step:Y.methodProperty(q.step, q), power:Y.methodProperty(q.power, q), reset:Y.methodProperty(q.reset, q), nvram:Y.computedProperty(f.getNVRAM, f), use:Y.methodProperty(b), rom:Y.nestedProperty({loaded:Y.computedProperty(d.isLoaded, 
  d), sha1:Y.computedProperty(d.getSHA1, d), load:Y.methodProperty(d.load, d), unload:Y.methodProperty(d.unload, d)}), video:Y.nestedProperty({output:Y.hiddenWritableProperty(k.getOutput, k.setOutput, k), renderer:Y.writableProperty(k.getRenderer, k.setRenderer, k), palette:Y.writableProperty(k.getPalette, k.setPalette, k), scale:Y.writableProperty(k.getScale, k.setScale, k), filter:Y.writableProperty(k.getFilter, k.setFilter, k), debug:Y.writableProperty(k.isDebug, k.setDebug, k), clear:Y.methodProperty(k.clearFrame, 
  k)}), fullscreen:Y.nestedProperty({type:Y.writableProperty(k.getFullscreenType, k.setFullscreenType, k), is:Y.computedProperty(k.isFullscreen, k), enter:Y.methodProperty(k.enterFullscreen, k), exit:Y.methodProperty(k.exitFullscreen, k)}), audio:u ? Y.nestedProperty({enabled:Y.writableProperty(u.isEnabled, u.setEnabled, u), volume:Y.nestedWritableProperty(Object.keys(Vb.channels), u.getVolume, u.setVolume, u)}) : Y.constantProperty(null), devices:Y.nestedWritableProperty(Fc.ports, B.get, B.set, 
  B), inputs:Y.nestedProperty({state:Y.nestedProperty({get:Y.methodProperty(B.getInput, B), set:Y.methodProperty(B.setInput, B)}), map:Y.nestedProperty({get:Y.methodProperty(C.get, C), set:Y.methodProperty(C.set, C), 'delete':Y.methodProperty(C.delete, C)}), record:Y.methodProperty(n.recordInput, n)}), config:Y.nestedProperty({get:Y.methodProperty(function() {
    var a = Y.readProperties(S);
    a.inputs = C.getAll();
    return a;
  }), use:Y.methodProperty(b)}), toString:Y.methodProperty(function() {
    return 'cfxnes 0.7.0';
  })});
  b(a);
  (f = a.video) && 'output' in f ? k.setOutput(f.output) : (f = document.getElementById('cfxnes'), f instanceof HTMLCanvasElement && k.setOutput(f));
  'inputs' in a || C.setAll({'1.joypad.a':'keyboard.x', '1.joypad.b':['keyboard.y', 'keyboard.z'], '1.joypad.start':'keyboard.enter', '1.joypad.select':'keyboard.shift', '1.joypad.up':'keyboard.up', '1.joypad.down':'keyboard.down', '1.joypad.left':'keyboard.left', '1.joypad.right':'keyboard.right', '2.zapper.trigger':'mouse.left'});
  'rom' in a && d.load(a.rom).then(function() {
    return q.start();
  }).catch(function(a) {
    T.log.error('Failed to load ROM', a);
  });
  return S;
}
T.log.setLevel(T.LogLevel.WARN);
try {
  Bd(Cd, {name:Y.constantProperty('cfxnes')});
} catch (a) {
  T.log.warn('Unable to redefine cfxnes.name property: running in pre-ES2015 environment');
}
Bd(Cd, {version:Y.constantProperty('0.7.0'), logLevel:Y.writableProperty(T.log.getLevel, T.log.setLevel, T.log), close:Y.constantProperty(Vb.closeAudioContext)});
'undefined' !== typeof root && (root.cfxnes = Cd);

  // Compiler output [end]
  return root;
}.bind(this)));

//# sourceMappingURL=cfxnes.debug.js.map
