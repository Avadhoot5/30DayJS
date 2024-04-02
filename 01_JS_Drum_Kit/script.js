
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running.
    audio.currentTime = 0; //rewinds to sart 
    audio.play();
    key.classList.add('playing');
}

// const keys = document.querySelectorAll('.key');
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if its not a transform
    this.classList.remove('playing');
}

document.addEventListener('keydown', playSound);


