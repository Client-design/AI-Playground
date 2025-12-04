document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Prompt Search Functionality ---
    const searchInput = document.getElementById('prompt-search');
    const searchButton = document.getElementById('search-button');
    const aiPosts = document.querySelectorAll('.ai-post');
    const loadMoreButton = document.getElementById('load-more-posts'); 

    /**
     * Filters the AI posts based on the text input.
     * @param {string} query - The search term.
     */
    const filterPosts = (query) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        
        aiPosts.forEach(post => {
            // Get keywords from the custom data attribute
            const keywords = post.getAttribute('data-keywords').toLowerCase();
            // Get the entire visible text content of the post for a deeper search
            const postText = post.textContent.toLowerCase();
            
            // Check if the query is found in keywords or post text
            if (keywords.includes(lowerCaseQuery) || postText.includes(lowerCaseQuery)) {
                post.style.display = 'block'; // Show the post
            } else {
                post.style.display = 'none'; // Hide the post
            }
        });

        // Hide Load More button during a search
        if (loadMoreButton) {
            loadMoreButton.style.display = 'none';
        }
    };

    // 1. Search button click
    searchButton.addEventListener('click', () => {
        filterPosts(searchInput.value);
    });

    // 2. Typing in the search field (live search)
    searchInput.addEventListener('input', () => {
        filterPosts(searchInput.value);
    });

    // 3. Pressing 'Enter' in the search field
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterPosts(searchInput.value);
        }
    });

    // Clear search and re-initialize posts if the user clears the input
    searchInput.addEventListener('blur', () => {
        if (searchInput.value.trim() === '') {
            initializePosts(); // Re-show the initial posts
        }
    });

    // --- Load More Functionality ---
    const POSTS_PER_LOAD = 4;
    const INITIAL_POSTS_DESKTOP = 4; 
    const INITIAL_POSTS_MOBILE = 2; 

    let currentlyVisiblePosts = 0;

    const showPosts = (start, count) => {
        for (let i = start; i < start + count && i < aiPosts.length; i++) {
            if (aiPosts[i].style.display === 'none') {
                aiPosts[i].style.display = 'block';
                currentlyVisiblePosts++;
            }
        }

        if (currentlyVisiblePosts >= aiPosts.length && loadMoreButton) {
            loadMoreButton.style.display = 'none';
        }
    };

    const initializePosts = () => {
        currentlyVisiblePosts = 0;
        const initialCount = window.innerWidth <= 768 ? INITIAL_POSTS_MOBILE : INITIAL_POSTS_DESKTOP;

        aiPosts.forEach((post, index) => {
            post.style.display = index < initialCount ? 'block' : 'none';
        });
        currentlyVisiblePosts = Math.min(aiPosts.length, initialCount);

        if (loadMoreButton) {
             if (aiPosts.length <= initialCount) {
                loadMoreButton.style.display = 'none';
            } else {
                loadMoreButton.style.display = 'block';
            }
        }
    };

    if (aiPosts.length > 0) {
        initializePosts();
    }
    
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            loadMoreButton.classList.add('loading');
            
            setTimeout(() => {
                showPosts(currentlyVisiblePosts, POSTS_PER_LOAD);
                loadMoreButton.classList.remove('loading');
            }, 500); 
        });
    }

    window.addEventListener('resize', initializePosts);


    // --- Show Full Prompt Modal Logic ---
    const modal = document.getElementById('promptModal');
    const modalCloseBtn = document.querySelector('.close-btn');
    const fullPromptTextContainer = document.getElementById('full-prompt-text');
    
    // Function to open the modal
    const openModal = (promptHTML) => {
        fullPromptTextContainer.innerHTML = promptHTML;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    };

    // 1. Add click listeners to all "Show Full Prompt" buttons
    document.querySelectorAll('.show-full-prompt-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Find the sibling .prompt-text element, which holds the HTML content
            const promptElement = e.target.closest('.prompt-area').querySelector('.prompt-text');
            // Get the entire HTML content of the prompt text
            const fullPromptHTML = promptElement.innerHTML;
            openModal(fullPromptHTML);
        });
    });

    // 2. Add click listeners to the close button (x)
    modalCloseBtn.addEventListener('click', closeModal);

    // 3. Close modal if user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 4. Close modal if user presses ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
