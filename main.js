// main.js - UPDATED WITH SHOW MORE FUNCTIONALITY
// AI Tools Data - All 30 tools with descriptions
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        category: "writing",
        icon: "fas fa-comment-alt",
        iconColor: "#10a37f",
        description: "Advanced conversational AI for answering questions, writing, and brainstorming.",
        whatItDoes: "ChatGPT is an AI chatbot that can have natural conversations, answer questions, help with writing, explain concepts, and generate creative content.",
        howItWorks: "Based on GPT architecture (Generative Pre-trained Transformer), it's trained on massive text data to predict the next word in a sequence, enabling human-like responses.",
        studentUse: "Essay writing, homework help, language learning, brainstorming ideas, coding explanations, and research assistance."
    },
    {
        id: 2,
        name: "Claude AI",
        category: "writing",
        icon: "fas fa-brain",
        iconColor: "#d4a013",
        description: "AI assistant focused on helpful, honest, and harmless conversations.",
        whatItDoes: "Claude helps with analysis, writing, coding, and reasoning tasks with an emphasis on safety and accuracy.",
        howItWorks: "Uses Constitutional AI training to align with human values while maintaining strong reasoning capabilities through transformer architecture.",
        studentUse: "Research paper analysis, ethical dilemma discussions, complex problem solving, and detailed explanations."
    },
    {
        id: 3,
        name: "Gemini (Google AI)",
        category: "writing",
        icon: "fas fa-gem",
        iconColor: "#4285f4",
        description: "Google's multimodal AI that understands text, images, and code.",
        whatItDoes: "Processes and generates text, images, and code while integrating with Google's search and productivity tools.",
        howItWorks: "Multimodal transformer model trained on text, images, and code from diverse sources with advanced reasoning capabilities.",
        studentUse: "Multimedia projects, coding assignments, research with visual data, and integration with Google Workspace."
    },
    {
        id: 4,
        name: "Quillbot",
        category: "writing",
        icon: "fas fa-feather-alt",
        iconColor: "#6c63ff",
        description: "AI-powered paraphrasing tool and grammar checker.",
        whatItDoes: "Rewrites sentences and paragraphs while preserving meaning, checks grammar, and improves writing style.",
        howItWorks: "Uses natural language processing and machine learning to understand context and generate alternative phrasing.",
        studentUse: "Paraphrasing research sources, improving essay flow, checking grammar, and avoiding plagiarism."
    },
    {
        id: 5,
        name: "Notion AI",
        category: "writing",
        icon: "fas fa-sticky-note",
        iconColor: "#000000",
        description: "AI assistant integrated into Notion workspace for content creation.",
        whatItDoes: "Helps write, edit, summarize, and brainstorm directly within Notion pages and databases.",
        howItWorks: "LLM integrated into Notion's editor that can process page content and generate relevant text based on context.",
        studentUse: "Note-taking, study guides, project planning, summarizing lecture notes, and organizing research."
    },
    {
        id: 6,
        name: "Grammarly AI",
        category: "writing",
        icon: "fas fa-spell-check",
        iconColor: "#15c39a",
        description: "AI writing assistant for grammar, tone, and clarity improvements.",
        whatItDoes: "Real-time grammar checking, tone suggestions, clarity improvements, and plagiarism detection.",
        howItWorks: "Combines rule-based systems with deep learning models trained on millions of text samples for contextual corrections.",
        studentUse: "Proofreading assignments, improving academic writing style, checking for plagiarism, and email communication."
    },
    {
        id: 7,
        name: "GitHub Copilot",
        category: "coding",
        icon: "fas fa-code",
        iconColor: "#f05133",
        description: "AI pair programmer that suggests code in real-time.",
        whatItDoes: "Autocompletes code, suggests entire functions, and helps debug directly in your IDE.",
        howItWorks: "Codex model trained on billions of lines of public code to understand programming patterns and context.",
        studentUse: "Learning programming concepts, completing coding assignments faster, understanding syntax, and debugging."
    },
    {
        id: 8,
        name: "Replit AI",
        category: "coding",
        icon: "fas fa-laptop-code",
        iconColor: "#f26207",
        description: "AI coding assistant in the browser-based Replit IDE.",
        whatItDoes: "Generates code, explains errors, and helps build projects in an online development environment.",
        howItWorks: "Fine-tuned code generation model integrated directly into the collaborative online IDE and compiler.",
        studentUse: "Web development projects, collaborative coding, learning new frameworks, and instant deployment."
    },
    {
        id: 9,
        name: "Codeium",
        category: "coding",
        icon: "fas fa-robot",
        iconColor: "#6666ff",
        description: "Free AI-powered code acceleration toolkit.",
        whatItDoes: "Provides intelligent code completions, chat assistance, and natural language to code translation.",
        howItWorks: "Proprietary LLM trained specifically on code with context-aware suggestions across 70+ programming languages.",
        studentUse: "Competitive programming, learning new languages, project development, and understanding algorithms."
    },
    {
        id: 10,
        name: "Tabnine",
        category: "coding",
        icon: "fas fa-keyboard",
        iconColor: "#00b894",
        description: "AI code completion that works locally for privacy.",
        whatItDoes: "Predicts and suggests the next lines of code based on your coding patterns and project context.",
        howItWorks: "Deep learning model trained on open-source code with optional local processing for privacy-sensitive work.",
        studentUse: "Academic coding projects, research code, privacy-sensitive assignments, and personalized suggestions."
    },
    {
        id: 11,
        name: "Cursor AI",
        category: "coding",
        icon: "fas fa-mouse-pointer",
        iconColor: "#0066cc",
        description: "AI-first code editor with built-in assistant.",
        whatItDoes: "Understands your entire codebase, answers questions about it, and helps refactor and debug.",
        howItWorks: "Editor built around AI with deep integration for codebase analysis, editing, and generation.",
        studentUse: "Large project management, code refactoring, understanding complex codebases, and team projects."
    },
    {
        id: 12,
        name: "Midjourney",
        category: "design",
        icon: "fas fa-palette",
        iconColor: "#1e1e1e",
        description: "AI image generator creating art from text descriptions.",
        whatItDoes: "Generates stunning, artistic images from text prompts with various styles and parameters.",
        howItWorks: "Diffusion model trained on millions of image-text pairs that gradually adds detail to noise based on text guidance.",
        studentUse: "Creative projects, presentation visuals, concept art, design portfolios, and artistic exploration."
    },
    {
        id: 13,
        name: "DALL·E",
        category: "design",
        icon: "fas fa-paint-brush",
        iconColor: "#000000",
        description: "OpenAI's AI system creating realistic images from text.",
        whatItDoes: "Generates detailed, coherent images from textual descriptions with realistic and artistic variations.",
        howItWorks: "CLIP + diffusion model that understands text-image relationships and generates pixels accordingly.",
        studentUse: "Educational visuals, project illustrations, creative writing accompaniments, and design mockups."
    },
    {
        id: 14,
        name: "Leonardo AI",
        category: "design",
        icon: "fas fa-chess-knight",
        iconColor: "#7b3fe4",
        description: "AI image generation with fine-grained control.",
        whatItDoes: "Creates images with control over style, elements, and composition using advanced models and tools.",
        howItWorks: "Multiple specialized diffusion models with control nets for pose, depth, and style conditioning.",
        studentUse: "Game asset creation, character design, consistent branding elements, and artistic experimentation."
    },
    {
        id: 15,
        name: "Canva AI",
        category: "design",
        icon: "fab fa-canva",
        iconColor: "#00c4cc",
        description: "AI design tools within Canva's graphic design platform.",
        whatItDoes: "Magic design, background removal, text-to-image, and design suggestions for presentations and graphics.",
        howItWorks: "Computer vision and generative AI integrated into Canva's drag-and-drop design interface.",
        studentUse: "Presentation design, social media graphics, posters, infographics, and visual assignments."
    },
    {
        id: 16,
        name: "Adobe Firefly",
        category: "design",
        icon: "fas fa-fire",
        iconColor: "#ff0000",
        description: "Creative generative AI from Adobe for images and text.",
        whatItDoes: "Text-to-image generation, generative fill, recolor vectors, and text effects within Adobe's ecosystem.",
        howItWorks: "Trained on Adobe Stock and public domain content with ethical considerations for commercial use.",
        studentUse: "Photo editing, digital art, design projects, marketing materials, and creative assignments."
    },
    {
        id: 17,
        name: "Pictory",
        category: "video",
        icon: "fas fa-video",
        iconColor: "#3d8bfd",
        description: "AI video creation from text, articles, or scripts.",
        whatItDoes: "Turns blog posts, scripts, or text into engaging videos with voiceovers, footage, and captions.",
        howItWorks: "Natural language processing to extract key points combined with stock media matching and text-to-speech.",
        studentUse: "Video presentations, summarizing research, creating educational content, and digital storytelling."
    },
    {
        id: 18,
        name: "Synthesia",
        category: "video",
        icon: "fas fa-user-tie",
        iconColor: "#0b0b45",
        description: "Create AI-generated videos with virtual presenters.",
        whatItDoes: "Generates professional videos with AI avatars speaking your script in 120+ languages.",
        howItWorks: "Deep learning models for lip-syncing, facial expressions, and voice synthesis from text input.",
        studentUse: "Language learning videos, presentation recordings, accessibility content, and virtual presentations."
    },
    {
        id: 19,
        name: "ElevenLabs",
        category: "video",
        icon: "fas fa-volume-up",
        iconColor: "#00b894",
        description: "AI voice generator and text-to-speech platform.",
        whatItDoes: "Creates natural-sounding speech in multiple languages and voices from text with emotion control.",
        howItWorks: "Deep learning models trained on human speech with prosody and emotion modeling for natural delivery.",
        studentUse: "Audiobook creation, podcast production, language pronunciation, accessibility tools, and voiceovers."
    },
    {
        id: 20,
        name: "Descript",
        category: "video",
        icon: "fas fa-wave-square",
        iconColor: "#2e5bff",
        description: "Edit audio and video by editing text transcripts.",
        whatItDoes: "Transcribes media, allows editing by editing text, and offers AI voices for overdubbing.",
        howItWorks: "Speech-to-text alignment with waveform editing interface and voice cloning for seamless edits.",
        studentUse: "Podcast editing, lecture recording cleanup, video project editing, and transcription assignments."
    },
    {
        id: 21,
        name: "Tome AI",
        category: "productivity",
        icon: "fas fa-book-open",
        iconColor: "#6666ff",
        description: "AI-powered storytelling and presentation format.",
        whatItDoes: "Generates entire presentations, narratives, or stories from a prompt with visuals and structure.",
        howItWorks: "LLM that structures narratives combined with image generation and layout algorithms for cohesive outputs.",
        studentUse: "Presentation creation, storytelling assignments, project proposals, and visual reports."
    },
    {
        id: 22,
        name: "Gamma AI",
        category: "productivity",
        icon: "fas fa-bolt",
        iconColor: "#6c5ce7",
        description: "Create presentations, documents, and webpages with AI.",
        whatItDoes: "Generates beautifully designed content with AI assistance for layout, text, and images.",
        howItWorks: "Design-aware AI that understands content structure and applies appropriate visual treatments automatically.",
        studentUse: "Quick presentation design, report formatting, webpage creation, and visual project documentation."
    },
    {
        id: 23,
        name: "Otter AI",
        category: "productivity",
        icon: "fas fa-otter",
        iconColor: "#1e88e5",
        description: "AI meeting assistant that records audio and takes notes.",
        whatItDoes: "Transcribes meetings in real-time, identifies speakers, and generates summaries with action items.",
        howItWorks: "Automatic speech recognition with speaker diarization and natural language processing for summarization.",
        studentUse: "Lecture recording and transcription, study group meetings, interview transcription, and note-taking."
    },
    {
        id: 24,
        name: "Perplexity AI",
        category: "productivity",
        icon: "fas fa-search",
        iconColor: "#000000",
        description: "Conversational search engine with cited answers.",
        whatItDoes: "Answers questions with up-to-date information and provides sources like a research assistant.",
        howItWorks: "LLM combined with real-time web search and source citation for accurate, verifiable information.",
        studentUse: "Research projects, fact-checking, source finding, literature reviews, and quick information lookup."
    },
    {
        id: 25,
        name: "Wolfram Alpha",
        category: "productivity",
        icon: "fas fa-square-root-alt",
        iconColor: "#dd1100",
        description: "Computational intelligence engine for factual answers.",
        whatItDoes: "Computes answers and generates reports from structured data across mathematics, science, and more.",
        howItWorks: "Curated knowledge base with computational algorithms and natural language understanding for precise answers.",
        studentUse: "Math problem solving, physics calculations, chemistry equations, data analysis, and statistical work."
    },
    {
        id: 26,
        name: "Khanmigo",
        category: "advanced",
        icon: "fas fa-graduation-cap",
        iconColor: "#14bf96",
        description: "AI tutor from Khan Academy for personalized learning.",
        whatItDoes: "Acts as a personal tutor, guiding students through problems rather than giving direct answers.",
        howItWorks: "Pedagogically-aligned LLM that asks Socratic questions and adapts to student's learning pace and style.",
        studentUse: "Homework help, concept mastery, test preparation, and personalized learning paths across subjects."
    },
    {
        id: 27,
        name: "Socratic by Google",
        category: "advanced",
        icon: "fas fa-question-circle",
        iconColor: "#4285f4",
        description: "AI homework helper using phone camera to solve problems.",
        whatItDoes: "Answers questions by taking photos of homework problems and provides step-by-step explanations.",
        howItWorks: "Computer vision to read problems combined with subject-specific solvers and explanatory content.",
        studentUse: "Math problem solving, science homework, reading comprehension, and step-by-step learning."
    },
    {
        id: 28,
        name: "Brainly AI",
        category: "advanced",
        icon: "fas fa-lightbulb",
        iconColor: "#00aaff",
        description: "AI-powered Q&A platform for homework and studying.",
        whatItDoes: "Provides answers to academic questions with explanations and connects with a community of learners.",
        howItWorks: "Combines AI-generated answers with verified community responses and expert explanations.",
        studentUse: "Homework questions, study help, peer learning, exam preparation, and subject-specific queries."
    },
    {
        id: 29,
        name: "HuggingFace Spaces",
        category: "advanced",
        icon: "fas fa-h-square",
        iconColor: "#ffd21e",
        description: "Platform to discover, demo, and deploy AI models.",
        whatItDoes: "Hosts thousands of AI models that you can try instantly in your browser without coding.",
        howItWorks: "Containerized deployment of open-source AI models with Gradio or Streamlit interfaces for easy access.",
        studentUse: "Experimenting with state-of-the-art AI models, research prototyping, comparing algorithms, and learning ML."
    },
    {
        id: 30,
        name: "AutoGPT",
        category: "advanced",
        icon: "fas fa-cogs",
        iconColor: "#00d4aa",
        description: "Experimental AI that attempts autonomous goal completion.",
        whatItDoes: "Breaks down complex goals into subtasks, uses the internet, and iterates toward completion.",
        howItWorks: "LLM with recursive self-prompting, memory, and tool usage (web search, file operations, code execution).",
        studentUse: "Complex project planning, research automation, data gathering, and understanding autonomous AI systems."
    }
];

