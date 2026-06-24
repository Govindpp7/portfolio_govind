// ==========================================
// PROJECT DATA FOR MODAL POPUP
// ==========================================
const projectData = {
    1: {
        title: "Port Management System",
        icon: "fa-ship",
        tags: ["React", "JavaScript", "Databases", "Dashboard"],
        desc: "A high-fidelity cargo and terminal logistics platform designed using React for front-end interface modeling and state management. The dashboard enables harbor operators to monitor vessel arrival statuses, check real-time cargo distribution patterns, schedule tugboat guides, and map container storage capacities inside local database grids. It simulates operations under high data-load constraints to prevent cargo bottlenecking.",
        stack: "React, JavaScript, CSS3 Grid, LocalStorage, SQL DB Schema",
        category: "Web Application / Database Management"
    },
    2: {
        title: "Parking Scheduler",
        icon: "fa-square-parking",
        tags: ["Java", "OOPs", "Algorithms", "Scheduling"],
        desc: "An object-oriented Java module designed to optimize vehicle slot distribution in multi-story parking structures. It utilizes customized sorting algorithms to locate the closest vacant space compatible with the incoming vehicle's size. Additionally, it records parking durations, logs entry/exit timetables, and processes automated billing invoices, ensuring high memory efficiency.",
        stack: "Java Standard Edition (JDK 17), Console Interface",
        category: "Systems Design / Object-Oriented Programming"
    },
    3: {
        title: "Concert Ticket Booking",
        icon: "fa-ticket",
        tags: ["C Language", "File Handling", "CLI", "Data Structures"],
        desc: "A CLI ticketing engine coded in standard C. It utilizes memory-efficient struct buffers and direct binary file reading/writing routines for data persistence. Users can search seat configurations in real-time, register bookings, and update structural seat status grids. This program represents low-latency processing and reliable local storage management.",
        stack: "C language, GCC Compiler, Binary File-System I/O",
        category: "Systems Programming / Console Utility"
    }
};

