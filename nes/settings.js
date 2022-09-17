const nes = cfxnes();
const {fullscreen} = nes;

fullscreen.is; // false
fullscreen.type = 'stretched'; // Make fullscreen 'stretched'

// Note: Due to security reasons, browsers typically block fullscreen
//       requests that are not tied to user input (e.g., button click).
fullscreen.enter().then(() => {
  fullscreen.is; // true
}).catch(error => {
  console.error('Oops!', error); // Browser refused fullscreen request
});

let nes;

// No options specified
nes = cfxnes();

// All options and their default values
nes = cfxnes({
  region: 'auto',
  speed: 1,
  rom: undefined,
  JSZip: undefined,
  video: {
    output: null,
    renderer: 'webgl',
    scale: 1,
    palette: 'fceux',
    filter: 'nearest',
    debug: false,
  },
  fullscreen: {
    type: 'maximized',
  }
  audio: {
    enabled: true,
    volume: {
      master: 0.5,
      pulse1: 1,
      pulse2: 1,
      triangle: 1,
      noise: 1,
      dmc: 1,
    },
  },
  devices: {
    1: 'joypad',
    2: 'zapper',
  },
  inputs: {
    '1.joypad.a': 'keyboard.x',
    '1.joypad.b': ['keyboard.y', 'keyboard.z'],
    '1.joypad.start': 'keyboard.enter',
    '1.joypad.select': 'keyboard.shift',
    '1.joypad.up': 'keyboard.up',
    '1.joypad.down': 'keyboard.down',
    '1.joypad.left': 'keyboard.left',
    '1.joypad.right': 'keyboard.right',
    '2.zapper.trigger': 'mouse.left',
  },
});
