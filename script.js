document.addEventListener('DOMContentLoaded', () => {
    /* Smooth Scrolling with Dynamic Navigation Height */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('nav')?.offsetHeight || 0;

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });

                if (window.innerWidth <= 884) {
                    setTimeout(cancel, 600);
                }
            }
        });
    });

    /* Dynamic Testimonial Section */
    const testimonials = [
        
    ];

    const testimonialContainer = document.querySelector('.testimonial-container');

    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <p>"${testimonial.quote}"</p>
                <span class="testimonial-author">${testimonial.author}</span>
            `;
            testimonialContainer.appendChild(testimonialCard);
        });
    }

    /* Dynamic Project Gallery */
    const projectData = [
        { img: 'project1.jpg', title: 'Project 1' },
        { img: 'project2.jpg', title: 'Project 2' },
        { img: 'project3.jpg', title: 'Project 3' },
        { img: 'project4.jpg', title: 'Project 4' }
    ];

    const gallery = document.querySelector('.projects-gallery');

    if (gallery) {
        projectData.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <img src="${project.img}" alt="${project.title}">
                <h3>${project.title}</h3>
            `;
            gallery.appendChild(projectItem);
        });
    }

    // Smooth scroll logic
const container = document.querySelector('.achievements-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = 400;

// Scroll left
prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Scroll right
nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

    /* Typewriter Effect */
    const text = [
        "Unbothered",
        "Talkative",
        "Friendly",
        "Straightforward",
        "Honest Person",
        "Respectful"
        
    ];
    let speed = 100;
    const textElement = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter() {
        if (textElement && characterIndex < text[textIndex].length) {
            textElement.innerHTML += text[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else if (textElement) {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElement && textElement.innerHTML.length > 0) {
            textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % text.length;
            characterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    // Start the typewriter only if the element is present
    if (textElement) typeWriter();
});
