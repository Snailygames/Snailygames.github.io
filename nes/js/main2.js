// create a nes object
let nes = new Nes();

// load a rom (rom as an Uint8Array)
if(nes.loadRom(rom)) {
  // after loading, do a hard reset
  nes.reset(true);
  // rom is now loaded
} else {
  // rom load failed
}

// run a frame (should be called 60 times per second)
nes.runFrame();

// get the image output
// data should be an Uint8Array with 256*240*4 values, 4 for each pixel (r, g, b, a),
// as in the data for a canvas-2d-context imageData object
nes.getPixels(data);
// for example:
// once
let ctx = canvas.getContext("2d");
let imgData = ctx.createImageData(256, 240);
// every frame
nes.getPixels(imgData.data);
ctx.putImageData(imgData, 0, 0);

// get the sound output
// audioData should be an Float64Array, and will be filled with the amount of samples specified
// (usually the sample rate divided by 60)
nes.getSamples(audioData, 44100 / 60);
// see js/audio.js for a example on how this can be played.
// the basic idea is to use an ScriptProcessorNode, fill a buffer (audioData above)
// with the samples and write it to a ring-buffer each frame, and have the ScriptProcessorNode's
// callback read from the ring-buffer, making sure that the read-position is always behind the write-position

// set controller state
nes.setButtonPressed(1, nes.INPUT.B); // player 1 is now pressing the B button
nes.setButtonPressed(2, nes.INPUT.SELECT); // player 2 is now pressing the select button
nes.setButtonReleased(1, nes.INPUT.B); // player 1 released B
nes.setButtonReleased(2, nes.INPUT.SELECT); // now no buttons are pressed anymore
// nes.INPUT contains A, B, SELECT, START, UP, DOWN, LEFT and RIGHT


// other functions (only call if a rom is loaded)

nes.reset(); // soft reset (as in the reset button being pressed, ram is retained)
nes.reset(true); // hard reset (as in the NES being turned off and on again, ram is reset)
let state = nes.getState(); // get the full state as an object
if(nes.setState(state)) {
  // the state-object has been loaded
} else {
  // failed to load the state-object
}
let battery = nes.getBattery(); // get the battery-backed ram, or undefined if the loaded rom does not have battery-backed ram
if(nes.setBattery(battery)) {
  // loaded battery data
  // (trying to load battery for a rom without battery-backed ram is also deemed successful)
} else {
  // failed to load battery data
}

nes.cycle(); // run a single PPU cycle (and a CPU cycle every three calls)
nes.peak(0x8000); // peaks a value from the CPU address-space (will have no side effects)
nes.mapper.ppuPeak(0x1204); // peaks a value from the PPU address-space (will have no side effects)
nes.read(0x2007); // reads a value from the CPU address-space (can have side effects)
nes.mapper.ppuRead(0x2690); // reads a value from the PPU address-space (can have side effects)
nes.write(0x0723, 0x12); // writes a value to the CPU address-space
nes.mapper.ppuWrite(0x23c0, 0x34); // Writes a value to the PPU address-space
// note that reading from PPU address-space does not allow reading the palette from 0x3f00-0x3fff
// it will return the nametable-data 'behind' it

// callbacks, these will be called during execution of nes.cycle() or nes.runFrame() when they are assigned a function
nes.onread = (address, value) => {console.log(`read ${value} from ${address}`)};
nes.onwrite = (address, value) => {console.log(`wrote ${value} to ${address}`)};
nes.onexecute = (address, value) => {console.log(`executed from ${address} (opcode byte: ${value})`)};

// more functions and properties are available, just checking the .js files themselves is probably the easiest way to see these
