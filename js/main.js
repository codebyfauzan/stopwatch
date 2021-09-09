document.addEventListener('DOMContentLoaded', function() {
    // Calling function displayCurrentTime every one second
    setInterval(displayCurrentTime, 1000);

    // Get button elements
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const iconButton = document.querySelector('#start i');
    const doneButtons = document.getElementsByClassName('finish');
    const participantsTime = document.getElementsByClassName('participant-time');

    startButton.onclick = () => {
        // When iconButton is play button
        if(iconButton.classList.contains('bi-play-fill')) {
            start();
            iconButton.classList.remove('bi-play-fill');
            iconButton.classList.add('bi-pause-fill');
        } 
         // When iconButton is pause button
        else if(iconButton.classList.contains('bi-pause-fill')) {
            pause();
            iconButton.classList.remove('bi-pause-fill');
            iconButton.classList.add('bi-play-fill');
        }
    };

    resetButton.onclick = () => {
        reset();
        // Clearing All effects and class back to default
        for(element of participantsTime) {
            element.classList.remove('done');
            element.classList.remove('blink');
        }
        if(iconButton.classList.contains('bi-pause-fill')) {
            iconButton.classList.remove('bi-pause-fill');
            iconButton.classList.add('bi-play-fill');
        }
    };

    Array.from(doneButtons).forEach((element, index) => {
        // When doneButton get clicked
        element.addEventListener('click', function() {
            // Do nothing when timer doesn't start and pTime is done
            if(second == 0 || participantsTime[index].classList.contains('done')) {
                return;
            }
            // Adding effects to pTime when it's done
            participantsTime[index].classList.add('done');
            participantsTime[index].classList.add('blink');
            setTimeout(function(){ 
                participantsTime[index].classList.remove('blink');
            }, 3000);
        });

    });

});