// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionCountDisplay = document.getElementById('question-count-display');
const questionCountSlider = document.getElementById('question-count');
const startBtn = document.getElementById('start-btn');

const totalQCountSpan = document.getElementById('total-q-count');
const currentQIndexSpan = document.getElementById('current-q-index');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');

const scoreDisplay = document.getElementById('score-display');
const scoreTotalSpan = document.getElementById('score-total');
const restartBtn = document.getElementById('restart-btn');

// App State
let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOptions = new Set();
let isAnswerSubmitted = false;

// Slider logic
questionCountSlider.addEventListener('input', (e) => {
    questionCountDisplay.textContent = e.target.value;
});

// Start logic
startBtn.addEventListener('click', () => {
    let numQuestions = parseInt(questionCountSlider.value);
    
    // Ensure we don't request more than available
    if(numQuestions > allQuestions.length) {
        numQuestions = allQuestions.length;
    }

    // Shuffle and slice
    activeQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, numQuestions);
    
    currentQuestionIndex = 0;
    score = 0;
    
    setupScreen.classList.remove('active');
    setupScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    quizScreen.classList.add('active');
    
    totalQCountSpan.textContent = numQuestions;
    scoreTotalSpan.textContent = numQuestions;
    
    loadQuestion();
});

function loadQuestion() {
    isAnswerSubmitted = false;
    selectedOptions.clear();
    submitBtn.disabled = true;
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    
    const questionData = activeQuestions[currentQuestionIndex];
    currentQIndexSpan.textContent = currentQuestionIndex + 1;
    progressFill.style.width = `${(currentQuestionIndex / activeQuestions.length) * 100}%`;
    
    questionText.textContent = questionData.question;
    
    optionsGrid.innerHTML = '';
    // Create an array of indexes and shuffle it to randomise option display
    const shuffledIndexes = questionData.options.map((_, i) => i).sort(() => 0.5 - Math.random());
    
    shuffledIndexes.forEach(originalIndex => {
        const opt = questionData.options[originalIndex];
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = opt;
        btn.dataset.index = originalIndex;
        
        btn.addEventListener('click', () => {
            if (isAnswerSubmitted) return;
            
            if (selectedOptions.has(originalIndex)) {
                selectedOptions.delete(originalIndex);
                btn.classList.remove('selected');
            } else {
                selectedOptions.add(originalIndex);
                btn.classList.add('selected');
            }
            
            submitBtn.disabled = selectedOptions.size === 0;
        });
        
        optionsGrid.appendChild(btn);
    });
}

submitBtn.addEventListener('click', () => {
    if (selectedOptions.size === 0 || isAnswerSubmitted) return;
    
    isAnswerSubmitted = true;
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    
    const questionData = activeQuestions[currentQuestionIndex];
    const correctIndexes = new Set(questionData.correctIndexes);
    
    // Check if user exactly matched the correct answers
    let isFullyCorrect = false;
    if (selectedOptions.size === correctIndexes.size) {
        isFullyCorrect = [...selectedOptions].every(val => correctIndexes.has(val));
    }
    
    if (isFullyCorrect) {
        score++;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
    
    // Reveal answers visually
    const buttons = optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        const originalIndex = parseInt(btn.dataset.index);
        if (correctIndexes.has(originalIndex)) {
            btn.classList.add('correct-reveal');
        } else {
            btn.classList.add('wrong-reveal');
        }
    });
});

function showFeedback(isCorrect) {
    feedbackOverlay.classList.remove('hidden', 'success', 'fail');
    
    if (isCorrect) {
        feedbackOverlay.classList.add('success');
        feedbackTitle.textContent = "CORRECT !";
        feedbackText.textContent = "+1 point";
    } else {
        feedbackOverlay.classList.add('fail');
        feedbackTitle.textContent = "INCORRECT !";
        feedbackText.textContent = "C'était presque ça !";
    }
    
    setTimeout(() => {
        feedbackOverlay.classList.add('hidden');
    }, 1500);
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');
    
    scoreDisplay.textContent = score;
}

restartBtn.addEventListener('click', () => {
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
    setupScreen.classList.add('active');
    
    // Reset slider max based on questions loaded
    questionCountSlider.max = allQuestions.length;
    questionCountSlider.value = Math.min(questionCountSlider.value, allQuestions.length);
    questionCountDisplay.textContent = questionCountSlider.value;
});