// DOM Elements
const toolsContainer = document.getElementById('tools-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const statNumbers = document.querySelectorAll('.stat-number');

// Pagination variables
let currentTools = [];
let currentCategory = 'all';
let currentSearch = '';
let currentPage = 1;
const toolsPerPage = 6;
let showMoreBtn = null;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize current tools
    currentTools = [...aiTools];
    
    // Render initial tools with show more button
    renderToolsWithPagination();
    
    // Create and append show more button
    createShowMoreButton();
    
    // Initialize stats counter animation
    initStatsCounter();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Set up event listeners
    setupEventListeners();
});

// Create Show More button
function createShowMoreButton() {
    showMoreBtn = document.createElement('button');
    showMoreBtn.id = 'show-more-btn';
    showMoreBtn.className = 'btn btn-secondary';
    showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More AI Tools';
    showMoreBtn.style.margin = '40px auto 0';
    showMoreBtn.style.display = 'block';
    
    showMoreBtn.addEventListener('click', function() {
        loadMoreTools();
    });
    
    // Append button after tools container
    toolsContainer.parentNode.insertBefore(showMoreBtn, toolsContainer.nextSibling);
    
    // Initially hide if all tools are shown
    updateShowMoreButton();
}

// Render tools with pagination
function renderToolsWithPagination() {
    // Calculate start and end indices
    const startIndex = 0;
    const endIndex = currentPage * toolsPerPage;
    const toolsToShow = currentTools.slice(startIndex, endIndex);
    
    // Clear container
    toolsContainer.innerHTML = '';
    
    // Render tools with staggered animation
    toolsToShow.forEach((tool, index) => {
        const toolCard = createToolCard(tool);
        toolsContainer.appendChild(toolCard);
        
        // Add staggered animation
        setTimeout(() => {
            toolCard.classList.add('visible');
        }, index * 100);
    });
    
    // Update show more button visibility
    updateShowMoreButton();
}

