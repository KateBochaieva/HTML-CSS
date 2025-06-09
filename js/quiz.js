// js/quiz.js

document.addEventListener('DOMContentLoaded', () => {
    // Масив об'єктів, кожен з яких представляє питання тесту
    const questions = [
        {
            question: "Який тег використовується для створення параграфа в HTML?",
            options: ["<p>", "<para>", "<text>", "<h>"],
            answer: "<p>"
        },
        {
            question: "Який атрибут використовується для вказівки URL посилання?",
            options: ["src", "link", "href", "url"],
            answer: "href"
        },
        {
            question: "Який тег використовується для відображення зображення?",
            options: ["<picture>", "<img>", "<image>", "<photo>"],
            answer: "<img>"
        },
        {
            question: "Який CSS-селектор обирає всі елементи з класом 'highlight'?",
            options: [".highlight", "#highlight", "highlight", "*highlight"],
            answer: ".highlight"
        },
        {
            question: "Яка властивість CSS використовується для зміни кольору тексту?",
            options: ["background-color", "font-color", "color", "text-color"],
            answer: "color"
        },
        {
            question: "Яка властивість CSS використовується для додавання внутрішнього відступу елементу?",
            options: ["margin", "border", "padding", "spacing"],
            answer: "padding"
        },
        {
            question: "Який тег використовується для створення впорядкованого списку в HTML?",
            options: ["<ul>", "<list>", "<ol>", "<li>"],
            answer: "<ol>"
        },
        {
            question: "Що означає абревіатура CSS?",
            options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Яка властивість Flexbox вирівнює елементи по основній осі?",
            options: ["align-items", "justify-content", "flex-direction", "align-content"],
            answer: "justify-content"
        },
        {
            question: "Який мета-тег використовується для забезпечення коректного масштабування на мобільних пристроях?",
            options: ["<meta name=\"viewport\">", "<meta name=\"responsive\">", "<meta name=\"mobile\">", "<meta name=\"scale\">"],
            answer: "<meta name=\"viewport\">"
        }
    ];

    let currentQuestionIndex = 0; // Поточний індекс питання
    let score = 0; // Рахунок користувача
    let selectedOption = null; // Збережена відповідь користувача для поточного питання

    // Отримання посилань на DOM-елементи
    const questionDisplay = document.getElementById('question-display');
    const optionsDisplay = document.getElementById('options-display');
    const submitButton = document.getElementById('submit-quiz-button');
    const nextButton = document.getElementById('next-question-button');
    const restartButton = document.getElementById('restart-quiz-button');
    const feedbackDiv = document.getElementById('quiz-feedback');
    const resultsDiv = document.getElementById('quiz-results');

    // Функція для завантаження та відображення поточного питання
    function loadQuestion() {
        // Перевіряємо, чи є ще питання
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            questionDisplay.textContent = `${currentQuestionIndex + 1}. ${q.question}`; // Відображаємо номер і текст питання
            optionsDisplay.innerHTML = ''; // Очищаємо попередні варіанти відповідей

            // Створюємо радіокнопки для кожного варіанту відповіді
            q.options.forEach(option => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'quiz-option'; // Всі радіокнопки в одній групі
                radio.value = option;
                radio.addEventListener('change', (e) => {
                    selectedOption = e.target.value; // Зберігаємо обрану відповідь
                });
                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));
                optionsDisplay.appendChild(label);
            });

            // Відображаємо кнопку "Відповісти", ховаємо "Наступне питання"
            submitButton.style.display = 'block';
            nextButton.style.display = 'none';
            feedbackDiv.textContent = ''; // Очищаємо попередній фідбек
            resultsDiv.textContent = ''; // Очищаємо попередні результати
            selectedOption = null; // Скидаємо обрану відповідь
        } else {
            showResults(); // Якщо питання закінчилися, показуємо результати
        }
    }

    // Функція для перевірки відповіді користувача
    function checkAnswer() {
        if (selectedOption === null) {
            // Якщо відповідь не обрана
            feedbackDiv.textContent = 'Будь ласка, оберіть відповідь!';
            feedbackDiv.className = 'wrong-answer'; // Використовуємо клас для стилізації помилки
            return;
        }

        const q = questions[currentQuestionIndex];
        if (selectedOption === q.answer) {
            score++; // Збільшуємо рахунок, якщо відповідь правильна
            feedbackDiv.textContent = 'Правильно!';
            feedbackDiv.className = 'correct-answer'; // Клас для правильної відповіді
        } else {
            feedbackDiv.textContent = `Неправильно. Правильна відповідь: ${q.answer}`;
            feedbackDiv.className = 'wrong-answer'; // Клас для неправильної відповіді
        }

        // Ховаємо кнопку "Відповісти", показуємо "Наступне питання"
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        // currentQuestionIndex++; // Збільшуємо індекс питання тут, щоб nextButton перейшов до наступного
    }

    // Функція для відображення кінцевих результатів тесту
    function showResults() {
        questionDisplay.textContent = 'Тест завершено!';
        optionsDisplay.innerHTML = ''; // Очищаємо варіанти
        feedbackDiv.textContent = ''; // Очищаємо фідбек
        resultsDiv.textContent = `Ваш рахунок: ${score} з ${questions.length}`;
        resultsDiv.className = 'correct-answer'; // Завжди показуємо підсумковий рахунок зеленим

        // Ховаємо кнопки відповіді/наступного, показуємо "Почати заново"
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        restartButton.style.display = 'block';
    }

    // Функція для перезапуску тесту
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedOption = null;
        restartButton.style.display = 'none';
        loadQuestion(); // Завантажуємо перше питання
    }

    // Обробники подій для кнопок
    submitButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++; // Збільшуємо індекс перед завантаженням наступного питання
        loadQuestion();
    });
    restartButton.addEventListener('click', restartQuiz);

    // Ініціалізація: завантажуємо перше питання при завантаженні сторінки
    loadQuestion();
});
