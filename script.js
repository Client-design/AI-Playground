// Function to handle the simulated like button click
function setupLikeSimulations() {
    // Get all elements with the class 'likes-simulation'
    const likeSpans = document.querySelectorAll('.likes-simulation');

    likeSpans.forEach(span => {
        // Create a like button element
        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.classList.add('simulated-like-button');
        
        // Insert the button before the likes count span
        span.parentNode.insertBefore(likeButton, span);

        // State variables
        let isLiked = false;
        let likesText = span.textContent;
        // Parse the initial number of likes (e.g., "❤️ 982 Likes" -> 982)
        let currentLikes = parseInt(likesText.replace('❤️', '').replace('Likes', '').trim());

        // Update the button text and color based on state
        const updateLikeButton = () => {
            // NOTE: The CSS for 'simulated-like-button' handles the color,
            // but we can adjust it here for the 'Unlike' state if needed.
            // Using inline style temporarily for a visual change on click:
            likeButton.style.backgroundColor = isLiked ? '#dc3545' : '#007bff'; 
            
            likeButton.textContent = isLiked ? 'Unlike' : 'Like';
            span.textContent = `❤️ ${currentLikes} Likes`;
        };

        // Initial setup
        updateLikeButton();
        
        // Add click listener
        likeButton.addEventListener('click', () => {
            if (isLiked) {
                // If already liked, unlike it
                currentLikes--;
            } else {
                // If not liked, like it
                currentLikes++;
            }
            
            isLiked = !isLiked;
            updateLikeButton();
            
            // Optional: Add a small visual feedback (e.g., a temporary pulse animation class)
            // likeButton.classList.add('liked-animation');
            // setTimeout(() => {
            //     likeButton.classList.remove('liked-animation');
            // }, 300);
        });
    });
}

// Ensure the function runs once the document is fully loaded
document.addEventListener('DOMContentLoaded', setupLikeSimulations);
