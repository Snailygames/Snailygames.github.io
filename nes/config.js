    const nes = cfxnes();
    const {fullscreen} = nes;
    var fps = document.getElementById('fps');
    cfxnes({video: {scale: 2.8}});
    nes.rom.load(roml)
    .then(loadNVRAM);
    
    localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'test',
    storeName: 'nvram'
    });
       

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
     
    
function killdata() {
localforage.clear().then(function() {
    console.log('Database is now empty.');
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});
}
    
