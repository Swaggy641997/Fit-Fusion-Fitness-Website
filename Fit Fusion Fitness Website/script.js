 // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');

        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mainNav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Testimonial Slider
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const sliderDots = document.querySelectorAll('.slider-dot');

        let currentSlide = 0;

        function showSlide(index) {
            testimonialItems.forEach(item => item.classList.remove('active'));
            sliderDots.forEach(dot => dot.classList.remove('active'));
            
            testimonialItems[index].classList.add('active');
            sliderDots[index].classList.add('active');
            currentSlide = index;
        }

        sliderDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });

        // Auto slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonialItems.length;
            showSlide(currentSlide);
        }, 5000);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
                document.querySelector('header').style.background = 'rgba(255,255,255,0.98)';
            } else {
                document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                document.querySelector('header').style.background = 'var(--light)';
            }
        });