// Load more tools
function loadMoreTools() {
    // Show loading state
    showMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    showMoreBtn.disabled = true;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        currentPage++;
        
        // Calculate tools to add
        const startIndex = (currentPage - 1) * toolsPerPage;
        const endIndex = currentPage * toolsPerPage;
        const toolsToAdd = currentTools.slice(startIndex, endIndex);
        
        // Add new tools with animation
        toolsToAdd.forEach((tool, index) => {
            const toolCard = createToolCard(tool);
            toolsContainer.appendChild(toolCard);
            
            // Animate new cards
            setTimeout(() => {
                toolCard.classList.add('visible');
            }, index * 100);
        });
        
        // Update button
        updateShowMoreButton();
        
        // Scroll to newly added tools
        const lastCard = toolsContainer.lastElementChild;
        if (lastCard) {
            lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 800);
}

// Update show more button visibility
function updateShowMoreButton() {
    if (!showMoreBtn) return;
    
    const totalTools = currentTools.length;
    const shownTools = currentPage * toolsPerPage;
    
    if (shownTools >= totalTools) {
        showMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Tools Loaded';
        showMoreBtn.disabled = true;
        showMoreBtn.style.opacity = '0.7';
        
        // Hide button after 3 seconds
        setTimeout(() => {
            showMoreBtn.style.display = 'none';
        }, 3000);
    } else {
        showMoreBtn.innerHTML = `<i class="fas fa-chevron-down"></i> Show More (${totalTools - shownTools} remaining)`;
        showMoreBtn.disabled = false;
        showMoreBtn.style.display = 'block';
        showMoreBtn.style.opacity = '1';
    }
}

