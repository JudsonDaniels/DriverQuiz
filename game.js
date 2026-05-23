// === DRIVER DATA ===
const drivers = [
    { number: "10", name: "Alex Palou", team: "Chip Ganassi Racing", engine: "Honda", color1: "#0057B8", color2: "#00A3E0" },
    { number: "20", name: "Alexander Rossi", team: "ECR", engine: "Chevrolet", color1: "#FFD700", color2: "#1C1C1C" },
    { number: "12", name: "David Malukas", team: "Penske", engine: "Chevrolet", color1: "#E4002B", color2: "#FFFFFF" },
    { number: "60", name: "Felix Rosenqvist", team: "Meyer Shank Racing", engine: "Honda", color1: "#00205B", color2: "#69BE28" },
    { number: "14", name: "Santino Ferrucci", team: "A.J. Foyt Enterprises", engine: "Chevrolet", color1: "#C8102E", color2: "#FFFFFF" },
    { number: "5", name: "Pato O'Ward", team: "Arrow McClaren", engine: "Chevrolet", color1: "#FF6B00", color2: "#00A651" },
    { number: "8", name: "Kyffin Simpson", team: "Chip Ganassi Racing", engine: "Honda", color1: "#003DA5", color2: "#FFD100" },
    { number: "23", name: "Conor Daly", team: "Dreyer & Reinbold Racing", engine: "Chevrolet", color1: "#E31937", color2: "#002F6C" },
    { number: "3", name: "Scott McLaughlin", team: "Penske", engine: "Chevrolet", color1: "#FFE600", color2: "#E4002B" },
    { number: "9", name: "Scott Dixon", team: "Chip Ganassi Racing", engine: "Honda", color1: "#0033A0", color2: "#CE0E2D" },
    { number: "76", name: "Rinus VeeKay", team: "Juncos Hollinger Racing", engine: "Chevrolet", color1: "#FF8200", color2: "#003DA5" },
    { number: "75", name: "Takuma Sato", team: "Rahal Letterman Lanigan Racing", engine: "Honda", color1: "#FFFFFF", color2: "#E60012" },
    { number: "33", name: "Ed Carpenter", team: "ECR", engine: "Chevrolet", color1: "#5C068C", color2: "#FFD100" },
    { number: "06", name: "Helio Castroneves", team: "Meyer Shank Racing", engine: "Honda", color1: "#FFD700", color2: "#E4002B" },
    { number: "21", name: "Christian Rasmussen", team: "ECR", engine: "Chevrolet", color1: "#00529B", color2: "#FFFFFF" },
    { number: "66", name: "Marcus Armstrong", team: "Meyer Shank Racing", engine: "Honda", color1: "#1D1D1B", color2: "#E4002B" },
    { number: "28", name: "Marcus Ericsson", team: "Andretti Global", engine: "Honda", color1: "#003DA5", color2: "#FFD100" },
    { number: "7", name: "Christian Lundgaard", team: "Arrow McClaren", engine: "Chevrolet", color1: "#E4002B", color2: "#1C1C1C" },
    { number: "26", name: "Will Power", team: "Andretti Global", engine: "Honda", color1: "#CE0E2D", color2: "#FFFFFF" },
    { number: "6", name: "Nolan Siegel", team: "Arrow McClaren", engine: "Chevrolet", color1: "#003DA5", color2: "#00A3E0" },
    { number: "45", name: "Louis Foster", team: "Rahal Letterman Lanigan Racing", engine: "Honda", color1: "#00843D", color2: "#FFFFFF" },
    { number: "31", name: "Ryan Hunter-Reay", team: "Arrow McClaren", engine: "Chevrolet", color1: "#FF6B00", color2: "#002F6C" },
    { number: "2", name: "Josef Newgarden", team: "Penske", engine: "Chevrolet", color1: "#1C1C1C", color2: "#FFD700" },
    { number: "18", name: "Romain Grosjean", team: "Dale Coyne Racing", engine: "Honda", color1: "#002F6C", color2: "#FFFFFF" },
    { number: "27", name: "Kyle Kirkwood", team: "Andretti Global", engine: "Honda", color1: "#00A3E0", color2: "#1C1C1C" },
    { number: "11", name: "Katherine Legge", team: "HMD Motorsports", engine: "Chevrolet", color1: "#8B008B", color2: "#FFD700" },
    { number: "47", name: "Mick Schumacher", team: "Rahal Letterman Lanigan Racing", engine: "Honda", color1: "#1C1C1C", color2: "#00A651" },
    { number: "15", name: "Graham Rahal", team: "Rahal Letterman Lanigan Racing", engine: "Honda", color1: "#E4002B", color2: "#002F6C" },
    { number: "19", name: "Dennis Hauger", team: "Dale Coyne Racing", engine: "Honda", color1: "#002868", color2: "#EF3340" },
    { number: "51", name: "Jacob Abel", team: "Able Motorsports", engine: "Chevrolet", color1: "#00529B", color2: "#FFD100" },
    { number: "77", name: "Sting Ray Robb", team: "Juncos Hollinger Racing", engine: "Chevrolet", color1: "#003DA5", color2: "#CE0E2D" },
    { number: "4", name: "Caio Collet", team: "A.J. Foyt Enterprises", engine: "Chevrolet", color1: "#009639", color2: "#FFD100" },
    { number: "24", name: "Jack Harvey", team: "Dreyer & Reinbold Racing", engine: "Chevrolet", color1: "#1C1C1C", color2: "#E4002B" }
];

