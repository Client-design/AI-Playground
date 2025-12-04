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

    // Clear search and show all posts if the user clears the input
    searchInput.addEventListener('blur', () => {
        if (searchInput.value.trim() === '') {
            aiPosts.forEach(post => {
                post.style.display = 'block';
            });
        }
    });
});
