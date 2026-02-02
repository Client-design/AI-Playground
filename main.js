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
            this.waveOffset = Math.random() * Math.PI * 2;
            this.originalX = this.x;
            this.originalY = this.y;
        }
        
        update(time) {
            // Add subtle wave motion
            this.x = this.originalX + Math.sin(time * 0.001 + this.waveOffset) * 20;
            this.y = this.originalY + Math.cos(time * 0.001 + this.waveOffset) * 20;
            
            // Add mouse interaction
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                this.x += (dx / distance) * force * 5;
                this.y += (dy / distance) * force * 5;
                this.size = Math.min(this.size + 0.2, 4);
            } else {
                // Slowly return to original size
                this.size = Math.max(this.size - 0.02, 0.5);
            }
        }
        
        draw(time) {
            // Pulsing effect
            const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.3 + 0.7;
            const currentSize = this.size * pulse;
            
            // Enhanced glow effect
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, currentSize * 4
            );
            gradient.addColorStop(0, this.color.replace('0.8', '0.5'));
            gradient.addColorStop(0.5, this.color.replace('0.8', '0.2'));
            gradient.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize * 4, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Particle core
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            
            // Inner bright core
            ctx.beginPath();
            ctx.arc(this.x, this.y, currentSize * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fill();
        }
    }
    
    // Connection line class with enhanced effects
    class Connection {
        constructor(particle1, particle2) {
            this.p1 = particle1;
            this.p2 = particle2;
            this.active = false;
            this.opacity = 0;
            this.pulsePos = Math.random();
            this.pulseSpeed = Math.random() * 0.002 + 0.001;
        }
        
        update() {
            const dx = this.p2.x - this.p1.x;
            const dy = this.p2.y - this.p1.y;
            const currentDistance = Math.sqrt(dx * dx + dy * dy);
            
            // Activate connection if particles are close enough
            if (currentDistance < 150) {
                this.active = true;
                this.opacity = Math.min(this.opacity + 0.08, 0.4 * (1 - currentDistance / 150));
            } else {
                this.active = false;
                this.opacity = Math.max(this.opacity - 0.03, 0);
            }
            
            // Update pulse position
            this.pulsePos = (this.pulsePos + this.pulseSpeed) % 1;
        }
        
        draw() {
            if (!this.active || this.opacity < 0.05) return;
            
            // Create gradient for the connection line
            const gradient = ctx.createLinearGradient(
                this.p1.x, this.p1.y,
                this.p2.x, this.p2.y
            );
            
            const color1 = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${this.opacity})`;
            const color2 = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
            
            gradient.addColorStop(0, color1);
            gradient.addColorStop(0.5, color2);
            gradient.addColorStop(1, color1);
            
            ctx.beginPath();
            ctx.moveTo(this.p1.x, this.p1.y);
            ctx.lineTo(this.p2.x, this.p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.stroke();
            
            // Add moving pulse effect along the connection
            const pulseX = this.p1.x + (this.p2.x - this.p1.x) * this.pulsePos;
            const pulseY = this.p1.y + (this.p2.y - this.p1.y) * this.pulsePos;
            
            const pulseGradient = ctx.createRadialGradient(
                pulseX, pulseY, 0,
                pulseX, pulseY, 4
            );
            pulseGradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
            pulseGradient.addColorStop(1, 'transparent');
            
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
            ctx.fillStyle = pulseGradient;
            ctx.fill();
        }
    }
    
    // Mouse interaction
    const mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 150
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
    const particleCount = window.innerWidth < 768 ? 80 : 150;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Create connections (only between nearby particles to optimize)
    const connections = [];
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
                connections.push(new Connection(particles[i], particles[j]));
            }
        }
    }
    
    // Animation loop
    let time = 0;
    function animate() {
        time = Date.now();
        
        // Clear with a fade effect for trails
        ctx.fillStyle = 'rgba(10, 10, 26, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update(time);
            particle.draw(time);
        });
        
        // Update and draw connections
        connections.forEach(connection => {
            connection.update();
            connection.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

// AI Tools Data with URLs
const aiTools = [
    {
        name: "ChatGPT",
        category: "chat",
        description: "Advanced conversational AI for answering questions, writing, and problem-solving.",
        technical: "Transformer-based language model fine-tuned with reinforcement learning from human feedback.",
        studentUse: "Research assistance, essay writing, coding help, language learning.",
        icon: "fa-comment-dots",
        url: "https://chatgpt.com/"
    },
    {
        name: "Claude",
        category: "chat",
        description: "AI assistant focused on helpful, harmless, and honest conversations.",
        technical: "Constitutional AI trained with principles to ensure safe and ethical responses.",
        studentUse: "Brainstorming ideas, editing documents, ethical dilemma analysis.",
        icon: "fa-robot",
        url: "https://claude.ai/"
    },
    {
        name: "Gemini",
        category: "chat",
        description: "Multimodal AI that understands and generates text, code, images, and more.",
        technical: "Multimodal transformer architecture capable of processing different data types.",
        studentUse: "Multimedia projects, cross-disciplinary research, creative ideation.",
        icon: "fa-gem",
        url: "https://gemini.google.com/"
    },
    {
        name: "Quillbot",
        category: "chat",
        description: "AI-powered paraphrasing tool to rewrite and enhance writing.",
        technical: "Advanced NLP algorithms for sentence restructuring while preserving meaning.",
        studentUse: "Paraphrasing research, improving writing style, avoiding plagiarism.",
        icon: "fa-feather-alt",
        url: "https://quillbot.com/"
    },
    {
        name: "Notion AI",
        category: "chat",
        description: "AI writing assistant integrated within Notion workspace.",
        technical: "Custom language model fine-tuned for productivity and organization tasks.",
        studentUse: "Note summarization, project planning, content organization.",
        icon: "fa-sticky-note",
        url: "https://www.notion.so/product/ai"
    },
    {
        name: "Grammarly",
        category: "chat",
        description: "AI writing assistant that checks grammar, tone, and clarity.",
        technical: "Rule-based and ML algorithms for grammar checking and style improvement.",
        studentUse: "Proofreading essays, improving writing style, learning grammar rules.",
        icon: "fa-spell-check",
        url: "https://www.grammarly.com/"
    },
    {
        name: "GitHub Copilot",
        category: "code",
        description: "AI pair programmer that suggests code completions.",
        technical: "Codex model trained on billions of lines of public code.",
        studentUse: "Learning programming, code completion, understanding syntax.",
        icon: "fa-code",
        url: "https://github.com/features/copilot"
    },
    {
        name: "Replit AI",
        category: "code",
        description: "AI coding assistant within the Replit development environment.",
        technical: "Specialized code generation model with browser-based execution.",
        studentUse: "Learning to code, building projects, debugging assistance.",
        icon: "fa-laptop-code",
        url: "https://replit.com/site/ai"
    },
    {
        name: "Codeium",
        category: "code",
        description: "Free AI-powered code completion tool for multiple IDEs.",
        technical: "Deep learning model trained on diverse codebases across languages.",
        studentUse: "Free coding assistance, learning new languages, project development.",
        icon: "fa-bolt",
        url: "https://codeium.com/"
    },
    {
        name: "Tabnine",
        category: "code",
        description: "AI code completion that learns from your coding patterns.",
        technical: "Deep learning model that adapts to individual coding styles.",
        studentUse: "Personalized code suggestions, learning best practices.",
        icon: "fa-keyboard",
        url: "https://www.tabnine.com/"
    },
    {
        name: "Cursor AI",
        category: "code",
        description: "AI-powered code editor with advanced autocomplete and editing.",
        technical: "Code-specific transformer with editor-native integration.",
        studentUse: "Writing efficient code, refactoring, learning patterns.",
        icon: "fa-mouse-pointer",
        url: "https://cursor.sh/"
    },
    {
        name: "Midjourney",
        category: "image",
        description: "AI image generation from text descriptions.",
        technical: "Diffusion model trained on millions of image-text pairs.",
        studentUse: "Creating illustrations for projects, visual storytelling, design concepts.",
        icon: "fa-palette",
        url: "https://www.midjourney.com/"
    },
    {
        name: "DALL·E",
        category: "image",
        description: "AI system creating realistic images from text descriptions.",
        technical: "CLIP-guided diffusion model for precise image generation.",
        studentUse: "Visualizing concepts, creating project artwork, design exploration.",
        icon: "fa-image",
        url: "https://openai.com/dall-e-3"
    },
    {
        name: "Leonardo",
        category: "image",
        description: "AI image generation with fine control over style and elements.",
        technical: "Customizable diffusion models with specialized training.",
        studentUse: "Creating consistent character designs, thematic artwork.",
        icon: "fa-paint-brush",
        url: "https://leonardo.ai/"
    },
    {
        name: "Canva AI",
        category: "image",
        description: "AI design tools integrated within Canva platform.",
        technical: "Multiple AI models for design, layout, and content generation.",
        studentUse: "Creating presentations, social media graphics, design projects.",
        icon: "fa-object-group",
        url: "https://www.canva.com/ai-tools/"
    },
    {
        name: "Adobe Firefly",
        category: "image",
        description: "Creative generative AI integrated into Adobe Creative Cloud.",
        technical: "Ethically trained diffusion models for professional creative work.",
        studentUse: "Photo editing, digital art, graphic design projects.",
        icon: "fa-fire",
        url: "https://www.adobe.com/sensei/generative-ai/firefly.html"
    },
    {
        name: "Pictory",
        category: "video",
        description: "AI video creation from scripts, articles, or existing videos.",
        technical: "NLP for script analysis and ML for video assembly.",
        studentUse: "Creating video presentations, summarizing content, video essays.",
        icon: "fa-video",
        url: "https://pictory.ai/"
    },
    {
        name: "Synthesia",
        category: "video",
        description: "Create AI-generated videos with virtual presenters.",
        technical: "Deep learning for realistic avatar synthesis and lip sync.",
        studentUse: "Creating educational videos, presentations with virtual hosts.",
        icon: "fa-user-tie",
        url: "https://www.synthesia.io/"
    },
    {
        name: "ElevenLabs",
        category: "video",
        description: "AI voice generation and text-to-speech platform.",
        technical: "Deep learning models for realistic voice synthesis.",
        studentUse: "Adding narration to projects, creating audio content, language practice.",
        icon: "fa-microphone",
        url: "https://elevenlabs.io/"
    },
    {
        name: "Descript",
        category: "video",
        description: "AI-powered video and podcast editing through text editing.",
        technical: "Speech recognition and synthesis for seamless editing.",
        studentUse: "Editing class presentations, creating podcast episodes.",
        icon: "fa-edit",
        url: "https://www.descript.com/"
    },
    {
        name: "Tome AI",
        category: "video",
        description: "AI presentation tool that generates structured narratives.",
        technical: "NLP for content structuring and design automation.",
        studentUse: "Creating presentations quickly, structuring project reports.",
        icon: "fa-columns",
        url: "https://tome.app/"
    },
    {
        name: "Gamma AI",
        category: "video",
        description: "AI for creating presentations, documents, and web pages.",
        technical: "Content-aware design algorithms for automatic formatting.",
        studentUse: "Designing project reports, creating study materials.",
        icon: "fa-shapes",
        url: "https://gamma.app/"
    },
    {
        name: "Otter AI",
        category: "video",
        description: "AI meeting assistant that records audio and writes notes.",
        technical: "Speech recognition with speaker identification and summarization.",
        studentUse: "Recording lectures, meeting notes, interview transcription.",
        icon: "fa-otter",
        url: "https://otter.ai/"
    },
    {
        name: "Perplexity",
        category: "learning",
        description: "AI search engine with conversational answers and citations.",
        technical: "Retrieval-augmented generation combining search and language models.",
        studentUse: "Research with sources, fact-checking, learning new topics.",
        icon: "fa-search",
        url: "https://www.perplexity.ai/"
    },
    {
        name: "Wolfram Alpha",
        category: "learning",
        description: "Computational knowledge engine for math and science.",
        technical: "Symbolic computation engine with curated knowledge base.",
        studentUse: "Solving math problems, scientific calculations, data analysis.",
        icon: "fa-calculator",
        url: "https://www.wolframalpha.com/"
    },
    {
        name: "Khanmigo",
        category: "learning",
        description: "AI tutor by Khan Academy for personalized learning.",
        technical: "Educational AI trained on curriculum with pedagogical strategies.",
        studentUse: "Personalized tutoring, homework help, concept explanation.",
        icon: "fa-graduation-cap",
        url: "https://www.khanacademy.org/khan-labs"
    },
    {
        name: "Socratic",
        category: "learning",
        description: "AI learning app that explains concepts using visual aids.",
        technical: "Computer vision and NLP for problem understanding and explanation.",
        studentUse: "Homework help, step-by-step explanations, visual learning.",
        icon: "fa-lightbulb",
        url: "https://socratic.org/"
    },
    {
        name: "Brainly AI",
        category: "learning",
        description: "AI-powered Q&A platform for student homework help.",
        technical: "Community-driven knowledge base with AI moderation and answers.",
        studentUse: "Homework questions, peer learning, subject-specific help.",
        icon: "fa-brain",
        url: "https://brainly.com/"
    },
    {
        name: "HuggingFace Spaces",
        category: "learning",
        description: "Platform to discover, test, and deploy AI models.",
        technical: "Repository of open-source AI models with demo interfaces.",
        studentUse: "Experimenting with AI models, learning ML, building projects.",
        icon: "fa-h-square",
        url: "https://huggingface.co/spaces"
    },
    {
        name: "AutoGPT",
        category: "learning",
        description: "Autonomous AI agent that can complete multi-step tasks.",
        technical: "GPT-based agent with memory, planning, and execution capabilities.",
        studentUse: "Complex project planning, research automation, task management.",
        icon: "fa-cogs",
        url: "https://github.com/Significant-Gravitas/Auto-GPT"
    }
];

// DOM Elements
let visibleToolsCount = 12;
const aiToolsGrid = document.getElementById('aiToolsGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const visibleCount = document.getElementById('visibleCount');
const exploreBtn = document.getElementById('exploreBtn');
const learningBtn = document.getElementById('learningBtn');

// Render AI Tools with enhanced animations
function renderAITools(tools = aiTools, limit = visibleToolsCount) {
    aiToolsGrid.innerHTML = '';
    
    const toolsToShow = tools.slice(0, limit);
    
    toolsToShow.forEach((tool, index) => {
        const card = document.createElement('div');
        card.className = 'ai-card hidden';
        card.setAttribute('data-category', tool.category);
        card.style.animationDelay = `${index * 0.05}s`;
        
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
                    <button class="ai-try-btn" data-url="${tool.url}">Try Now</button>
                </div>
            </div>
        `;
        
        // Add enhanced hover tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((centerY - y) / centerY) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
        
        // Add click animation
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
        
        aiToolsGrid.appendChild(card);
    });
    
    // Add scroll animations with intersection observer
    const cards = document.querySelectorAll('.ai-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
    
    // Update counter
    visibleCount.textContent = Math.min(limit, tools.length);
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
    if (filteredTools.length > visibleToolsCount) {
        viewMoreBtn.style.display = 'inline-flex';
        viewMoreBtn.querySelector('.btn-text').textContent = `View ${filteredTools.length - visibleToolsCount} More Tools`;
    } else {
        viewMoreBtn.style.display = 'none';
    }
}

