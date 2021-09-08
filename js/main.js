document.addEventListener('DOMContentLoaded', function() {
    // Calling function displayCurrentTime every one second
    setInterval(displayCurrentTime, 1000);


    // Get button elements
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const doneButtons = document.getElementsByClassName('finish');
    const participantsTime = document.getElementsByClassName('participant-time');

    startButton.onclick = () => start();
    resetButton.onclick = () => {
        reset();
        for(element of participantsTime) {
            element.classList.remove('done');
        }
    };

    Array.from(doneButtons).forEach((element, index) => {

        element.addEventListener('click', function() {
            const timeText = participantsTime[index].innerText;
            participantsTime[index].classList.add('done');
            participantsTime[index].classList.add('blink');
            setTimeout(function(){ 
                participantsTime[index].classList.remove('blink');
            }, 3000);
            console.log(timeText);
        });

    });

});