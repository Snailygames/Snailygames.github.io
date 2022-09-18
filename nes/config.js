    const nes = cfxnes();
    const {fullscreen} = nes;
    var fps = document.getElementById('fps');
    cfxnes({video: {scale: 2.8}});
    fullscreen.type = 'stretched';