// Create individual tool card with enhanced design
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = `tool-card ${tool.category} hidden`;
    card.dataset.category = tool.category;
    card.dataset.id = tool.id;
    
    // Add popular badge for top tools
    const isPopular = tool.id <= 5;
    
    card.innerHTML = `
        ${isPopular ? '<div class="popular-badge"><i class="fas fa-fire"></i> Most Popular</div>' : ''}
        <div class="tool-header">
            <div class="tool-icon" style="background: linear-gradient(135deg, ${tool.iconColor}20, ${tool.iconColor})">
                <i class="${tool.icon}" style="color: ${tool.iconColor}"></i>
            </div>
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <span class="tool-category category-${tool.category}">${getCategoryName(tool.category)}</span>
                <div class="tool-rating">
                    ${generateStarRating(tool.id)}
                </div>
            </div>
        </div>
        <div class="tool-body">
            <p class="tool-description">${tool.description}</p>
            <div class="tool-features">
                <span class="feature-tag"><i class="fas fa-bolt"></i> Fast</span>
                <span class="feature-tag"><i class="fas fa-graduation-cap"></i> Student-friendly</span>
                <span class="feature-tag"><i class="fas fa-rocket"></i> Powerful</span>
            </div>
            <div class="tool-section">
                <h4><i class="fas fa-question-circle"></i> What it does</h4>
                <p>${tool.whatItDoes}</p>
            </div>
            <div class="tool-section">
                <h4><i class="fas fa-cogs"></i> How it works</h4>
                <p>${tool.howItWorks}</p>
            </div>
            <div class="tool-section">
                <h4><i class="fas fa-user-graduate"></i> Student applications</h4>
                <p>${tool.studentUse}</p>
            </div>
        </div>
        <div class="tool-footer">
            <div class="tool-actions">
                <a href="#" class="btn btn-primary try-tool-btn" data-id="${tool.id}">
                    <i class="fas fa-play-circle"></i> Try Demo
                </a>
                <a href="#" class="btn btn-outline save-tool-btn" data-id="${tool.id}">
                    <i class="far fa-bookmark"></i> Save
                </a>
            </div>
            <div class="tool-meta">
                <span class="meta-item"><i class="fas fa-clock"></i> ${getLearningTime(tool.id)} min</span>
                <span class="meta-item"><i class="fas fa-chart-line"></i> ${getDifficultyLevel(tool.id)}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Generate star rating based on tool ID
function generateStarRating(id) {
    const baseRating = 4 + (id % 3) * 0.5; // Ratings between 4.0 and 5.0
    const stars = Math.floor(baseRating);
    const hasHalf = baseRating % 1 >= 0.5;
    
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === stars + 1 && hasHalf) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return `${starsHTML} <span class="rating-text">${baseRating.toFixed(1)}</span>`;
}

// Get learning time based on tool ID
function getLearningTime(id) {
    const times = [15, 20, 25, 30, 45, 60];
    return times[id % times.length];
}

// Get difficulty level based on tool ID
function getDifficultyLevel(id) {
    if (id <= 10) return 'Beginner';
    if (id <= 20) return 'Intermediate';
    return 'Advanced';
}

// Get readable category name
function getCategoryName(category) {
    const categoryNames = {
        'writing': 'Writing & Study',
        'coding': 'Coding & Dev',
        'design': 'Design & Media',
        'video': 'Video & Audio',
        'productivity': 'Productivity & Research',
        'advanced': 'Student & Advanced'
    };
    
    return categoryNames[category] || category;
}

// Filter tools by category
function filterTools(category) {
    currentCategory = category;
    currentPage = 1;
    
    if (category === 'all') {
        currentTools = [...aiTools];
    } else {
        currentTools = aiTools.filter(tool => tool.category === category);
    }
    
    // Apply search filter if exists
    if (currentSearch) {
        currentTools = currentTools.filter(tool => 
            tool.name.toLowerCase().includes(currentSearch) ||
            tool.description.toLowerCase().includes(currentSearch) ||
            tool.whatItDoes.toLowerCase().includes(currentSearch) ||
            tool.howItWorks.toLowerCase().includes(currentSearch) ||
            tool.studentUse.toLowerCase().includes(currentSearch)
        );
    }
    
    // Reset and render
    renderToolsWithPagination();
    
    // Show tools count
    showToolsCount();
}

// Search tools
function searchTools(query) {
    currentSearch = query.toLowerCase();
    currentPage = 1;
    
    if (!query.trim()) {
        currentTools = [...aiTools];
    } else {
        currentTools = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(currentSearch) ||
            tool.description.toLowerCase().includes(currentSearch) ||
            tool.whatItDoes.toLowerCase().includes(currentSearch) ||
            tool.howItWorks.toLowerCase().includes(currentSearch) ||
            tool.studentUse.toLowerCase().includes(currentSearch)
        );
    }
    
    // Apply category filter if exists
    if (currentCategory !== 'all') {
        currentTools = currentTools.filter(tool => tool.category === currentCategory);
    }
    
    // Reset and render
    renderToolsWithPagination();
    
    // Show search results count
    showSearchResultsCount(query);
}

// Show tools count after filtering
function showToolsCount() {
    const countElement = document.createElement('div');
    countElement.className = 'tools-count';
    countElement.innerHTML = `
        <div class="count-bubble">
            <i class="fas fa-filter"></i>
            Showing ${Math.min(currentPage * toolsPerPage, currentTools.length)} of ${currentTools.length} tools
            ${currentCategory !== 'all' ? `in ${getCategoryName(currentCategory)}` : ''}
        </div>
    `;
    
    // Remove existing count
    const existingCount = document.querySelector('.tools-count');
    if (existingCount) {
        existingCount.remove();
    }
    
    // Insert after category filters
    const categoriesSection = document.querySelector('.categories .container');
    if (categoriesSection) {
        categoriesSection.appendChild(countElement);
        
        // Animate count
        setTimeout(() => {
            countElement.style.opacity = '1';
            countElement.style.transform = 'translateY(0)';
        }, 10);
    }
}

// Show search results count
function showSearchResultsCount(query) {
    if (!query.trim()) return;
    
    const countElement = document.createElement('div');
    countElement.className = 'search-results-count';
    countElement.innerHTML = `
        <div class="results-bubble">
            <i class="fas fa-search"></i>
            Found ${currentTools.length} result${currentTools.length !== 1 ? 's' : ''} for "${query}"
        </div>
    `;
    
    // Remove existing results count
    const existingCount = document.querySelector('.search-results-count');
    if (existingCount) {
        existingCount.remove();
    }
    
    // Insert after search input
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && searchContainer.parentElement) {
        searchContainer.parentElement.appendChild(countElement);
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (countElement.parentElement) {
                countElement.style.opacity = '0';
                countElement.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (countElement.parentElement) {
                        countElement.remove();
                    }
                }, 300);
            }
        }, 3000);
    }
}

// Initialize stats counter animation
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseFloat(stat.getAttribute('data-count'));
                    const duration = 1500;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            stat.textContent = 
                                stat.getAttribute('data-count').includes('.') 
                                ? current.toFixed(1) 
                                : Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = stat.getAttribute('data-count');
                        }
                    };
                    
                    requestAnimationFrame(updateCounter);
                });
                
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.stats'));
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add special animation for cards
                if (entry.target.classList.contains('tool-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe tool cards
    document.querySelectorAll('.tool-card').forEach(card => {
        observer.observe(card);
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter tools
            const category = this.getAttribute('data-category');
            filterTools(category);
            
            // Scroll to tools section if not already visible
            if (!isElementInViewport(document.getElementById('ai-tools'))) {
                document.getElementById('ai-tools').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', function() {
        searchTools(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchTools(searchInput.value);
        }
    });
    
    // Real-time search as user types
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchTools(searchInput.value);
        }, 500);
    });
    
    // Tool button interactions
    document.addEventListener('click', function(e) {
        // Try Tool button
        if (e.target.classList.contains('try-tool-btn') || 
            e.target.closest('.try-tool-btn')) {
            e.preventDefault();
            const toolId = e.target.closest('.try-tool-btn').getAttribute('data-id');
            const tool = aiTools.find(t => t.id == toolId);
            
            // Show demo modal
            showToolDemo(tool);
        }
        
        // Save Tool button
        if (e.target.classList.contains('save-tool-btn') || 
            e.target.closest('.save-tool-btn')) {
            e.preventDefault();
            const toolId = e.target.closest('.save-tool-btn').getAttribute('data-id');
            const tool = aiTools.find(t => t.id == toolId);
            const btn = e.target.closest('.save-tool-btn');
            
            // Toggle save state
            btn.classList.toggle('saved');
            btn.innerHTML = btn.classList.contains('saved') 
                ? '<i class="fas fa-bookmark"></i> Saved' 
                : '<i class="far fa-bookmark"></i> Save';
            
            // Show notification
            showNotification(
                btn.classList.contains('saved') 
                    ? `Added ${tool.name} to your saved tools`
                    : `Removed ${tool.name} from saved tools`
            );
        }
        
        // Tool card click (excluding buttons)
        if (e.target.closest('.tool-card') && 
            !e.target.closest('.try-tool-btn') && 
            !e.target.closest('.save-tool-btn') &&
            !e.target.closest('.learn-more-btn')) {
            const card = e.target.closest('.tool-card');
            const toolId = card.dataset.id;
            const tool = aiTools.find(t => t.id == toolId);
            
            // Show tool details
            showToolDetails(tool);
        }
    });
    
    // Footer category links
    document.querySelectorAll('.footer-col a[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.filter-btn[data-category="${category}"]`).classList.add('active');
            
            // Filter tools
            filterTools(category);
            
            // Scroll to tools section
            document.getElementById('ai-tools').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Mobile hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Show tool demo modal
