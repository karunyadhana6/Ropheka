// ==================== CORE APP STATE ====================
let totalStars = parseInt(localStorage.getItem('englishApp_stars')) || 0;
let level = parseInt(localStorage.getItem('englishApp_level')) || 1;
let streak = 0;
let soundEnabled = true;

// Age-based learning state
let currentAge = localStorage.getItem('learningAge') || null;
let skillProgress = JSON.parse(localStorage.getItem('skillProgress')) || {
    alphabet: 0,
    matching: 0,
    spelling: 0,
    counting: 0,
    maths: 0,
    sentences: 0
};
let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Age configurations
const ageConfigs = {
    '3-4': {
        emoji: '👶',
        label: '3-4 Years',
        voiceSpeed: 0.7,
        encouragement: ['Great job!', 'Wonderful!', 'You did it!', 'Amazing!', 'Yay!']
    },
    '5-6': {
        emoji: '🧒',
        label: '5-6 Years',
        voiceSpeed: 0.8,
        encouragement: ['Excellent!', 'Keep going!', 'You\'re a star!', 'Perfect!', 'Well done!']
    },
    '7-8': {
        emoji: '👦',
        label: '7-8 Years',
        voiceSpeed: 0.9,
        encouragement: ['Fantastic!', 'You\'re getting better!', 'Smart thinking!', 'Keep it up!', 'Brilliant!']
    },
    '9-10': {
        emoji: '🧑',
        label: '9-10 Years',
        voiceSpeed: 1.0,
        encouragement: ['Impressive!', 'You\'re a pro!', 'Outstanding!', 'Exceptional!', 'Magnificent!']
    },
    '11+': {
        emoji: '🎓',
        label: '11+ Years',
        voiceSpeed: 1.0,
        encouragement: ['Excellent work!', 'Top notch!', 'Remarkable!', 'Superb!', 'Mastery achieved!']
    }
};

// ==================== UTILITY FUNCTIONS ====================

function speak(text) {
    if (!soundEnabled) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = currentAge ? ageConfigs[currentAge].voiceSpeed : 0.8;
    utterance.pitch = 1.1;
    speechSynthesis.speak(utterance);
}

function speakWord(word) {
    speak(word);
}

function playSound(type) {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'success':
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
            break;
        case 'wrong':
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
            break;
        case 'click':
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            break;
        case 'pop':
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            break;
        case 'levelup':
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15);
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3);
            oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.45);
            break;
        default:
            oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    }
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggle');
    if (btn) {
        btn.textContent = soundEnabled ? '🔊' : '🔇';
    }
}

// ==================== SCORE & PROGRESS ====================

function addStar(skillType = null) {
    totalStars++;
    updateScoreDisplay();
    
    // Track skill progress
    if (skillType) {
        updateSkillProgress(skillType, 5);
    }
    
    // Check level up
    if (totalStars % 10 === 0) {
        level++;
        localStorage.setItem('englishApp_level', level);
        showStarBurst();
        speak(`${getAgeAppropriateEncouragement()} You reached level ${level}!`);
    }
    
    localStorage.setItem('englishApp_stars', totalStars);
}

function addStreak() {
    streak++;
    updateScoreDisplay();
    
    if (streak === 5) {
        showStarBurst();
        speak(`${getAgeAppropriateEncouragement()} 5 in a row!`);
    }
}

function resetStreak() {
    streak = 0;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    const starsEl = document.getElementById('totalStars');
    const levelEl = document.getElementById('level');
    const streakEl = document.getElementById('streak');
    
    if (starsEl) starsEl.textContent = `${totalStars} Stars`;
    if (levelEl) levelEl.textContent = `Level ${level}`;
    if (streakEl) streakEl.textContent = `${streak} Streak`;
}

function updateSkillProgress(skill, amount) {
    skillProgress[skill] = Math.min(100, (skillProgress[skill] || 0) + amount);
    localStorage.setItem('skillProgress', JSON.stringify(skillProgress));
    
    const progressBar = document.getElementById(`${skill}Progress`);
    if (progressBar) {
        progressBar.style.width = skillProgress[skill] + '%';
    }
}

function getAgeAppropriateEncouragement() {
    if (!currentAge) return 'Great job!';
    const config = ageConfigs[currentAge];
    return config.encouragement[Math.floor(Math.random() * config.encouragement.length)];
}

// ==================== CELEBRATIONS ====================

function celebrate() {
    const celebration = document.getElementById('celebration');
    if (!celebration) return;
    
    const colors = ['#ff6b6b', '#ffd700', '#06b6d4', '#60a5fa', '#f472b6', '#a78bfa'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        celebration.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function showStarBurst() {
    const celebration = document.getElementById('celebration');
    if (!celebration) return;
    
    const stars = ['⭐', '🌟', '✨', '💫'];
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star-burst';
        star.textContent = stars[Math.floor(Math.random() * stars.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        celebration.appendChild(star);
        
        setTimeout(() => star.remove(), 1000);
    }
}

function createCelebration(message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
        color: white;
        padding: 40px 60px;
        border-radius: 30px;
        font-size: 32px;
        font-family: 'Comic Sans MS', cursive;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        animation: bounceIn 0.5s ease;
    `;
    messageBox.textContent = message;
    
    overlay.appendChild(messageBox);
    document.body.appendChild(overlay);
    
    celebrate();
    playSound('levelup');
    
    setTimeout(() => {
        overlay.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => overlay.remove(), 300);
    }, 2500);
}

// ==================== BACKGROUND ====================

function createDynamicBackground() {
    const container = document.getElementById('dynamicBg');
    if (!container) return;
    
    const shapes = ['🌟', '✨', '💫', '🎈', '🦋', '🎵', '❤️', '🌸', '🍀', '🎀'];
    
    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape floating-3d';
        shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.position = 'absolute';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.fontSize = (Math.random() * 30 + 25) + 'px';
        shape.style.animationDelay = (Math.random() * 6) + 's';
        shape.style.animationDuration = (Math.random() * 4 + 4) + 's';
        shape.style.opacity = '0.2';
        container.appendChild(shape);
    }
}

// ==================== AGE BADGE ====================

function updateAgeBadge() {
    if (!currentAge) return;
    const config = ageConfigs[currentAge];
    
    const emojiEl = document.getElementById('ageBadgeEmoji');
    const textEl = document.getElementById('ageBadgeText');
    
    if (emojiEl) emojiEl.textContent = config.emoji;
    if (textEl) textEl.textContent = `Age: ${config.label}`;
}

// ==================== INITIALIZATION ====================

function initCommon() {
    updateScoreDisplay();
    updateAgeBadge();
    createDynamicBackground();
    
    // Update skill progress bars
    for (const skill in skillProgress) {
        const progressBar = document.getElementById(`${skill}Progress`);
        if (progressBar) {
            progressBar.style.width = skillProgress[skill] + '%';
        }
    }
}

// Auto initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initCommon);