// ==========================================
// DOM ELEMENTS SELECTORS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const typingText = document.getElementById("typing-text");
    const backToTopBtn = document.getElementById("back-to-top");
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");
    const revealElements = document.querySelectorAll(".reveal");
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    // ==========================================
    // 0. SAMURAI TEMPLE PRELOADER ENGINE
    // ==========================================
    const preloader = document.getElementById("preloader");
    const preloaderPercent = document.getElementById("preloader-percent");
    const chargeRingFill = document.getElementById("charge-ring-fill");
    const loaderShip = document.getElementById("loader-ship");
    const preloaderFlash = document.getElementById("preloader-flash");
    const preloaderSlash = document.getElementById("preloader-slash");
    const preloaderStatusMsg = document.getElementById("preloader-status-msg");
    const sakuraContainer = document.getElementById("sakura-container");

    // Initialize Sakura Particle Effect
    if (sakuraContainer) {
        const petalCount = 24;
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement("span");
            petal.className = "sakura-petal";
            
            const size = Math.random() * 8 + 6; // 6px to 14px
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.top = `${Math.random() * -15}%`;
            
            const duration = Math.random() * 6 + 7; // 7s to 13s
            const delay = Math.random() * 8; // 0s to 8s
            petal.style.animation = `sakura-fall ${duration}s linear ${delay}s infinite`;
            
            // Random initial rotation and opacity
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            petal.style.opacity = Math.random() * 0.4 + 0.5;
            
            sakuraContainer.appendChild(petal);
        }
    }

    if (preloader && preloaderPercent) {
        document.body.style.overflow = "hidden";
        
        let count = 0;
        const maxPercent = 100;
        const circumference = 597; // 2 * PI * 95
        
        // Initial setup for the SVG ring fill and CSS custom property
        if (chargeRingFill) {
            chargeRingFill.style.strokeDasharray = `${circumference}`;
            chargeRingFill.style.strokeDashoffset = `${circumference}`;
        }
        preloader.style.setProperty('--progress', '0');
        
        const tick = () => {
            // Random increments to simulate progress load steps
            const increment = Math.floor(Math.random() * 3) + 1;
            count += increment;
            
            if (count >= maxPercent) {
                count = maxPercent;
                // Run final 100% samurai strike sequence
                triggerTempleExit();
            } else {
                // Update percentage UI
                preloaderPercent.textContent = String(count).padStart(2, '0');
                
                // Update SVG ring strokeoffset
                if (chargeRingFill) {
                    const offset = circumference - (count / 100) * circumference;
                    chargeRingFill.style.strokeDashoffset = offset;
                }
                
                // Update CSS custom property for energy disc expansion
                preloader.style.setProperty('--progress', count / 100);
                
                // Schedule next tick
                setTimeout(tick, Math.random() * 15 + 15);
            }
        };
        
        // Start counter counting
        setTimeout(tick, 20);

        function triggerTempleExit() {
            // 1. Update text fields to 100% and new state status
            preloaderPercent.textContent = "100";
            if (chargeRingFill) {
                chargeRingFill.style.strokeDashoffset = "0";
            }
            preloader.style.setProperty('--progress', '1');
            if (preloaderStatusMsg) {
                preloaderStatusMsg.textContent = "SWORD STRIKE INITIALIZED...";
                preloaderStatusMsg.style.color = "var(--crimson)";
            }

            // 2. Active Screen Flash & Sword Slash Trace
            if (preloaderFlash) preloaderFlash.classList.add("active");
            if (preloaderSlash) preloaderSlash.classList.add("active");

            // 3. Antigravity ship pitch down/forward (anticipation)
            if (loaderShip) {
                loaderShip.classList.add("anticipate");
            }

            // 4. After 150ms pitch down, pull up and blast vertically off screen
            setTimeout(() => {
                if (loaderShip) {
                    loaderShip.classList.remove("anticipate");
                    loaderShip.classList.add("launch");
                }
            }, 150);

            // 5. Slide curtain up and load main site after 350ms total warp
            setTimeout(() => {
                preloader.classList.add("loaded");
                document.body.style.overflow = "auto";
                
                setTimeout(() => {
                    document.body.classList.add("page-loaded");
                }, 100);
            }, 350);
        }
    } else {
        document.body.classList.add("page-loaded");
    }

    // ==========================================
    // 1. MOBILE MENU TOGGLE
    // ==========================================
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when nav link is clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // ==========================================
    // 2. SCROLL NAVIGATION & BACK-TO-TOP BUTTON
    // ==========================================
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        if (window.scrollY > 500) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ==========================================
    // 3. TYPING ANIMATION (HERO SECTION)
    // ==========================================
    const professions = [
        "a Systems Engineer.",
        "a Full-Stack Architect.",
        "a Database Specialist.",
        "a Next-Gen Software Developer."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 150;

    function typeEffect() {
        const currentWord = professions[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeDelay = 75; // Faster deletion
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeDelay = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeDelay = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % professions.length;
            typeDelay = 500; // Pause before starting new word
        }

        setTimeout(typeEffect, typeDelay);
    }
    
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }

    // ==========================================
    // 4. SCROLL REVEAL & SKILL BARS ANIMATION
    // ==========================================
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Skill Bars animation logic
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const percent = bar.getAttribute("data-percent");
                    bar.style.width = percent;
                });
                skillsObserver.disconnect(); // Only animate once
            }
        });
    }, {
        threshold: 0.2
    });

    const skillsSection = document.querySelector(".skills");
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // ==========================================
    // 5. CONTACT FORM INTERACTIVE LOGIC
    // ==========================================
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector(".submit-btn");
            const originalBtnText = submitBtn.innerHTML;
            
            // Loading visual feedback
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i class="fa-solid fa-spinner fa-spin"></i>`;
            
            const nameVal = document.getElementById("name").value.trim();
            const emailVal = document.getElementById("email").value.trim();
            const messageVal = document.getElementById("message").value.trim();
            
            // Simulate API request delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                if (nameVal && emailVal && messageVal) {
                    formResponse.className = "form-response-msg success";
                    formResponse.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${nameVal}</strong>! Your message has been sent successfully. I will get back to you soon.`;
                    contactForm.reset();
                } else {
                    formResponse.className = "form-response-msg error";
                    formResponse.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> There was an error processing your request. Please check your fields and try again.`;
                }
                
                // Hide message after 8 seconds
                setTimeout(() => {
                    formResponse.style.display = "none";
                }, 8000);
            }, 1800);
        });
    }

    // ==========================================
    // 6. HERO SECTION SOUL AURA ROTATION & PULSING
    // ==========================================
    const soulParticles = document.querySelectorAll(".soul-particle");
    
    if (soulParticles.length > 0) {
        let rotationAngle = 0;
        let isMouseActive = true; // Default to true for mobile touch fallback
        let lastTime = 0;
        
        // Detect touch device
        const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        
        if (!isTouchDevice) {
            isMouseActive = false;
            
            // Track mouse presence in viewport
            document.addEventListener("mouseenter", () => {
                isMouseActive = true;
            });
            
            document.addEventListener("mouseleave", () => {
                isMouseActive = false;
            });
            
            // Keep active state while mouse moves inside viewport
            let mouseMoveTimeout;
            document.addEventListener("mousemove", () => {
                isMouseActive = true;
                clearTimeout(mouseMoveTimeout);
                // After 4 seconds of no movement, we consider the mouse "inactive"
                mouseMoveTimeout = setTimeout(() => {
                    isMouseActive = false;
                }, 4000);
            });
        }
        
        const animateSoulAura = (time) => {
            if (!lastTime) lastTime = time;
            const delta = time - lastTime;
            lastTime = time;
            
            // Increment rotation angle if mouse is active or on touch device
            if (isMouseActive || isTouchDevice) {
                rotationAngle += 0.015 * (delta / 16.67);
            } else {
                // If mouse inactive, swirl very slowly to sustain ambient pulse
                rotationAngle += 0.003 * (delta / 16.67);
            }
            
            soulParticles.forEach((particle, index) => {
                const direction = index % 2 === 0 ? 1 : -1;
                // Distribute speed scaling factor across particles
                const speedFactor = 0.8 + (index * 0.35);
                const angle = (rotationAngle * (180 / Math.PI)) * speedFactor * direction;
                
                // Cyclical pulsing opacity via sine wave
                const phaseOffset = index * (Math.PI / 3);
                const pulseBase = 0.45;
                const pulseAmplitude = 0.25;
                let opacity = pulseBase + Math.sin(rotationAngle * 1.5 + phaseOffset) * pulseAmplitude;
                
                // Apply lower visibility when mouse is inactive and not touch
                if (!isMouseActive && !isTouchDevice) {
                    opacity *= 0.55;
                }
                
                // Clamp opacity between 0.1 and 0.9 to maintain visibility
                opacity = Math.max(0.1, Math.min(0.9, opacity));
                
                // GPU-accelerated translate3d + rotate around center
                particle.style.transform = `translate3d(-50%, -50%, 0) rotate(${angle}deg)`;
                particle.style.opacity = opacity.toFixed(3);
            });
            
            requestAnimationFrame(animateSoulAura);
        };
        
        requestAnimationFrame(animateSoulAura);
    }
});

// ==========================================
// 6. DYNAMIC PROJECT DETAIL MODAL FUNCTIONS
// ==========================================
window.openProjectModal = function(id) {
    const data = projectData[id];
    if (!data) return;
    
    const projectModal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalTags = document.getElementById("modal-tags");
    const modalDesc = document.getElementById("modal-desc");
    const modalStack = document.getElementById("modal-stack");
    const modalCategory = document.getElementById("modal-category");
    
    if (!projectModal) return;

    // Set dynamic elements
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;
    if (modalStack) modalStack.textContent = data.stack;
    if (modalCategory) modalCategory.textContent = data.category;
    
    // Update header visual icon
    if (modalImage) modalImage.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
    
    // Populate Tags
    if (modalTags) {
        modalTags.innerHTML = "";
        data.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "project-tag";
            span.textContent = tag;
            modalTags.appendChild(span);
        });
    }
    
    // Show Modal
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable scroll when modal is open
};

window.closeProjectModal = function() {
    const projectModal = document.getElementById("project-modal");
    if (projectModal) {
        projectModal.classList.remove("active");
    }
    document.body.style.overflow = "auto"; // Re-enable scroll
};

// Close modal if user clicks outside the modal container
window.addEventListener("click", (e) => {
    const projectModal = document.getElementById("project-modal");
    if (projectModal && e.target === projectModal) {
        closeProjectModal();
    }
});

// ==========================================
// 7. CUSTOM MOUSE CURSOR SYSTEM (SAMURAI SWORD)
// ==========================================
(function() {
    const ringEl = document.getElementById('custom-cursor-ring');
    
    if (!ringEl) return;
    
    // Position targets (mouseX, mouseY) and interpolations (ring)
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;
    let lastSpawnX = -100;
    let lastSpawnY = -100;

    // Detect mousemove to set target coordinates
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Fast snap on first interaction to prevent top-left flash
        if (!hasMoved) {
            ringX = mouseX;
            ringY = mouseY;
            hasMoved = true;
            lastSpawnX = mouseX;
            lastSpawnY = mouseY;
        }
    });

    // Spawn linear-stretched crimson star streaks projecting outward from the handle
    const spawnSparks = (x, y) => {
        const swordLength = 45; // Handle position offset from blade tip
        const isSlicing = document.body.classList.contains('cursor-slicing');
        const angleDeg = isSlicing ? 45 : -45;
        const angleRad = angleDeg * Math.PI / 180;
        
        // Compute handle coordinates based on tip (x, y) and active angle
        const handleX = x + swordLength * Math.sin(angleRad);
        const handleY = y + swordLength * Math.cos(angleRad);
        
        const count = 4 + Math.floor(Math.random() * 2); // Spawns 4 or 5 sparks
        const container = document.body;
        
        for (let i = 0; i < count; i++) {
            const spark = document.createElement('div');
            spark.className = 'hyperspace-spark';
            
            // Random radial direction
            const phi = Math.random() * 2 * Math.PI;
            const phiDeg = phi * 180 / Math.PI;
            
            // Random travel distance
            const dist = 20 + Math.random() * 35;
            const travelX = dist * Math.cos(phi);
            const travelY = dist * Math.sin(phi);
            
            // Send coordinates to CSS variables for hardware acceleration
            spark.style.setProperty('--start-x', `${handleX}px`);
            spark.style.setProperty('--start-y', `${handleY}px`);
            spark.style.setProperty('--angle', `${phiDeg}deg`);
            spark.style.setProperty('--travel-x', `${travelX}px`);
            spark.style.setProperty('--travel-y', `${travelY}px`);
            
            container.appendChild(spark);
            
            // Clean up DOM after animation completes
            setTimeout(() => {
                spark.remove();
            }, 550);
        }
    };

    // Hardware accelerated RAF render loop using translate3d
    const renderCursor = () => {
        if (hasMoved) {
            // Apply fluid linear interpolation (lerp) with elastic lag
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;
            
            ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            
            // Generate sparks if the sword moves past the threshold
            const distMoved = Math.hypot(ringX - lastSpawnX, ringY - lastSpawnY);
            if (distMoved > 6) {
                spawnSparks(ringX, ringY);
                lastSpawnX = ringX;
                lastSpawnY = ringY;
            }
        }
        
        requestAnimationFrame(renderCursor);
    };
    
    // Start RAF rendering loop
    requestAnimationFrame(renderCursor);

    // Click/Slash Event Listeners
    window.addEventListener('mousedown', () => {
        document.body.classList.add('cursor-slicing');
    });
    
    window.addEventListener('mouseup', () => {
        document.body.classList.remove('cursor-slicing');
    });

    // Event delegation for hover states on links, buttons, and clickable elements
    window.addEventListener('mouseover', (e) => {
        const interactive = e.target.closest('a, button, .nav-btn, .menu-toggle, .btn-primary, .btn-secondary, .glass-card, [role="button"]');
        if (interactive) {
            document.body.classList.add('cursor-hovering');
        } else {
            document.body.classList.remove('cursor-hovering');
        }
    });
})();
