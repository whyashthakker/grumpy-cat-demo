// Grumpy Cat Click Handler
document.addEventListener('DOMContentLoaded', function() {
    const cat = document.getElementById('grumpy-cat');
    const response = document.getElementById('response');
    
    // Array of grumpy responses
    const grumpyResponses = [
        "NO!",
        "Absolutely not!",
        "Nope!",
        "No way!",
        "Never!",
        "Not happening!",
        "I said NO!",
        "Still no!",
        "Definitely not!",
        "No, no, no!",
        "Nuh-uh!",
        "No chance!",
        "Not a chance!",
        "No means no!",
        "I'm still saying no!"
    ];
    
    let clickCount = 0;
    
    // Add click event listener to the cat
    cat.addEventListener('click', function() {
        // Add grumpy class for visual effect
        cat.classList.add('grumpy');
        
        // Get a random grumpy response
        const randomResponse = grumpyResponses[Math.floor(Math.random() * grumpyResponses.length)];
        
        // Update the response text
        response.innerHTML = `<p>${randomResponse}</p>`;
        
        // Increment click counter
        clickCount++;
        
        // Add some extra grumpiness after multiple clicks
        if (clickCount > 5) {
            response.innerHTML = `<p>I've said NO ${clickCount} times already! Stop clicking!</p>`;
        }
        
        if (clickCount > 10) {
            response.innerHTML = `<p>You're really persistent, but the answer is still NO!</p>`;
        }
        
        if (clickCount > 20) {
            response.innerHTML = `<p>Fine! You win! But I'm still grumpy about it! 😾</p>`;
        }
        
        // Remove grumpy class after animation
        setTimeout(() => {
            cat.classList.remove('grumpy');
        }, 1000);
        
        // Add a little shake animation
        cat.style.animation = 'none';
        setTimeout(() => {
            cat.style.animation = 'shake 0.5s ease-in-out';
        }, 10);
    });
    
    // Add shake animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
    
    // Add hover effect
    cat.addEventListener('mouseenter', function() {
        cat.style.transform = 'scale(1.05)';
    });
    
    cat.addEventListener('mouseleave', function() {
        cat.style.transform = 'scale(1)';
    });
    
    // Add some personality with random grumpy sounds (visual representation)
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every few seconds
            cat.classList.add('grumpy');
            setTimeout(() => {
                cat.classList.remove('grumpy');
            }, 2000);
        }
    }, 5000);
});
