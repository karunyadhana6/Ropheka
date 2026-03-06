// ==================== SIDEBAR FUNCTIONALITY ====================

// Create and inject sidebar HTML
function createSidebar() {
    const sidebarHTML = `
        <!-- Age Category Sidebar -->
        <div class="sidebar" id="ageSidebar">
            <div class="sidebar-header">
                <h3>👤 Age Settings</h3>
                <button class="sidebar-close" onclick="toggleSidebar()">✕</button>
            </div>
            
            <div class="sidebar-content">
                <p class="sidebar-label">Select Your Age Group:</p>
                
                <div class="age-options">
                    <button class="age-option" data-age="3-4" onclick="selectAge('3-4')">
                        <span class="age-emoji">👶</span>
                        <span class="age-label">3-4 Years</span>
                        <span class="age-desc">Letters, Colors & Shapes</span>
                    </button>
                    
                    <button class="age-option" data-age="5-6" onclick="selectAge('5-6')">
                        <span class="age-emoji">🧒</span>
                        <span class="age-label">5-6 Years</span>
                        <span class="age-desc">Words, Counting & Simple Sentences</span>
                    </button>
                    
                    <button class="age-option" data-age="7-8" onclick="selectAge('7-8')">
                        <span class="age-emoji">👦</span>
                        <span class="age-label">7-8 Years</span>
                        <span class="age-desc">Spelling, Maths & Reading</span>
                    </button>
                    
                    <button class="age-option" data-age="9-10" onclick="selectAge('9-10')">
                        <span class="age-emoji">🧑</span>
                        <span class="age-label">9-10 Years</span>
                        <span class="age-desc">Advanced Words & Complex Sentences</span>
                    </button>
                    
                    <button class="age-option" data-age="11+" onclick="selectAge('11+')">
                        <span class="age-emoji">🎓</span>
                        <span class="age-label">11+ Years</span>
                        <span class="age-desc">Challenge Mode & All Features</span>
                    </button>
                </div>
                
                <div class="sidebar-divider"></div>
                
                <div class="current-settings">
                    <h4>📋 Current Settings</h4>
                    <div class="setting-item">
                        <span>Age Group:</span>
                        <span id="currentAgeDisplay">Not Set</span>
                    </div>
                    <div class="setting-item">
                        <span>Difficulty:</span>
                        <span id="currentDifficultyDisplay">Auto</span>
                    </div>
                    <div class="setting-item">
                        <span>Voice Speed:</span>
                        <span id="currentVoiceSpeedDisplay">Normal</span>
                    </div>
                </div>
                
                <div class="sidebar-divider"></div>
                
                <div class="sidebar-actions">
                    <button class="sidebar-btn home-btn" onclick="window.location.href='index.html'">
                        🏠 Back to Home
                    </button>
                    <button class="sidebar-btn reset-btn" onclick="resetProgress()">
                        🔄 Reset Progress
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Sidebar overlay -->
        <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
        
        <!-- Sidebar toggle button -->
        <button class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()">
            <span class="toggle-icon">⚙️</span>
            <span class="toggle-text">Age</span>
        </button>
    `;
    
    // Insert sidebar at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}

// Sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('ageSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        playSound('pop');
    }
}

// Select age
function selectAge(age) {
    currentAge = age;
    localStorage.setItem('learningAge', age);
    
    // Update UI
    updateAgeDisplay();
    updateAgeBadge();
    highlightSelectedAge();
    
    // Auto-adjust difficulty based on age
    autoAdjustDifficulty(age);
    
    // Show feedback
    const config = ageConfigs[age];
    speak(`${config.encouragement[0]} You selected ${config.label}!`);
    celebrate();
    
    playSound('success');
}

// Update age display in sidebar
function updateAgeDisplay() {
    if (!currentAge) return;
    
    const config = ageConfigs[currentAge];
    const ageDisplay = document.getElementById('currentAgeDisplay');
    const diffDisplay = document.getElementById('currentDifficultyDisplay');
    const speedDisplay = document.getElementById('currentVoiceSpeedDisplay');
    
    if (ageDisplay) ageDisplay.textContent = config.label;
    
    // Update difficulty display
    if (diffDisplay) {
        let difficulty = 'Easy';
        if (currentAge === '5-6') difficulty = 'Easy-Medium';
        else if (currentAge === '7-8') difficulty = 'Medium';
        else if (currentAge === '9-10') difficulty = 'Medium-Hard';
        else if (currentAge === '11+') difficulty = 'Advanced';
        diffDisplay.textContent = difficulty;
    }
    
    // Update voice speed display
    if (speedDisplay) {
        let speed = 'Normal';
        if (config.voiceSpeed < 0.8) speed = 'Slower';
        else if (config.voiceSpeed > 0.9) speed = 'Faster';
        speedDisplay.textContent = speed;
    }
}

// Highlight selected age option
function highlightSelectedAge() {
    document.querySelectorAll('.age-option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.age === currentAge);
    });
}

// Auto-adjust difficulty based on age
function autoAdjustDifficulty(age) {
    // Find difficulty buttons on current page
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    if (difficultyBtns.length === 0) return;
    
    let targetDifficulty = 'easy';
    
    switch(age) {
        case '3-4':
            targetDifficulty = 'easy';
            break;
        case '5-6':
            targetDifficulty = 'easy';
            break;
        case '7-8':
            targetDifficulty = 'medium';
            break;
        case '9-10':
            targetDifficulty = 'hard';
            break;
        case '11+':
            targetDifficulty = 'advanced';
            break;
    }
    
    // Click the appropriate difficulty button
    const targetBtn = document.querySelector(`.difficulty-btn[data-difficulty="${targetDifficulty}"]`);
    if (targetBtn) {
        targetBtn.click();
    }
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone!')) {
        localStorage.removeItem('englishApp_stars');
        localStorage.removeItem('englishApp_level');
        localStorage.removeItem('skillProgress');
        localStorage.removeItem('achievements');
        localStorage.removeItem('learningAge');
        
        // Reset state
        totalStars = 0;
        level = 1;
        streak = 0;
        currentAge = null;
        skillProgress = {
            alphabet: 0,
            matching: 0,
            spelling: 0,
            counting: 0,
            maths: 0,
            sentences: 0
        };
        
        // Update displays
        updateScoreDisplay();
        updateAgeBadge();
        highlightSelectedAge();
        
        // Update progress bars
        for (const skill in skillProgress) {
            const bar = document.getElementById(`${skill}Progress`);
            if (bar) bar.style.width = '0%';
        }
        
        const ageDisplay = document.getElementById('currentAgeDisplay');
        const diffDisplay = document.getElementById('currentDifficultyDisplay');
        const speedDisplay = document.getElementById('currentVoiceSpeedDisplay');
        
        if (ageDisplay) ageDisplay.textContent = 'Not Set';
        if (diffDisplay) diffDisplay.textContent = 'Auto';
        if (speedDisplay) speedDisplay.textContent = 'Normal';
        
        speak('Progress reset! Let\'s start fresh!');
        playSound('click');
    }
}

// Initialize sidebar
function initSidebar() {
    createSidebar();
    updateAgeDisplay();
    highlightSelectedAge();
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initSidebar);
