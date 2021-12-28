const playBtn = document.querySelector('.volume');

const audio = new Audio();
let isPlay = true;

export function playAudio() {
    audio.src = './assets/audio/audio.mp3';

    if (!isPlay) {
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

playBtn?.addEventListener('click', playAudio);