// === TEAM LOGO MAP ===
const teamLogos = {
    "Chip Ganassi Racing": "img/teams/ganassi_racing.png",
    "ECR": "img/teams/ecr.png",
    "Penske": "img/teams/team_penske.png",
    "Meyer Shank Racing": "img/teams/meyer_shank_racing.png",
    "A.J. Foyt Enterprises": "img/teams/foyt_enterprises.png",
    "Arrow McClaren": "img/teams/arrow_mclaren.png",
    "Dreyer & Reinbold Racing": "img/teams/dreyer_reinbold_racing.png",
    "Juncos Hollinger Racing": "img/teams/juncos_hollinger.png",
    "Rahal Letterman Lanigan Racing": "img/teams/rahal_letterman_lanigan.png",
    "Andretti Global": "img/teams/andretti_global.png",
    "Dale Coyne Racing": "img/teams/dale_coyne_racing.png",
    "HMD Motorsports": "img/teams/hmd_foyt.png",
    "Able Motorsports": "img/teams/abel_motorsports.png"
};

// Get unique teams for choices
const uniqueTeams = [...new Set(drivers.map(d => d.team))];

// === GAME STATE ===
let gameState = {
    mode: "driver", // "driver" or "team"
    difficulty: "medium",
    timeLimit: 5,
    totalCards: 33,
    currentQuestion: 0,
    score: 0,
    correctCount: 0,
    questions: [],
    timerInterval: null,
    timeRemaining: 0,
    answered: false,
    autoAdvanceTimeout: null
};

// === DOM ELEMENTS ===
const menuScreen = document.getElementById("menu-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const continueBtn = document.getElementById("continue-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const carDisplay = document.getElementById("car-display");
const choicesDiv = document.getElementById("choices");
const feedbackDiv = document.getElementById("feedback");
const timerBar = document.getElementById("timer-bar");
const timerText = document.getElementById("timer-text");
const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");

// === MENU LOGIC ===
document.querySelectorAll(".difficulty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".difficulty-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        gameState.difficulty = btn.dataset.difficulty;
        gameState.timeLimit = parseInt(btn.dataset.time);
    });
});

document.querySelectorAll(".cards-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".cards-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        gameState.totalCards = parseInt(btn.dataset.cards);
    });
});

document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        gameState.mode = btn.dataset.mode;
    });
});

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", () => showScreen(menuScreen));
continueBtn.addEventListener("click", skipToNext);

