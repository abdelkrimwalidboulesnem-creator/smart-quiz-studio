// Translations dictionary for UI text
const translations = {
    en: {
        chooseCat: "Choose Quiz Category",
        question: "Question",
        score: "Score",
        completed: "Quiz Completed! 🎉",
        finalScore: "Your final score is",
        restart: "Choose Another Category",
        next: "Next Question"
    },
    fr: {
        chooseCat: "Choisissez la catégorie du quiz",
        question: "Question",
        score: "Score",
        completed: "Quiz terminé! 🎉",
        finalScore: "Votre score final est",
        restart: "Choisir une autre catégorie",
        next: "Question suivante"
    },
    ar: {
        chooseCat: "اختر مجال الاختبار",
        question: "السؤال",
        score: "النقاط",
        completed: "انتهى الاختبار! 🎉",
        finalScore: "نتيجتك النهائية هي",
        restart: "اختر مجالاً آخر",
        next: "السؤال الموالي"
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    document.getElementById('ui-choose-cat').innerText = translations[lang].chooseCat;
    document.getElementById('ui-completed').innerText = translations[lang].completed;
    document.getElementById('restart-btn').innerText = translations[lang].restart;
    document.getElementById('next-btn').innerText = translations[lang].next;
}

// Extended Quiz Database with multiple categories
const quizData = {
    informatique: [
        {
            question: { en: "What does HTML stand for?", fr: "Que signifie HTML?", ar: "ماذا تعني اختصار HTML؟" },
            answers: [
                { text: { en: "Hyper Text Markup Language", fr: "Hyper Text Markup Language", ar: "لغة ترميز النص الفائق" }, correct: true },
                { text: { en: "High Tech Modern Language", fr: "High Tech Modern Language", ar: "لغة حديثة عالية التقنية" }, correct: false },
                { text: { en: "Home Tool Markup Language", fr: "Home Tool Markup Language", ar: "لغة ترميز أدوات المنزل" }, correct: false },
                { text: { en: "Hyperlink and Text Language", fr: "Hyperlink and Text Language", ar: "لغة الارتباط النصي" }, correct: false }
            ]
        },
        {
            question: { en: "Which language styles web pages?", fr: "Quel langage style les pages web?", ar: "أي لغة تستخدم لتصميم وتنسيق صفحات الويب؟" },
            answers: [
                { text: { en: "Python", fr: "Python", ar: "بايثون" }, correct: false },
                { text: { en: "HTML", fr: "HTML", ar: "إتش تي إم إل" }, correct: false },
                { text: { en: "CSS", fr: "CSS", ar: "سي إس إس" }, correct: true },
                { text: { en: "JavaScript", fr: "JavaScript", ar: "جافاسكريفت" }, correct: false }
            ]
        }
    ],
    sport: [
        {
            question: { en: "How many players are on a soccer field per team?", fr: "Combien de joueurs sur un terrain de foot?", ar: "كم عدد لاعبي فريق كرة القدم على الملعب؟" },
            answers: [
                { text: { en: "9", fr: "9", ar: "9" }, correct: false },
                { text: { en: "10", fr: "10", ar: "10" }, correct: false },
                { text: { en: "11", fr: "11", ar: "11" }, correct: true },
                { text: { en: "12", fr: "12", ar: "12" }, correct: false }
            ]
        }
    ],
    general: [
        {
            question: { en: "What is the capital of France?", fr: "Quelle est la capitale de la France?", ar: "ما هي عاصمة فرنسا؟" },
            answers: [
                { text: { en: "London", fr: "Londres", ar: "لندن" }, correct: false },
                { text: { en: "Paris", fr: "Paris", ar: "باريس" }, correct: true },
                { text: { en: "Berlin", fr: "Berlin", ar: "برلين" }, correct: false },
                { text: { en: "Madrid", fr: "Madrid", ar: "مدريد" }, correct: false }
            ]
        }
    ],
    science: [
        {
            question: { en: "What is the chemical symbol for water?", fr: "Quel est le symbole chimique de l'eau?", ar: "ما هو الرمز الكيميائي للماء؟" },
            answers: [
                { text: { en: "H2O", fr: "H2O", ar: "H2O" }, correct: true },
                { text: { en: "CO2", fr: "CO2", ar: "CO2" }, correct: false },
                { text: { en: "O2", fr: "O2", ar: "O2" }, correct: false },
                { text: { en: "NaCl", fr: "NaCl", ar: "NaCl" }, correct: false }
            ]
        }
    ],
    cinema: [
        {
            question: { en: "Who directed the movie Titanic (1997)?", fr: "Qui a réalisé le film Titanic?", ar: "من أخرج فيلم تايتانيك (1997)؟" },
            answers: [
                { text: { en: "Steven Spielberg", fr: "Steven Spielberg", ar: "ستيفن سبيلبرغ" }, correct: false },
                { text: { en: "James Cameron", fr: "James Cameron", ar: "جيمس كاميرون" }, correct: true },
                { text: { en: "Christopher Nolan", fr: "Christopher Nolan", ar: "كريستوفر نولان" }, correct: false },
                { text: { en: "Martin Scorsese", fr: "Martin Scorsese", ar: "مارتن سكورسيزي" }, correct: false }
            ]
        }
    ],
    history: [
        {
            question: { en: "In which year did World War II end?", fr: "En quelle année s'est terminée la 2e Guerre mondiale?", ar: "في أي سنة انتهت الحرب العالمية الثانية؟" },
            answers: [
                { text: { en: "1940", fr: "1940", ar: "1940" }, correct: false },
                { text: { en: "1945", fr: "1945", ar: "1945" }, correct: true },
                { text: { en: "1950", fr: "1950", ar: "1950" }, correct: false },
                { text: { en: "1939", fr: "1939", ar: "1939" }, correct: false }
            ]
        }
    ]
};

// DOM Elements
const categoryContainer = document.getElementById('category-container');
const quizHeader = document.getElementById('quiz-header');
const categoryTitle = document.getElementById('category-title');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const finalScoreElement = document.getElementById('final-score');
const scoreElement = document.getElementById('score');
const questionCounterElement = document.getElementById('question-counter');
const restartButton = document.getElementById('restart-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

document.querySelectorAll('.cat-btn').forEach(button => {
    button.addEventListener('click', selectCategory);
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', resetToCategories);

function selectCategory(e) {
    const selectedCategory = e.target.getAttribute('data-category');
    currentQuestions = quizData[selectedCategory];
    
    categoryTitle.innerText = e.target.innerText;
    categoryContainer.classList.add('hide');
    quizHeader.classList.remove('hide');
    questionContainer.classList.remove('hide');

    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion(currentQuestions[currentQuestionIndex]);
        questionCounterElement.innerText = `${translations[currentLang].question}: ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    } else {
        showResults();
    }
}

function showQuestion(questionObj) {
    questionElement.innerText = questionObj.question[currentLang];
    
    questionObj.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text[currentLang];
        button.classList.add('btn');
        button.addEventListener('click', (e) => selectAnswer(e, answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e, isCorrect) {
    const selectedButton = e.target;
    
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        const matchedAns = currentQuestions[currentQuestionIndex].answers.find(a => a.text[currentLang] === button.innerText);
        if (matchedAns && matchedAns.correct) {
            button.classList.add('correct');
        }
    });

    if (isCorrect) {
        score++;
        scoreElement.innerText = score;
    } else {
        selectedButton.classList.add('wrong');
    }

    if (currentQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        setTimeout(showResults, 1000);
    }
}

function showResults() {
    questionContainer.classList.add('hide');
    quizHeader.classList.add('hide');
    nextButton.classList.add('hide');
    resultContainer.classList.remove('hide');
    finalScoreElement.innerText = `${translations[currentLang].finalScore} ${score} / ${currentQuestions.length}`;
}

function resetToCategories() {
    resultContainer.classList.add('hide');
    categoryContainer.classList.remove('hide');
}