document.addEventListener('DOMContentLoaded', function(){
    const audioElement = document.getElementById('bgMusic');
    const pauseBtn = document.getElementById('pauseBtn');
    
    pauseBtn.addEventListener('click', function(){
        if(!audioElement.paused){
            audioElement.pause();
        } else {
            audioElement.play();
        }
    })
    audioElement.addEventListener('click', function(){
        if(!audioElement.paused){
            audioElement.pause();
        } else {
            audioElement.play();
        }
    })
})