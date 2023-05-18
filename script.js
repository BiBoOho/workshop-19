const SpeechRecognize = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognize = new SpeechRecognize();
const btn = document.querySelector('.control');

function recordVoice() {
    const isRecord = btn.classList.contains('record');

    if(isRecord) {
        recognize.start();

        btn.classList.remove('record');
        btn.classList.add('pause');
        btn.innerHTML = `Pause <i class="fas fa-pause"></i>`;
    }else{
        recognize.stop();

        btn.classList.remove('pause');
        btn.classList.add('record');
        btn.innerHTML = `Record <i class="fas fa-microphone">`;
    }
}

function setVoicetoText(e) {
    let message = document.querySelector('.message');
    message.innerText += e.results[0][0].transcript;
}

function continueRecord() {
    const isPause = btn.classList.contains('pause');

    if(isPause) {
        recognize.start();
    }
}

function setUpVoice() {
    console.log(recognize);
    recognize.lang="lo-LA";
    btn.addEventListener('click', recordVoice);
    recognize.addEventListener('result', setVoicetoText);
    recognize.addEventListener('end',continueRecord);
}

setUpVoice();