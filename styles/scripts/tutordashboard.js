   // Function to toggle the visibility of session details when button is clicked
   function toggleSessionDetails(sessionId) {
    const sessionDetails = document.getElementById(sessionId);
    if (sessionDetails.style.display === "none" || sessionDetails.style.display === "") {
        sessionDetails.style.display = "block";
    } else {
        sessionDetails.style.display = "none";
    }
}

// Function to start the countdown timer
function startTimer(sessionId, targetTime) {
    const timerElement = document.getElementById(sessionId);
    const countDownDate = new Date(targetTime).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            timerElement.innerHTML = "Session Started!";
        } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            timerElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}

// Set the target times for the sessions (example dates)
startTimer('timer-1', '2024-11-10T10:00:00');
startTimer('timer-2', '2024-11-12T14:00:00');