// === SCREEN MANAGEMENT ===
function showScreen(screen) {
    [menuScreen, gameScreen, resultsScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

// === GAME LOGIC ===
function startGame() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.correctCount = 0;
    gameState.answered = false;
    
    // Shuffle and pick cards
    const shuffled = [...drivers].sort(() => Math.random() - 0.5);
    gameState.questions = shuffled.slice(0, gameState.totalCards);
    
    showScreen(gameScreen);
    showQuestion();
}

function showQuestion() {
    if (gameState.currentQuestion >= gameState.questions.length) {
        showResults();
        return;
    }

    gameState.answered = false;
    feedbackDiv.classList.add("hidden");
    feedbackDiv.className = "feedback hidden";
    continueBtn.classList.add("hidden");

    const current = gameState.questions[gameState.currentQuestion];
    
    // Update counter
    questionCounter.textContent = `${gameState.currentQuestion + 1} / ${gameState.questions.length}`;
    scoreDisplay.textContent = `Score: ${gameState.score}`;
    
    // Update question text based on mode
    const carDisplayText = document.getElementById("car-display-text");
    if (carDisplayText) {
        carDisplayText.innerHTML = gameState.mode === "team" 
            ? "<h1>Which team runs this car?</h1>" 
            : "<h1>Who drives this car?</h1>";
    }
    
    // Show car image
    carDisplay.innerHTML = generateCarImage(current);
    
    if (gameState.mode === "team") {
        // Team mode: show team logos as choices
        const correctTeam = current.team;
        const wrongTeams = uniqueTeams
            .filter(t => t !== correctTeam)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        const allTeamChoices = [correctTeam, ...wrongTeams].sort(() => Math.random() - 0.5);
        
        choicesDiv.innerHTML = "";
        choicesDiv.classList.add("team-mode");
        allTeamChoices.forEach(team => {
            const btn = document.createElement("button");
            btn.className = "choice-btn team-choice-btn";
            btn.dataset.team = team;
            btn.innerHTML = `<img src="${teamLogos[team]}" alt="${team}" class="team-logo-choice" />`;
            btn.addEventListener("click", () => handleAnswer(btn, team === correctTeam, correctTeam));
            choicesDiv.appendChild(btn);
        });
    } else {
        // Driver mode: show driver names as text
        const wrongChoices = drivers
            .filter(d => d.name !== current.name)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        const allChoices = [current, ...wrongChoices].sort(() => Math.random() - 0.5);
        
        choicesDiv.innerHTML = "";
        choicesDiv.classList.remove("team-mode");
        allChoices.forEach(choice => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice.name;
            btn.addEventListener("click", () => handleAnswer(btn, choice.name === current.name, current.name));
            choicesDiv.appendChild(btn);
        });
    }
    
    // Start timer
    startTimer();
}

function handleAnswer(btn, isCorrect, correctAnswer) {
    if (gameState.answered) return;
    gameState.answered = true;
    
    clearInterval(gameState.timerInterval);
    
    // Disable all buttons and highlight correct
    document.querySelectorAll(".choice-btn").forEach(b => {
        b.disabled = true;
        const matchValue = gameState.mode === "team" ? b.dataset.team : b.textContent;
        if (matchValue === correctAnswer) {
            b.classList.add("correct");
        }
    });
    
    if (isCorrect) {
        const pointsEarned = gameState.timeRemaining * 10;
        gameState.score += pointsEarned;
        gameState.correctCount++;
        btn.classList.add("correct");
        feedbackDiv.textContent = `Correct!`;
        feedbackDiv.className = "feedback correct";
        showFloatingPoints(pointsEarned, btn);
    } else {
        btn.classList.add("incorrect");
        feedbackDiv.textContent = `Incorrect. The answer is ${correctAnswer}.`;
        feedbackDiv.className = "feedback incorrect";
        carDisplay.classList.add("shake");
        setTimeout(() => carDisplay.classList.remove("shake"), 500);
    }
    
    feedbackDiv.classList.remove("hidden");
    scoreDisplay.textContent = `Score: ${gameState.score}`;
    continueBtn.classList.remove("hidden");
    
    gameState.autoAdvanceTimeout = setTimeout(advanceQuestion, 5000);
}