function showToolDemo(tool) {
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="${tool.icon}" style="color: ${tool.iconColor}"></i> ${tool.name} Demo</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <div class="demo-placeholder">
                    <div class="demo-animation">
                        <i class="fas fa-robot"></i>
                        <div class="pulse"></div>
                    </div>
                    <p>Launching interactive demo of ${tool.name}...</p>
                </div>
                <div class="demo-info">
                    <h4><i class="fas fa-info-circle"></i> About this demo</h4>
                    <p>This is a simulated demo showing how ${tool.name} works. In a real implementation, you would be able to interact with the actual AI tool interface.</p>
                    <div class="demo-stats">
                        <div class="demo-stat">
                            <i class="fas fa-clock"></i>
                            <span>Estimated learning time: ${getLearningTime(tool.id)} minutes</span>
                        </div>
                        <div class="demo-stat">
                            <i class="fas fa-chart-line"></i>
                            <span>Difficulty: ${getDifficultyLevel(tool.id)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline close-modal">Close</button>
                <a href="#" class="btn btn-primary">View Full Tutorial</a>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close modal handlers
    modal.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => {
                if (modal.parentElement) {
                    modal.remove();
                }
            }, 300);
        });
    });
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                if (modal.parentElement) {
                    modal.remove();
                }
            }, 300);
        }
    });
}

