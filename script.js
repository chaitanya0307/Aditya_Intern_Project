document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggler for Mobile
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) { // Ensure elements exist before adding event listeners
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Close nav menu when a link is clicked (for smooth scrolling)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the nav is active before trying to close it
                if (navLinks.classList.contains('nav-active')) {
                    navLinks.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });
    }

    // Cookie Consent Logic
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const cookieName = 'adityaBirlaGrasim_cookie_accepted';

    // Check if cookie has been accepted
    function checkCookieConsent() {
        // localStorage is generally safe for file:// access, but some strict browsers might block it.
        // If it's blocking, you might see a SecurityError in the console.
        try {
            if (!localStorage.getItem(cookieName)) {
                if (cookieConsent) { // Ensure cookieConsent element exists
                    cookieConsent.style.display = 'flex'; // Show if not accepted
                }
            } else {
                if (cookieConsent) {
                    cookieConsent.style.display = 'none'; // Hide if accepted
                }
            }
        } catch (e) {
            console.error("Error accessing localStorage (likely due to file:// protocol):", e);
            // Fallback: If localStorage is inaccessible, just hide the banner by default
            if (cookieConsent) {
                cookieConsent.style.display = 'none';
            }
        }
    }

    // Handle accepting cookies
    if (acceptCookiesBtn) { // Ensure button exists
        acceptCookiesBtn.addEventListener('click', () => {
            try {
                localStorage.setItem(cookieName, 'true');
            } catch (e) {
                console.error("Error setting localStorage (likely due to file:// protocol):", e);
            }
            if (cookieConsent) {
                cookieConsent.style.display = 'none';
            }
        });
    }

    // Run on page load
    checkCookieConsent();

    // Smooth Scrolling for anchor links (optional, but good for UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) { // Ensure target element exists
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic Search Functionality (Client-side, very rudimentary)
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    if (searchButton && searchInput) { // Ensure both elements exist
        searchButton.addEventListener('click', () => {
            performSearch();
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            const query = searchInput.value.trim();
            if (query) {
                alert(Performing search for: "${query}" (This is a placeholder. Real search requires backend integration or more complex client-side logic.));
                // In a real application, you'd send this query to a search API
                // or filter visible content.
            } else {
                alert('Please enter a search term.');
            }
        }
    }
});