function handleTimeout() {
    if (gameState.answered) return;
    gameState.answered = true;
    
    const current = gameState.questions[gameState.currentQuestion];
    const correctAnswer = gameState.mode === "team" ? current.team : current.name;
    
    // Disable all buttons and show correct
    document.querySelectorAll(".choice-btn").forEach(b => {
        b.disabled = true;
        const matchValue = gameState.mode === "team" ? b.dataset.team : b.textContent;
        if (matchValue === correctAnswer) {
            b.classList.add("correct");
        }
    });
    
    feedbackDiv.textContent = `Time's up! The answer was ${correctAnswer}.`;
    feedbackDiv.className = "feedback incorrect";
    feedbackDiv.classList.remove("hidden");
    continueBtn.classList.remove("hidden");
    
    gameState.autoAdvanceTimeout = setTimeout(advanceQuestion, 5000);
}

function skipToNext() {
    clearTimeout(gameState.autoAdvanceTimeout);
    advanceQuestion();
}

function advanceQuestion() {
    clearTimeout(gameState.autoAdvanceTimeout);
    gameState.currentQuestion++;
    showQuestion();
}

// === TIMER ===
function startTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timeRemaining = gameState.timeLimit * 10; // Use tenths of seconds
    const totalTenths = gameState.timeLimit * 10;
    
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimerDisplay();
        
        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            handleTimeout();
        }
    }, 100);
}

function updateTimerDisplay() {
    const totalTenths = gameState.timeLimit * 10;
    const percent = (gameState.timeRemaining / totalTenths) * 100;
    const seconds = Math.ceil(gameState.timeRemaining / 10);
    
    timerBar.style.width = percent + "%";
    timerText.textContent = seconds + "s";
    
    // Color changes
    timerBar.classList.remove("warning", "danger");
    if (percent <= 25) {
        timerBar.classList.add("danger");
    } else if (percent <= 50) {
        timerBar.classList.add("warning");
    }
}

// === RESULTS ===
function showResults() {
    clearInterval(gameState.timerInterval);
    clearTimeout(gameState.autoAdvanceTimeout);
    
    const total = gameState.questions.length;
    const correct = gameState.correctCount;
    const percent = Math.round((correct / total) * 100);
    
    const resultsIcon = document.getElementById("results-icon");
    const resultsTitle = document.getElementById("results-title");
    const resultsMessage = document.getElementById("results-message");
    const resultsScore = document.getElementById("results-score");
    const resultsDetails = document.getElementById("results-details");
    
    resultsScore.textContent = `${percent}%`;
    resultsDetails.textContent = `${correct} out of ${total} correct`;
    
    if (percent === 100) {
        resultsIcon.textContent = "🏆";
        resultsTitle.textContent = "PERFECT!";
        resultsMessage.textContent = "You know every car on the grid! Champion-level knowledge!";
    } else if (percent >= 85) {
        resultsIcon.textContent = "🏁";
        resultsTitle.textContent = "GREAT JOB!";
        resultsMessage.textContent = "Excellent spotter skills! Almost perfect!";
    } else if (percent >= 70) {
        resultsIcon.textContent = "🏁";
        resultsTitle.textContent = "GOOD JOB!";
        resultsMessage.textContent = "Passing grade! You know your way around the track.";
    } else {
        resultsIcon.textContent = "🏁";
        resultsTitle.textContent = "TRY AGAIN";
        resultsMessage.textContent = "Back to the garage...";
    }
    
    showScreen(resultsScreen);
}

// === FLOATING POINTS ANIMATION ===
function showFloatingPoints(points, anchorElement) {
    const float = document.createElement("div");
    float.className = "points-float";
    float.textContent = `+${points}`;
    
    // Position near the score display area
    const rect = anchorElement.getBoundingClientRect();
    float.style.left = rect.left + rect.width / 2 - 30 + "px";
    float.style.top = rect.top - 10 + "px";
    
    document.body.appendChild(float);
    
    // Remove after animation completes
    setTimeout(() => {
        float.remove();
    }, 1500);
}

// === CAR IMAGE DISPLAY ===
function generateCarImage(driver) {
    return `<img src="img/cars/car_${driver.number}.png" alt="Car #${driver.number}" class="car-image" />`;
}
