import { initNavigation } from './navigation.js';
import { initAnimalTest } from './animal-test.js';

const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

const getBallColor = (number) => {
    if (number <= 10) return 'var(--ball-color-1)';
    if (number <= 20) return 'var(--ball-color-2)';
    if (number <= 30) return 'var(--ball-color-3)';
    if (number <= 40) return 'var(--ball-color-4)';
    return 'var(--ball-color-5)';
};

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const displayNumbers = (numbers) => {
    lottoNumbersContainer.innerHTML = '';
    for (const number of numbers) {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getBallColor(number);
        lottoNumbersContainer.appendChild(ball);
    }
};

generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    displayNumbers(newNumbers);
});

// Theme toggle
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

// Initialize modules
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimalTest();
});

// Initial generation
displayNumbers(generateLottoNumbers());
