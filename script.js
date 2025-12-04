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
    const loadMoreButton = document.getElementById('load-more-posts'); // Get the new button

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
    const INITIAL_POSTS_MOBILE = 2; // User requested 2 on mobile

    let currentlyVisiblePosts = 0;

    /**
     * Shows a batch of posts and updates the button visibility.
     */
    const showPosts = (start, count) => {
        let postsShownThisBatch = 0;
        for (let i = start; i < start + count && i < aiPosts.length; i++) {
            if (aiPosts[i].style.display === 'none') {
                aiPosts[i].style.display = 'block';
                currentlyVisiblePosts++;
                postsShownThisBatch++;
            }
        }

        // Hide the button if all posts are visible
        if (currentlyVisiblePosts >= aiPosts.length && loadMoreButton) {
            loadMoreButton.style.display = 'none';
        }
    };

    /**
     * Initializes the posts, hiding all except the first few based on screen size.
     */
    const initializePosts = () => {
        currentlyVisiblePosts = 0;
        // Determine initial number based on screen width (768px is the breakpoint in CSS)
        const initialCount = window.innerWidth <= 768 ? INITIAL_POSTS_MOBILE : INITIAL_POSTS_DESKTOP;

        aiPosts.forEach((post, index) => {
            post.style.display = index < initialCount ? 'block' : 'none';
        });
        currentlyVisiblePosts = Math.min(aiPosts.length, initialCount);

        // Check button visibility after initialization
        if (loadMoreButton) {
             if (aiPosts.length <= initialCount) {
                loadMoreButton.style.display = 'none';
            } else {
                loadMoreButton.style.display = 'block';
            }
        }
    };

    // Initialize posts on DOM load
    if (aiPosts.length > 0) {
        initializePosts();
    }
    
    // Load more handler
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            showPosts(currentlyVisiblePosts, POSTS_PER_LOAD);
        });
    }

    // Re-initialize on window resize to respect desktop/mobile display counts
    window.addEventListener('resize', initializePosts);
});
