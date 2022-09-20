    const nes = cfxnes();
    const {fullscreen} = nes;
    var fps = document.getElementById('fps');
    cfxnes({video: {scale: 2.8}});
    fullscreen.type = 'normalized';
    
function loadNVRAM() {
  return localforage.getItem(nes.rom.sha1).then(data => {
    if (nes.nvram && data) {
      nes.nvram.set(data);
    }
  }).catch(error => {
    console.error(error);
  });
}

function saveNVRAM() {
  if (nes.nvram) {
    localforage.setItem(nes.rom.sha1, nes.nvram).catch(error => {
      console.error(error);
    });
  }
}

loadNVRAM();
