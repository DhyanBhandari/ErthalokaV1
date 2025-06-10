document.addEventListener("DOMContentLoaded", () => {
            lucide.createIcons();
        });
    


    // Initial load animation with staggered delay
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        
        setTimeout(() => {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 150);
            });
        }, 500);
    });
    
    // Scroll animation
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.card');
        const triggerBottom = window.innerHeight * 0.8;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
        
        // Adjust parallax effect based on scroll position
        const parallaxContainer = document.querySelector('.parallax-container');
        const homeSection = document.getElementById('home');
        const scrollPosition = window.pageYOffset;
        const sectionHeight = homeSection.offsetHeight;
        
        // Only apply parallax effect while the hero section is visible
        if (scrollPosition <= sectionHeight) {
            parallaxContainer.style.transform = `translateY(0)`;
            parallaxContainer.style.opacity = 1 - (scrollPosition / sectionHeight);
        } else {
            parallaxContainer.style.opacity = 0;
        }
    });
    
    // Advanced hover effects
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            let centerX = rect.width / 2;
            let centerY = rect.height / 2;
            
            let angleX = (centerY - y) / 15;
            let angleY = (x - centerX) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            setTimeout(() => {
                card.style.transition = 'transform 0.5s ease';
            }, 100);
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });



    gsap.to(".about-us", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.3
    });



            function redirectToForm() {
                window.open("https://forms.gle/c3WJL8ZMxGgwRQtf6", "_blank");
            }
        


    document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();
    });



                    // Get the form and email input
                    const newsletterForm = document.getElementById('newsletterForm');
                    const emailInput = document.getElementById('emailInput');
                
                    // Add event listener to handle form submission
                    newsletterForm.addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent the default form submission
                
                        const email = emailInput.value; // Get the email from the input field
                
                        // Log the email to the console
                        console.log("Subscribed email:", email);
                
                        // Optionally, you can clear the input after submission
                        emailInput.value = '';
                    });