// ==========================================================================
// LÓGICA DE CONTROLE DO TEMA (DARK/LIGHT MODE)
// ==========================================================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlEl = document.documentElement;

const updateThemeIcon = () => {
    if (themeIcon) {
        themeIcon.className = `fas fa-lg ${htmlEl.classList.contains('dark') ? 'fa-sun' : 'fa-moon'}`;
    }
};

const toggleTheme = () => {
    htmlEl.classList.toggle('dark');
    localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
    updateThemeIcon();
};

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
}
updateThemeIcon();


// ==========================================================================
// LÓGICA DE CONTROLE DO MENU MOBILE
// ==========================================================================
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const closeMobileMenu = () => {
    if (mobileMenu) {
        mobileMenu.style.maxHeight = null;
    }
};

const toggleMobileMenu = () => {
    if (mobileMenu) {
        if (mobileMenu.style.maxHeight) {
            closeMobileMenu();
        } else {
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        }
    }
};

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
}

document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ==========================================================================
// LÓGICA DO BOTÃO "VOLTAR AO TOPO"
// ==========================================================================
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden');
            backToTopButton.classList.add('flex');
        } else {
            backToTopButton.classList.add('hidden');
            backToTopButton.classList.remove('flex');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================================================
// LÓGICA DAS ANIMAÇÕES DE ENTRADA (FADE-IN)
// ==========================================================================
const fadeInSections = document.querySelectorAll('.fade-in-section');

if (fadeInSections.length > 0) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });
}
