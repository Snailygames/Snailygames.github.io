    const nes = cfxnes();
    const {fullscreen} = nes;
    var fps = document.getElementById('fps');

    cfxnes({video: {scale: 2.8}});

    
    setInterval(function() {
      fps.innerHTML = nes.running ? ('FPS: ' + ~~nes.fps) : '';
    }, 500);