// Show tool details view
function showToolDetails(tool) {
    // Create a detail view overlay
    const detailView = document.createElement('div');
    detailView.className = 'tool-detail-view';
    detailView.innerHTML = `
        <div class="detail-content">
            <button class="close-detail">&times;</button>
            <div class="detail-header">
                <div class="detail-icon" style="background-color: ${tool.iconColor}">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="detail-title">
                    <h2>${tool.name}</h2>
                    <span class="detail-category category-${tool.category}">${getCategoryName(tool.category)}</span>
                    <div class="detail-rating">
                        ${generateStarRating(tool.id)}
                        <span class="rating-count">(${Math.floor(Math.random() * 1000) + 100} reviews)</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-body">
                <div class="detail-section">
                    <h3><i class="fas fa-info-circle"></i> Overview</h3>
                    <p>${tool.description}</p>
                </div>
                
                <div class="detail-columns">
                    <div class="detail-column">
                        <h3><i class="fas fa-bullseye"></i> What it does</h3>
                        <p>${tool.whatItDoes}</p>
                    </div>
                    <div class="detail-column">
                        <h3><i class="fas fa-cogs"></i> How it works</h3>
                        <p>${tool.howItWorks}</p>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-user-graduate"></i> Student Applications</h3>
                    <div class="applications-grid">
                        ${tool.studentUse.split(', ').map(use => `
                            <div class="application-card">
                                <i class="fas fa-check-circle"></i>
                                <span>${use}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-graduation-cap"></i> Learning Path</h3>
                    <div class="learning-path">
                        <div class="path-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>Basic Usage</h4>
                                <p>Learn the interface and basic features</p>
                                <span class="step-time">${getLearningTime(tool.id)/3} min</span>
                            </div>
                        </div>
                        <div class="path-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>Advanced Features</h4>
                                <p>Master advanced tools and customization</p>
                                <span class="step-time">${getLearningTime(tool.id)/3} min</span>
                            </div>
                        </div>
                        <div class="path-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>Real Projects</h4>
                                <p>Apply to academic and personal projects</p>
                                <span class="step-time">${getLearningTime(tool.id)/3} min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="detail-footer">
                <button class="btn btn-outline close-detail">Back to Tools</button>
                <button class="btn btn-primary start-learning-btn" data-id="${tool.id}">
                    <i class="fas fa-play"></i> Start Learning Path
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(detailView);
    
    // Animate in
    setTimeout(() => {
        detailView.classList.add('active');
    }, 10);
    
    // Close handlers
    detailView.querySelectorAll('.close-detail').forEach(btn => {
        btn.addEventListener('click', () => {
            detailView.classList.remove('active');
            setTimeout(() => {
                if (detailView.parentElement) {
                    detailView.remove();
                }
            }, 300);
        });
    });
    
    // Start learning button
    detailView.querySelector('.start-learning-btn').addEventListener('click', () => {
        showNotification(`Starting learning path for ${tool.name}`);
        detailView.classList.remove('active');
        setTimeout(() => {
            if (detailView.parentElement) {
                detailView.remove();
            }
        }, 300);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Utility function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add CSS for new components
const additionalStyles = `
    /* Show More Button */
    #show-more-btn {
        padding: 15px 40px;
        font-size: 1.1rem;
        border-radius: 50px;
        transition: all 0.3s ease;
        border: 2px solid var(--primary);
        background: transparent;
        color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 40px auto;
        position: relative;
        overflow: hidden;
    }
    
    #show-more-btn:hover {
        background: var(--primary);
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(67, 97, 238, 0.3);
    }
    
    #show-more-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none !important;
    }
    
    /* Tool Card Enhancements */
    .tool-card.hidden {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .tool-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .popular-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: linear-gradient(135deg, #ff6b6b, #ff8e53);
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 5px;
        z-index: 2;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .tool-rating {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 5px;
    }
    
    .tool-rating i {
        color: #ffc107;
        font-size: 0.9rem;
    }
    
    .rating-text {
        font-weight: 600;
        color: var(--dark);
        margin-left: 5px;
    }
    
    .tool-features {
        display: flex;
        gap: 8px;
        margin: 15px 0;
        flex-wrap: wrap;
    }
    
    .feature-tag {
        background: var(--light-gray);
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        color: var(--dark-gray);
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .tool-actions {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    
    .btn-outline {
        background: transparent;
        border: 1px solid var(--primary);
        color: var(--primary);
        padding: 8px 16px;
        border-radius: var(--border-radius-sm);
        text-decoration: none;
        transition: var(--transition);
    }
    
    .btn-outline:hover {
        background: var(--primary);
        color: white;
    }
    
    .btn-outline.saved {
        background: var(--primary);
        color: white;
    }
    
    .tool-meta {
        display: flex;
        gap: 15px;
        margin-top: 15px;
        font-size: 0.9rem;
        color: var(--gray);
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    /* Tools Count */
    .tools-count {
        text-align: center;
        margin: 20px 0;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
    }
    
    .count-bubble {
        display: inline-block;
        background: var(--primary);
        color: white;
        padding: 10px 20px;
        border-radius: 50px;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    /* Search Results Count */
    .search-results-count {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        text-align: center;
        margin-top: 10px;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        z-index: 100;
    }
    
    .results-bubble {
        display: inline-block;
        background: var(--dark);
        color: white;
        padding: 8px 16px;
        border-radius: var(--border-radius-sm);
        font-size: 0.9rem;
        box-shadow: var(--card-shadow);
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    /* Demo Modal */
    .demo-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .demo-modal.active {
        opacity: 1;
    }
    
    .modal-content {
        background: white;
        border-radius: var(--border-radius);
        width: 90%;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
        transform: translateY(20px);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    .demo-modal.active .modal-content {
        transform: translateY(0);
    }
    
    .modal-header {
        padding: 20px;
        border-bottom: 1px solid var(--light-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-header h3 {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .close-modal {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--gray);
        transition: var(--transition);
    }
    
    .close-modal:hover {
        color: var(--dark);
    }
    
    .modal-body {
        padding: 20px;
    }
    
    .demo-placeholder {
        text-align: center;
        padding: 40px 20px;
        background: linear-gradient(135deg, #f5f7ff, #eef1ff);
        border-radius: var(--border-radius-sm);
        margin-bottom: 20px;
    }
    
    .demo-animation {
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
    }
    
    .demo-animation i {
        font-size: 4rem;
        color: var(--primary);
    }
    
    .pulse {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: var(--primary);
        animation: pulse-ring 2s infinite;
        opacity: 0.3;
    }
    
    @keyframes pulse-ring {
        0% { transform: scale(0.8); opacity: 0.3; }
        50% { transform: scale(1.2); opacity: 0.1; }
        100% { transform: scale(0.8); opacity: 0.3; }
    }
    
    .demo-info {
        background: var(--light);
        padding: 20px;
        border-radius: var(--border-radius-sm);
    }
    
    .demo-stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 15px;
    }
    
    .demo-stat {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background: white;
        border-radius: var(--border-radius-sm);
    }
    
    .modal-footer {
        padding: 20px;
        border-top: 1px solid var(--light-gray);
        display: flex;
        justify-content: flex-end;
        gap: 15px;
    }
    
    /* Tool Detail View */
    .tool-detail-view {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 2000;
        overflow-y: auto;
        transform: translateX(100%);
        transition: transform 0.4s ease;
    }
    
    .tool-detail-view.active {
        transform: translateX(0);
    }
    
    .detail-content {
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    
    .close-detail {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2001;
    }
    
    .detail-header {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 40px;
    }
    
    .detail-icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        color: white;
        flex-shrink: 0;
    }
    
    .detail-title h2 {
        font-size: 2.5rem;
        margin-bottom: 10px;
    }
    
    .detail-category {
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .detail-rating {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
    
    .rating-count {
        color: var(--gray);
        font-size: 0.9rem;
    }
    
    .detail-body {
        margin: 40px 0;
    }
    
    .detail-section {
        margin-bottom: 40px;
    }
    
    .detail-section h3 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--dark);
    }
    
    .detail-columns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        margin: 30px 0;
    }
    
    .applications-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }
    
    .application-card {
        background: var(--light);
        padding: 15px;
        border-radius: var(--border-radius-sm);
        display: flex;
        align-items: center;
        gap: 10px;
        transition: var(--transition);
    }
    
    .application-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--card-shadow);
    }
    
    .application-card i {
        color: var(--primary);
        font-size: 1.2rem;
    }
    
    .learning-path {
        background: linear-gradient(135deg, #f5f7ff, #eef1ff);
        border-radius: var(--border-radius);
        padding: 30px;
        margin-top: 20px;
    }
    
    .path-step {
        display: flex;
        gap: 20px;
        margin-bottom: 25px;
        position: relative;
    }
    
    .path-step:not(:last-child):after {
        content: '';
        position: absolute;
        top: 40px;
        left: 20px;
        width: 2px;
        height: calc(100% + 5px);
        background: var(--primary);
        opacity: 0.3;
    }
    
    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        flex-shrink: 0;
        z-index: 1;
    }
    
    .step-content {
        flex: 1;
    }
    
    .step-content h4 {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
    
    .step-time {
        display: inline-block;
        background: white;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.9rem;
        color: var(--primary);
        margin-top: 10px;
    }
    
    .detail-footer {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        border-top: 1px solid var(--light-gray);
    }
    
    /* Notification */
    .notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--primary);
        color: white;
        padding: 15px 25px;
        border-radius: var(--border-radius-sm);
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 3000;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .detail-columns {
            grid-template-columns: 1fr;
        }
        
        .detail-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
        }
        
        .detail-footer {
            flex-direction: column;
            gap: 15px;
        }
        
        .detail-footer button {
            width: 100%;
        }
        
        .applications-grid {
            grid-template-columns: 1fr;
        }
        
        .modal-footer {
            flex-direction: column;
        }
        
        .modal-footer button {
            width: 100%;
        }
        
        .tool-actions {
            flex-direction: column;
            width: 100%;
        }
        
        .tool-actions a {
            width: 100%;
            text-align: center;
        }
    }
`;

// Add the additional styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
