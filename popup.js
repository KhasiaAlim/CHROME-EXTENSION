// ----- TIME ----- //

function updateTime() {
    const timeDisplay = document.querySelector('.main-body #time');

    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}`;
    }, 1000);
}


// ----- GREETING ----- //

function updateGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    document.querySelector('#greeting').textContent = greeting;
}

document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    updateTime();
});