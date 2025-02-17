document.addEventListener("DOMContentLoaded", () => {
    // Back and Next Buttons for Carousel
    const servicesContainer = document.querySelector(".services-container");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (servicesContainer && backBtn && nextBtn) {
        backBtn.addEventListener("click", () => {
            servicesContainer.scrollBy({ left: -300, behavior: "smooth" });
        });

        nextBtn.addEventListener("click", () => {
            servicesContainer.scrollBy({ left: 300, behavior: "smooth" });
        });
    }

    // Scroll Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        const windowBottom = window.innerHeight + window.scrollY;

        elements.forEach((element) => {
            if (windowBottom > element.getBoundingClientRect().top + window.scrollY) {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", animateOnScroll);

    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('nav.mobile');
    
        hamburger.addEventListener('click', function () {
          this.classList.toggle('active');
          mobileNav.classList.toggle('active');
        });
      });

    // Mobile Navigation Toggle
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    const header = document.querySelector(".main-header");
    const nav = document.querySelector("nav");

    if (header && nav) {
        header.insertBefore(hamburger, nav);

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("mobile");
            nav.classList.toggle("active");
        });
    }

    // Show More/Less for Blog Content
    const toggleBlogButtons = document.querySelectorAll(".toggle-blog");

    toggleBlogButtons.forEach(button => {
        button.addEventListener("click", () => {
            const blogContent = button.previousElementSibling;
            if (blogContent.style.display === "none" || blogContent.style.display === "") {
                blogContent.style.display = "block";
                button.textContent = "Show Less";
            } else {
                blogContent.style.display = "none";
                button.textContent = "Show More";
            }
        });
    });

    // Ensure Images Fit Well on Small Screens
    const adjustImagesForSmallScreens = () => {
        const images = document.querySelectorAll("img");
        const isSmallScreen = window.innerWidth <= 768;

        images.forEach(image => {
            if (isSmallScreen) {
                image.style.maxWidth = "100%";
                image.style.height = "auto";
                image.style.margin = "0 auto";
            } else {
                image.style.removeProperty("max-width");
                image.style.removeProperty("height");
                image.style.removeProperty("margin");
            }
        });
    };

    window.addEventListener("resize", adjustImagesForSmallScreens);
    adjustImagesForSmallScreens();

    // WhatsApp Integration for Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobilePattern = /^[0-9]{10,15}$/; // Allows 10 to 15 digits

            if (!name || !email || !mobile || !subject || !message) {
                alert("All fields are required.");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!mobilePattern.test(mobile)) {
                alert("Please enter a valid mobile number (only digits, 10-15 characters).");
                return;
            }

            // Your WhatsApp number (replace with your actual WhatsApp number)
            const whatsappNumber = "923075859035"; // Format: CountryCode + Number (without +)

            // Format message for WhatsApp
            const whatsappMessage = `Hello! I want to contact you.\n\n*Name:* ${name}\n*Email:* ${email}\n*Mobile:* ${mobile}\n*Subject:* ${subject}\n*Message:* ${message}`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Redirect to WhatsApp
            window.open(whatsappURL, "_blank");
        });
    }
});
