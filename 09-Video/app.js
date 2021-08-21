const videoContainer = document.querySelector('.videoContainer');
const pause = document.querySelector('.pause');
const play = document.querySelector('.play');
const slider = document.querySelector('.slider');
const preLoader = document.querySelector('.preloader');
const btns = document.querySelector('.btns');

window.addEventListener('load', function(){
    preLoader.classList.add('preloaderHide');
})

btns.addEventListener('click', ()=>{
    if(slider.classList.contains('siderPos')){
        slider.classList.remove('siderPos');
        videoContainer.play();
    }else{
        slider.classList.add('siderPos');
        videoContainer.pause();
    }
})

