let countdown; // variable to store setInterval

function startTimer() {
    clearInterval(countdown); // clear any existing timer

    let time = 5 * 60; // 5 minutes in seconds

    countdown = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        // Format with leading zeros
        let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById("timer").innerHTML = displayMinutes + ":" + displaySeconds;

        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }

        time--;
    }, 1000);
}