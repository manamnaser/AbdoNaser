document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Navigation Active State Handling based on Scroll Position
    const sections = document.querySelectorAll(".panel");
    const navItems = document.querySelectorAll(".side-nav ul li");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // standard trigger logic
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(li => {
            li.classList.remove("active");
            if (li.getAttribute("data-section") === currentSectionId) {
                li.classList.add("active");
            }
        });

        // Trigger skills progress animation if section is visible
        if (currentSectionId === "skills") {
            animateSkills();
        }
    });

    // 2. Skill Bars Animation Trigger Function
    function animateSkills() {
        const progressFills = document.querySelectorAll(".bar-fill");
        progressFills.forEach(bar => {
            // Get value from custom css property variable
            const targetProgress = bar.style.getPropertyValue('--progress');
            bar.style.width = targetProgress;
        });
    }

    // 3. Scroll to Top Actions
    const scrollTopButtons = document.querySelectorAll(".scroll-top-btn");
    scrollTopButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    // 4. Smooth Scrolling for Side Navigation links
    const navLinks = document.querySelectorAll(".side-nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });
    });
});