const playBtn = document.querySelector('.volume');

const audio = new Audio();
let isPlay = true;
playBtn?.addEventListener('click', playAudio);

export function playAudio() {
    audio.src = './assets/audio/audio.mp3';

    if (!isPlay) {
        // pauseBtn();
        audio.play();
        playBtn?.classList.add('active-btn');
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
        playBtn?.classList.remove('active-btn');
    }

    audio.onended = function () {
        audio.play();
    };
}
