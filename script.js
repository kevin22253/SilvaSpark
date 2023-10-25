document.addEventListener("DOMContentLoaded", function() {
    // Set the event date and time for Silva Spark (year, month (0-indexed), day, hour, minute, second)
    const eventDate = new Date(2023, 11, 15, 10, 0, 0).getTime();

    const updateTimer = setInterval(function() {
        const currentDate = new Date().getTime();
        const timeLeft = eventDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = `${days}d`;
        document.getElementById("hours").innerHTML = `${hours}h`;
        document.getElementById("minutes").innerHTML = `${minutes}m`;
        document.getElementById("seconds").innerHTML = `${seconds}s`;

        if (timeLeft < 0) {
            clearInterval(updateTimer);
            document.querySelector(".countdown-timer").innerHTML = "Event Started!";
        }
    }, 1000);
});
