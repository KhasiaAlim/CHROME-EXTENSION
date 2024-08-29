
// ------- TRANSITIONS BETWEEN DIVS ------- //

document.getElementById('btn1').addEventListener('click', function() {
    const loginPage1 = document.getElementById('fields-1');
    const loginPage2 = document.getElementById('fields-2');
    const userName = document.getElementById('username').value;

    if (userName.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    loginPage1.classList.remove('fade-in');
    loginPage1.classList.add('fade-out');


    setTimeout(function() {
        loginPage1.classList.add('hidden');
        loginPage2.classList.remove('hidden');
        loginPage2.classList.add('fade-in');
    }, 1500); 
});


document.getElementById('btn2').addEventListener('click', function() {
    const loginPage2 = document.getElementById('fields-2');
    const loginPage3 = document.getElementById('fields-3');
    const email = document.getElementById('email').value;

    if (email.trim() === "") {
        alert("Please enter an email address.");
        return;
    }

    loginPage2.classList.remove('fade-in');
    loginPage2.classList.add('fade-out');

    setTimeout(function() {
        loginPage2.classList.add('hidden');
        loginPage3.classList.remove('hidden');
        loginPage3.classList.add('fade-in');
    }, 1500); 
});


document.getElementById('btn3').addEventListener('click', function() {
    const loginPage3 = document.getElementById('fields-3');
    const mainContent = document.getElementById('main-content');
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password.trim() === "") {
        alert("Please enter a password.");
        return;
    }
    
    loginPage3.classList.remove('fade-in');
    loginPage3.classList.add('fade-out');

    setTimeout(function() {
        loginPage3.classList.add('hidden');
        document.getElementById('your-name').textContent = userName;
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');

        updateGreeting(userName);
        updateTime();
    }, 1500); 
});

function updateGreeting(name) {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = `Good Morning, ${name}!`;
    } else if (hours < 18) {
        greeting = `Good Afternoon, ${name}!`;
    } else {
        greeting = `Good Evening, ${name}!`;
    }

    document.querySelector('#main-content h1').textContent = greeting;
}

function updateTime() {
    const timeDisplay = document.querySelector('#main-content h2');

    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}`;
    }, 1000);
}

// ------- BACKGROUND ------- //

document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = [
        './images/backgrounds/1.png',
        './images/backgrounds/2.png',
        './images/backgrounds/3.png',
        './images/backgrounds/4.png',
        './images/backgrounds/5.png'
    ];

    let currentIndex = 0;
    const backgroundSelect = document.getElementById('background-select');

    function changeBackground() {
        const selectedBackground = backgroundSelect.value;
        
        if (selectedBackground === 'auto') {
            document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
            currentIndex = (currentIndex + 1) % backgrounds.length;

            const randomTime = Math.floor(Math.random() * (1800000 - 1200000 + 1)) + 1200000;
            setTimeout(changeBackground, randomTime);
        } else {
            document.body.style.backgroundImage = `url(${selectedBackground})`;
        }
    }

    backgroundSelect.addEventListener('change', () => {
        if (backgroundSelect.value !== 'auto') {
            clearTimeout(changeBackground.timeoutId);
        }
        changeBackground();
    });

    changeBackground();
});