// Initialize with enhanced effects
document.addEventListener('DOMContentLoaded', () => {
    // Initialize neural network animation
    initAIAnimation();
    
    // Render initial tools with staggered animation
    setTimeout(() => {
        renderAITools();
    }, 300);
    
    // Set up event listeners
    searchInput.addEventListener('input', () => {
        visibleToolsCount = 12;
        filterTools();
    });
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            visibleToolsCount = 12;
            filterTools();
        });
    });
    
    // Enhanced View More button animation
    viewMoreBtn.addEventListener('click', () => {
        // Add click animation
        viewMoreBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            viewMoreBtn.style.transform = '';
        }, 150);
        
        visibleToolsCount += 12;
        filterTools();
        
        // Scroll to newly added tools with smooth animation
        const newCards = document.querySelectorAll('.ai-card.hidden');
        if (newCards.length > 0) {
            newCards[0].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        
        // Add confetti effect
        createConfetti();
    });
    
    // Try Now button redirect
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('ai-try-btn')) {
            const url = e.target.getAttribute('data-url');
            window.open(url, '_blank');
            
            // Add click feedback
            e.target.innerHTML = '<i class="fas fa-external-link-alt"></i> Opening...';
            setTimeout(() => {
                e.target.textContent = 'Try Now';
            }, 1000);
        }
    });
    
    // Hero buttons
    exploreBtn.addEventListener('click', () => {
        document.querySelector('#ai-tools').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    learningBtn.addEventListener('click', () => {
        // Add learning button animation
        learningBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Resources...';
        setTimeout(() => {
            learningBtn.textContent = 'Start Learning';
            alert('Learning resources will be available soon!');
        }, 1500);
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(90deg, #00ff88, #00cc66)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))';
                    contactForm.reset();
                    alert('Thank you for your message! We\'ll get back to you soon.');
                }, 2000);
            }, 2000);
        });
    }
    
    // Live chat button
    document.querySelector('.chat-btn')?.addEventListener('click', () => {
        alert('Live chat will open in a new window. Feature coming soon!');
    });
    
    // Community button
    document.querySelector('.community-btn')?.addEventListener('click', () => {
        window.open('https://internadda.com/community/join.html', '_blank');
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

// Confetti effect for View More button
function createConfetti() {
    const colors = ['#00d9ff', '#8a2be2', '#ff00ff', '#00ff88', '#ffff00'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            z-index: 1000;
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: confetti-fall ${Math.random() * 1 + 1}s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        // Clean up after animation
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
    
    // Add animation keyframes
    if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confetti-fall {
                0% {
                    transform: translate(-50%, -50%) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() * 200 - 100}px, 100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
