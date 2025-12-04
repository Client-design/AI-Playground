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
    const allPosts = document.querySelectorAll('.ai-post');
    const viewMoreButton = document.getElementById('view-more-button');
    const viewMoreContainer = document.querySelector('.view-more-container');

    /**
     * Filters the AI posts based on the text input.
     * Also manages the visibility of the "View More" button during filtering.
     * @param {string} query - The search term.
     */
    const filterPosts = (query) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        const isFiltering = lowerCaseQuery.length > 0;

        allPosts.forEach(post => {
            const keywords = post.getAttribute('data-keywords').toLowerCase();
            const postText = post.textContent.toLowerCase();
            
            if (isFiltering) {
                // If filtering, show posts that match, hide posts that don't, regardless of their initial 'hidden-post' state.
                if (keywords.includes(lowerCaseQuery) || postText.includes(lowerCaseQuery)) {
                    post.style.display = 'block'; 
                } else {
                    post.style.display = 'none'; 
                }
            } else {
                // If not filtering, restore the default hidden/visible state
                if (post.classList.contains('hidden-post')) {
                    post.style.display = 'none';
                } else {
                    post.style.display = 'block';
                }
            }
        });
        
        // Hide 'View More' button if any filter is active
        if (isFiltering) {
            viewMoreContainer.style.display = 'none';
        } else {
            viewMoreContainer.style.display = 'block';
            setupViewMore(); // Check button visibility based on remaining hidden posts
        }
    };
    
    // Event Listeners for Search
    searchButton.addEventListener('click', () => filterPosts(searchInput.value));
    searchInput.addEventListener('input', () => filterPosts(searchInput.value));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterPosts(searchInput.value);
    });

    searchInput.addEventListener('blur', () => {
        // Clear filter if the user clears the input
        if (searchInput.value.trim() === '') filterPosts(''); 
    });
    
    // --- View More Functionality ---
    
    let postsPerClick = 3; // Number of additional posts to show when clicked

    /** Checks if any hidden posts remain and adjusts button visibility. */
    const setupViewMore = () => {
        const hiddenPosts = document.querySelectorAll('.ai-post.hidden-post');
        if (hiddenPosts.length === 0) {
            viewMoreButton.style.display = 'none';
        } else {
            viewMoreButton.style.display = 'block';
        }
    };
    
    /** Reveals the next batch of hidden posts. */
    const showMorePosts = () => {
        const hiddenPosts = document.querySelectorAll('.ai-post.hidden-post');
        
        for (let i = 0; i < postsPerClick && i < hiddenPosts.length; i++) {
            hiddenPosts[i].classList.remove('hidden-post');
            // Ensure the newly revealed posts are visible (in case they were hidden by a previous filter reset)
            hiddenPosts[i].style.display = 'block'; 
        }
        
        // Re-check button visibility
        setupViewMore();
    };

    if (viewMoreButton) {
        viewMoreButton.addEventListener('click', showMorePosts);
        setupViewMore(); // Initial check on load
    }
});
