function checkKey(code) {
    switch (code) {
        case 'A':
        case 'S':
        case 'D':
        case 'F':
        case 'G':
        case 'H':
        case 'J':
            return 'white';
    }
    switch (code) {
        case 'W':
        case 'E':
        case 'T':
        case 'Y':
        case 'U':
            return 'black';
    }
}


function playAudio(src, path) {
    try {
        let audio = new Audio(`assets/sounds/${path}-keys/${src}.mp3`);
        audio.play();
    } catch (e) {
        console.log(e);
    }
}


document.addEventListener("keydown", (key) => {
    let xKey = key.key.toUpperCase();
    if (checkKey(xKey) === 'white') {
        document.getElementById(xKey).style.backgroundColor = '#DADADA';
        playAudio(xKey, 'white');
        setTimeout(() => {
            document.getElementById(xKey).style.backgroundColor = 'white';
        }, 250);
    } else if (checkKey(xKey) === 'black') {
        document.getElementById(xKey).style.backgroundColor = '#282828';
        playAudio(xKey, 'black');
        setTimeout(() => {
            document.getElementById(xKey).style.backgroundColor = 'black';
        }, 250);
    } else {
        console.log('Wrong key');
    }
});
