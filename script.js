// main.js
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

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Render all AI tools
    renderTools(aiTools);
    
    // Initialize stats counter animation
    initStatsCounter();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Set up event listeners
    setupEventListeners();
});

// Render AI tool cards
function renderTools(tools) {
    toolsContainer.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsContainer.appendChild(toolCard);
        
        // Add animation class after a delay for staggered effect
        setTimeout(() => {
            toolCard.classList.add('visible');
        }, tool.id * 50);
    });
}

// Create individual tool card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = `tool-card ${tool.category}`;
    card.dataset.category = tool.category;
    
    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-icon" style="background-color: ${tool.iconColor}">
                <i class="${tool.icon}"></i>
            </div>
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <span class="tool-category category-${tool.category}">${getCategoryName(tool.category)}</span>
            </div>
        </div>
        <div class="tool-body">
            <p class="tool-description">${tool.description}</p>
            <div class="tool-section">
                <h4><i class="fas fa-question-circle"></i> What it does</h4>
                <p>${tool.whatItDoes}</p>
            </div>
            <div class="tool-section">
                <h4><i class="fas fa-cogs"></i> How it works</h4>
                <p>${tool.howItWorks}</p>
            </div>
            <div class="tool-section">
                <h4><i class="fas fa-user-graduate"></i> How students use it</h4>
                <p>${tool.studentUse}</p>
            </div>
        </div>
        <div class="tool-footer">
            <a href="#" class="btn btn-primary try-tool-btn" data-id="${tool.id}">
                <i class="fas fa-play-circle"></i> Try Tool
            </a>
            <a href="#" class="learn-more-btn" data-id="${tool.id}">
                Learn More <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return card;
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
    if (category === 'all') {
        renderTools(aiTools);
        return;
    }
    
    const filteredTools = aiTools.filter(tool => tool.category === category);
    renderTools(filteredTools);
}

// Search tools by name or description
function searchTools(query) {
    if (!query.trim()) {
        renderTools(aiTools);
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const filteredTools = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.whatItDoes.toLowerCase().includes(searchTerm) ||
        tool.howItWorks.toLowerCase().includes(searchTerm) ||
        tool.studentUse.toLowerCase().includes(searchTerm)
    );
    
    renderTools(filteredTools);
}

// Initialize stats counter animation
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    const increment = target / 100;
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            stat.textContent = 
                                stat.getAttribute('data-count').includes('.') 
                                ? current.toFixed(1) 
                                : Math.floor(current);
                            setTimeout(updateCounter, 20);
                        } else {
                            stat.textContent = stat.getAttribute('data-count');
                        }
                    };
                    
                    updateCounter();
                });
                
                // Stop observing after animation
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
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
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
                document.getElementById('ai-tools').scrollIntoView({ behavior: 'smooth' });
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
        }, 300);
    });
    
    // Try Tool button click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('try-tool-btn') || 
            e.target.closest('.try-tool-btn')) {
            e.preventDefault();
            const toolId = e.target.closest('.try-tool-btn').getAttribute('data-id');
            const tool = aiTools.find(t => t.id == toolId);
            alert(`Launching ${tool.name} demo...\n\nThis would redirect to the actual tool in a production environment. For now, explore the tool details to learn how it works!`);
        }
        
        // Learn More button click
        if (e.target.classList.contains('learn-more-btn') || 
            e.target.closest('.learn-more-btn')) {
            e.preventDefault();
            const toolId = e.target.closest('.learn-more-btn').getAttribute('data-id');
            const tool = aiTools.find(t => t.id == toolId);
            
            // Show detailed modal (simplified for this demo)
            alert(`Detailed Information: ${tool.name}\n\nCategory: ${getCategoryName(tool.category)}\n\nWhat it does:\n${tool.whatItDoes}\n\nHow it works:\n${tool.howItWorks}\n\nStudent use cases:\n${tool.studentUse}`);
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

// Add some dynamic styling to cards on hover
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.tool-card')) {
            const card = e.target.closest('.tool-card');
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.tool-card')) {
            const card = e.target.closest('.tool-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});
