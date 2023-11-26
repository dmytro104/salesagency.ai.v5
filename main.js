// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate the target element's position
            const offset = targetElement.offsetTop - 100;

            // Scroll smoothly to the target element using CSS
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Adjust as needed
            });
        }
    });
});

// For new nav bar on smaller screens
const bar = document.querySelector('.bar');
const barSection = document.querySelector('.mobile-nav');
const close = document.querySelector('.close');
const navBar = document.querySelector('.navbar')
const navRight = document.querySelector('.nav-right');
const navButton = document.querySelector('.button-section')

if (bar) {
	bar.addEventListener('click', (event) => {
        event.preventDefault();
		navRight.classList.add('active');
        navBar.classList.add('active');
        barSection.style.display = 'none';
        navBar.style.borderBottomLeftRadius = '8px';
        navBar.style.borderBottomRightRadius = '8px';
        navBar.style.boxShadow = '0px 2px 5px 0px rgba(0, 0, 0, 0.19), 0px 8px 8px 0px rgba(0, 0, 0, 0.17), 0px 19px 11px 0px rgba(0, 0, 0, 0.10), 0px 33px 13px 0px rgba(0, 0, 0, 0.03), 0px 52px 14px 0px rgba(0, 0, 0, 0.00)';
	})
}

if (close) {
	close.addEventListener('click', (event) => {
		event.preventDefault();
		navRight.classList.remove('active');
        navBar.classList.remove('active');
        barSection.style = '';
        navBar.style.borderBottomLeftRadius = '0px';
        navBar.style.borderBottomRightRadius = '0px';
        navBar.style.boxShadow = 'none';
	})
}

if (close) {
	document.addEventListener('keydown', (event, keyCode) => {
		if (event.keyCode === 27) {
			event.preventDefault();
			navRight.classList.remove('active');
            navBar.classList.remove('active');
            barSection.style = '';
            navBar.style.borderBottomLeftRadius = '0px';
            navBar.style.borderBottomRightRadius = '0px';
            navBar.style.boxShadow = 'none';
		}
	})
}

if (close) {
	close.addEventListener('keydown', (event, keyCode) => {
		if (event.keyCode === 27) {
			event.preventDefault();
			navRight.classList.remove('active');
            navBar.classList.remove('active');
            barSection.style = '';
            navBar.style.borderBottomLeftRadius = '0px';
            navBar.style.borderBottomRightRadius = '0px';
            navBar.style.boxShadow = 'none';
		}
	})
}

// Opacity effect
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the intersection observer callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }

    // Adjust the threshold value based on your needs
    const threshold = window.innerWidth < 600 ? 0.1 : 0.5;

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, { threshold });

    // Get all sections on the page
    const sections = document.querySelectorAll('.section-tag');

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

//   Text typing out animation
//   document.addEventListener('DOMContentLoaded', function () {
//     // Function to handle the intersection observer callback
//     function handleIntersection(entries, observer) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateText(entry.target);
//                 observer.unobserve(entry.target);
//             }
//         });
//     }

//     // Create an intersection observer instance
//     const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

//     // Get the text container element
//     const bottomNav = document.querySelector('.bottom-nav');

//     // Observe the text container
//     observer.observe(bottomNav);
// });

// function animateText(target) {
//     const text = target.querySelector('.typing-text');
//     text.style.borderRight = 'none'; // Hide the cursor border
// }
