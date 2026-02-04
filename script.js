document.addEventListener('DOMContentLoaded', async function () {
    const username = 'ranabhat';

    // Handle footer visibility on mobile
    const footer = document.querySelector('.footer');
    const leftBar = document.querySelector('.left-bar');

    function handleFooterVisibility() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        
        // Show footer when user is within 300px of the bottom
        const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
        
        if (window.innerWidth <= 1200) {
            if (distanceFromBottom < 300) {
                footer.style.display = 'block';
                leftBar.style.display = 'flex';
            } else {
                footer.style.display = 'none';
                leftBar.style.display = 'none';
            }
        }
    }

    window.addEventListener('scroll', handleFooterVisibility);
    handleFooterVisibility();

    // Fetch and display user profile image
    async function fetchUserProfile() {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const profile = await response.json();

            const imageWrapper = document.getElementById('profileImageWrapper');
            if (imageWrapper && profile.avatar_url) {
                imageWrapper.innerHTML = `<img src="${profile.avatar_url}" alt="${profile.name}" />`;
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });



    // Fetch data
    fetchUserProfile();
});
