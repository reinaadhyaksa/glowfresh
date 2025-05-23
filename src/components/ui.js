export const Card = (logo, title, text) => {
    return `
        <div class="benefit-card" itemscope itemtype="https://schema.org/Product">
            <div class="text-5xl text-primary mb-4" aria-hidden="true">
                <i class="fas ${logo}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3" itemprop="name">${title}</h3>
            <p class="text-gray-600" itemprop="description">
                ${text}
            </p>
        </div>
    `;
};

export const Testimonial = (text, name) => {
    return `
         <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
            <p class="italic text-gray-700 mb-4" itemprop="reviewBody">
                "${text}"
            </p>
            <p class="font-bold text-primary" itemprop="author">– ${name}</p>
            <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" class="hidden">
                <meta itemprop="worstRating" content="1">
                <span itemprop="ratingValue">5</span>/
                <span itemprop="bestRating">5</span>
            </div>
        </div>
    `;
};

export const HandleFunction = () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    document.addEventListener("DOMContentLoaded", function () {
        const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.add("loaded");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

}