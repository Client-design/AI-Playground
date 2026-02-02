// Neural Network Animation
function initAIAnimation() {
    const canvas = document.getElementById('neuralCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, 0.8)`;
            this.glowIntensity = Math.random() * 0.5 + 0.5;
            this.pulseSpeed = Math.random() * 0.05 + 0.02;
            this.pulseOffset = Math.random() * Math.PI * 2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Boundary check
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
            
            // Mouse interaction
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                this.speedX += (dx / distance) * 0.1;
                this.speedY += (dy / distance) * 0.1;
                this.size = Math.min(this.size + 0.1, 3);
            } else {
                // Slowly return to original size
                this.size = Math.max(this.size - 0.02, 0.5);
            }
            
            // Limit speed
            const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
            if (currentSpeed > 2) {
                this.speedX = (this.speedX / currentSpeed) * 2;
                this.speedY = (this.speedY / currentSpeed) * 2;
            }
            
            // Apply friction
            this.speedX *= 0.99;
            this.speedY *= 0.99;
        }
        
        draw() {
            // Pulsing effect
            const pulse = Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;
            const currentSize = this.size * pulse;
            
            // Glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize * 3, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, currentSize * 3
            );
            gradient.addColorStop(0, this.color.replace('0.8', '0.3'));
            gradient.addColorStop(1, this.color.replace('0.8', '0'));
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Particle core
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Inner bright core
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fill();
        }
    }
    
    // Connection line class
    class Connection {
        constructor(particle1, particle2) {
            this.p1 = particle1;
            this.p2 = particle2;
            this.length = Math.sqrt(
                Math.pow(this.p2.x - this.p1.x, 2) + 
                Math.pow(this.p2.y - this.p1.y, 2)
            );
            this.active = false;
            this.opacity = 0;
        }
        
        update() {
            const dx = this.p2.x - this.p1.x;
            const dy = this.p2.y - this.p1.y;
            const currentDistance = Math.sqrt(dx * dx + dy * dy);
            
            // Activate connection if particles are close enough
            if (currentDistance < 150) {
                this.active = true;
                this.opacity = Math.min(this.opacity + 0.05, 0.5 * (1 - currentDistance / 150));
            } else {
                this.active = false;
                this.opacity = Math.max(this.opacity - 0.02, 0);
            }
        }
        
        draw() {
            if (!this.active || this.opacity < 0.1) return;
            
            // Create gradient for the connection line
            const gradient = ctx.createLinearGradient(
                this.p1.x, this.p1.y,
                this.p2.x, this.p2.y
            );
            
            gradient.addColorStop(0, `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${this.opacity})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${this.opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(this.p1.x, this.p1.y);
            ctx.lineTo(this.p2.x, this.p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Add pulse effect along the connection
            const pulsePos = (Date.now() * 0.002) % 1;
            const pulseX = this.p1.x + (this.p2.x - this.p1.x) * pulsePos;
            const pulseY = this.p1.y + (this.p2.y - this.p1.y) * pulsePos;
            
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Mouse interaction
    const mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 100
    };
    
    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }, { passive: false });
    
    // Create particles
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 60 : 120;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Create connections
    const connections = [];
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            connections.push(new Connection(particles[i], particles[j]));
        }
    }
    
    // Animation loop
    function animate() {
        // Clear with a fade effect for trails
        ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Update and draw connections
        connections.forEach(connection => {
            connection.update();
            connection.draw();
        });
        
        // Add a subtle wave effect to all particles
        const time = Date.now() * 0.001;
        particles.forEach(particle => {
            particle.x += Math.sin(time + particle.y * 0.01) * 0.1;
            particle.y += Math.cos(time + particle.x * 0.01) * 0.1;
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

// AI Tools Data
const aiTools = [
    {
        name: "ChatGPT",
        category: "chat",
        description: "Advanced conversational AI for answering questions, writing, and problem-solving.",
        technical: "Transformer-based language model fine-tuned with reinforcement learning from human feedback.",
        studentUse: "Research assistance, essay writing, coding help, language learning.",
        icon: "fa-comment-dots"
    },
    {
        name: "Claude",
        category: "chat",
        description: "AI assistant focused on helpful, harmless, and honest conversations.",
        technical: "Constitutional AI trained with principles to ensure safe and ethical responses.",
        studentUse: "Brainstorming ideas, editing documents, ethical dilemma analysis.",
        icon: "fa-robot"
    },
    {
        name: "Gemini",
        category: "chat",
        description: "Multimodal AI that understands and generates text, code, images, and more.",
        technical: "Multimodal transformer architecture capable of processing different data types.",
        studentUse: "Multimedia projects, cross-disciplinary research, creative ideation.",
        icon: "fa-gem"
    },
    {
        name: "Quillbot",
        category: "chat",
        description: "AI-powered paraphrasing tool to rewrite and enhance writing.",
        technical: "Advanced NLP algorithms for sentence restructuring while preserving meaning.",
        studentUse: "Paraphrasing research, improving writing style, avoiding plagiarism.",
        icon: "fa-feather-alt"
    },
    {
        name: "Notion AI",
        category: "chat",
        description: "AI writing assistant integrated within Notion workspace.",
        technical: "Custom language model fine-tuned for productivity and organization tasks.",
        studentUse: "Note summarization, project planning, content organization.",
        icon: "fa-sticky-note"
    },
    {
        name: "Grammarly",
        category: "chat",
        description: "AI writing assistant that checks grammar, tone, and clarity.",
        technical: "Rule-based and ML algorithms for grammar checking and style improvement.",
        studentUse: "Proofreading essays, improving writing style, learning grammar rules.",
        icon: "fa-spell-check"
    },
    {
        name: "GitHub Copilot",
        category: "code",
        description: "AI pair programmer that suggests code completions.",
        technical: "Codex model trained on billions of lines of public code.",
        studentUse: "Learning programming, code completion, understanding syntax.",
        icon: "fa-code"
    },
    {
        name: "Replit AI",
        category: "code",
        description: "AI coding assistant within the Replit development environment.",
        technical: "Specialized code generation model with browser-based execution.",
        studentUse: "Learning to code, building projects, debugging assistance.",
        icon: "fa-laptop-code"
    },
    {
        name: "Codeium",
        category: "code",
        description: "Free AI-powered code completion tool for multiple IDEs.",
        technical: "Deep learning model trained on diverse codebases across languages.",
        studentUse: "Free coding assistance, learning new languages, project development.",
        icon: "fa-bolt"
    },
    {
        name: "Tabnine",
        category: "code",
        description: "AI code completion that learns from your coding patterns.",
        technical: "Deep learning model that adapts to individual coding styles.",
        studentUse: "Personalized code suggestions, learning best practices.",
        icon: "fa-keyboard"
    },
    {
        name: "Cursor AI",
        category: "code",
        description: "AI-powered code editor with advanced autocomplete and editing.",
        technical: "Code-specific transformer with editor-native integration.",
        studentUse: "Writing efficient code, refactoring, learning patterns.",
        icon: "fa-mouse-pointer"
    },
    {
        name: "Midjourney",
        category: "image",
        description: "AI image generation from text descriptions.",
        technical: "Diffusion model trained on millions of image-text pairs.",
        studentUse: "Creating illustrations for projects, visual storytelling, design concepts.",
        icon: "fa-palette"
    },
    {
        name: "DALL·E",
        category: "image",
        description: "AI system creating realistic images from text descriptions.",
        technical: "CLIP-guided diffusion model for precise image generation.",
        studentUse: "Visualizing concepts, creating project artwork, design exploration.",
        icon: "fa-image"
    },
    {
        name: "Leonardo",
        category: "image",
        description: "AI image generation with fine control over style and elements.",
        technical: "Customizable diffusion models with specialized training.",
        studentUse: "Creating consistent character designs, thematic artwork.",
        icon: "fa-paint-brush"
    },
    {
        name: "Canva AI",
        category: "image",
        description: "AI design tools integrated within Canva platform.",
        technical: "Multiple AI models for design, layout, and content generation.",
        studentUse: "Creating presentations, social media graphics, design projects.",
        icon: "fa-object-group"
    },
    {
        name: "Adobe Firefly",
        category: "image",
        description: "Creative generative AI integrated into Adobe Creative Cloud.",
        technical: "Ethically trained diffusion models for professional creative work.",
        studentUse: "Photo editing, digital art, graphic design projects.",
        icon: "fa-fire"
    },
    {
        name: "Pictory",
        category: "video",
        description: "AI video creation from scripts, articles, or existing videos.",
        technical: "NLP for script analysis and ML for video assembly.",
        studentUse: "Creating video presentations, summarizing content, video essays.",
        icon: "fa-video"
    },
    {
        name: "Synthesia",
        category: "video",
        description: "Create AI-generated videos with virtual presenters.",
        technical: "Deep learning for realistic avatar synthesis and lip sync.",
        studentUse: "Creating educational videos, presentations with virtual hosts.",
        icon: "fa-user-tie"
    },
    {
        name: "ElevenLabs",
        category: "video",
        description: "AI voice generation and text-to-speech platform.",
        technical: "Deep learning models for realistic voice synthesis.",
        studentUse: "Adding narration to projects, creating audio content, language practice.",
        icon: "fa-microphone"
    },
    {
        name: "Descript",
        category: "video",
        description: "AI-powered video and podcast editing through text editing.",
        technical: "Speech recognition and synthesis for seamless editing.",
        studentUse: "Editing class presentations, creating podcast episodes.",
        icon: "fa-edit"
    },
    {
        name: "Tome AI",
        category: "video",
        description: "AI presentation tool that generates structured narratives.",
        technical: "NLP for content structuring and design automation.",
        studentUse: "Creating presentations quickly, structuring project reports.",
        icon: "fa-columns"
    },
    {
        name: "Gamma AI",
        category: "video",
        description: "AI for creating presentations, documents, and web pages.",
        technical: "Content-aware design algorithms for automatic formatting.",
        studentUse: "Designing project reports, creating study materials.",
        icon: "fa-shapes"
    },
    {
        name: "Otter AI",
        category: "video",
        description: "AI meeting assistant that records audio and writes notes.",
        technical: "Speech recognition with speaker identification and summarization.",
        studentUse: "Recording lectures, meeting notes, interview transcription.",
        icon: "fa-otter"
    },
    {
        name: "Perplexity",
        category: "learning",
        description: "AI search engine with conversational answers and citations.",
        technical: "Retrieval-augmented generation combining search and language models.",
        studentUse: "Research with sources, fact-checking, learning new topics.",
        icon: "fa-search"
    },
    {
        name: "Wolfram Alpha",
        category: "learning",
        description: "Computational knowledge engine for math and science.",
        technical: "Symbolic computation engine with curated knowledge base.",
        studentUse: "Solving math problems, scientific calculations, data analysis.",
        icon: "fa-calculator"
    },
    {
        name: "Khanmigo",
        category: "learning",
        description: "AI tutor by Khan Academy for personalized learning.",
        technical: "Educational AI trained on curriculum with pedagogical strategies.",
        studentUse: "Personalized tutoring, homework help, concept explanation.",
        icon: "fa-graduation-cap"
    },
    {
        name: "Socratic",
        category: "learning",
        description: "AI learning app that explains concepts using visual aids.",
        technical: "Computer vision and NLP for problem understanding and explanation.",
        studentUse: "Homework help, step-by-step explanations, visual learning.",
        icon: "fa-lightbulb"
    },
    {
        name: "Brainly AI",
        category: "learning",
        description: "AI-powered Q&A platform for student homework help.",
        technical: "Community-driven knowledge base with AI moderation and answers.",
        studentUse: "Homework questions, peer learning, subject-specific help.",
        icon: "fa-brain"
    },
    {
        name: "HuggingFace Spaces",
        category: "learning",
        description: "Platform to discover, test, and deploy AI models.",
        technical: "Repository of open-source AI models with demo interfaces.",
        studentUse: "Experimenting with AI models, learning ML, building projects.",
        icon: "fa-h-square"
    },
    {
        name: "AutoGPT",
        category: "learning",
        description: "Autonomous AI agent that can complete multi-step tasks.",
        technical: "GPT-based agent with memory, planning, and execution capabilities.",
        studentUse: "Complex project planning, research automation, task management.",
        icon: "fa-cogs"
    }
];

// DOM Elements
let visibleToolsCount = 12;
const aiToolsGrid = document.getElementById('aiToolsGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const viewMoreBtn = document.getElementById('viewMoreBtn');

// Render AI Tools
function renderAITools(tools = aiTools, limit = visibleToolsCount) {
    aiToolsGrid.innerHTML = '';
    
    const toolsToShow = tools.slice(0, limit);
    
    toolsToShow.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'ai-card';
        card.setAttribute('data-category', tool.category);
        
        card.innerHTML = `
            <div class="ai-card-content">
                <div class="ai-card-header">
                    <div>
                        <h3 class="ai-name">${tool.name}</h3>
                        <span class="ai-category">${getCategoryName(tool.category)}</span>
                    </div>
                    <div class="ai-icon">
                        <i class="fas ${tool.icon}"></i>
                    </div>
                </div>
                <p class="ai-description">${tool.description}</p>
                <div class="ai-details">
                    <div class="ai-detail-title">HOW IT WORKS</div>
                    <div class="ai-detail-text">${tool.technical}</div>
                </div>
                <div class="ai-card-footer">
                    <div class="ai-uses">Students use it for: ${tool.studentUse}</div>
                    <button class="ai-try-btn">Try Now</button>
                </div>
            </div>
        `;
        
        // Add hover tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 3;
            const rotateX = ((centerY - y) / centerY) * 3;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
        
        aiToolsGrid.appendChild(card);
    });
    
    // Add scroll animations
    const cards = document.querySelectorAll('.ai-card');
    cards.forEach(card => {
        card.classList.add('hidden');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'chat': 'Chat & Text',
        'code': 'Code & Dev',
        'image': 'Image & Design',
        'video': 'Video & Audio',
        'learning': 'Learning'
    };
    return categories[category] || 'General';
}

// Filter tools by search and category
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    let filteredTools = aiTools;
    
    // Filter by category
    if (activeCategory !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredTools = filteredTools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.technical.toLowerCase().includes(searchTerm) ||
            tool.studentUse.toLowerCase().includes(searchTerm) ||
            getCategoryName(tool.category).toLowerCase().includes(searchTerm)
        );
    }
    
    renderAITools(filteredTools, visibleToolsCount);
    
    // Update view more button visibility
    viewMoreBtn.style.display = filteredTools.length > visibleToolsCount ? 'inline-flex' : 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize neural network animation
    initAIAnimation();
    
    // Render initial tools
    renderAITools();
    
    // Set up event listeners
    searchInput.addEventListener('input', filterTools);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterTools();
        });
    });
    
    viewMoreBtn.addEventListener('click', () => {
        visibleToolsCount += 12;
        filterTools();
        
        // Scroll to newly added tools
        window.scrollBy({
            top: 300,
            behavior: 'smooth'
        });
        
        // Hide button if all tools are shown
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        let filteredTools = aiTools;
        if (activeCategory !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.category === activeCategory);
        }
        
        if (searchTerm) {
            filteredTools = filteredTools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm)
            );
        }
        
        if (visibleToolsCount >= filteredTools.length) {
            viewMoreBtn.style.display = 'none';
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Add scroll animations to sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });
});
