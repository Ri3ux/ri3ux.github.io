/* ==========================
   CAMBIO DE IDIOMA EN LA PÁGINA
========================== */
function switchLanguage(lang) {
    // Cambiar clase en body
    document.body.className = 'language-' + lang;

    // Actualizar botones activos
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(lang));
    });
}

/* ==========================
   DESPLAZAR HACIA ARRIBA
========================== */
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'flex'; // Show the button
    } else {
        scrollToTopButton.style.display = 'none'; // Hide the button
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

/* ==========================
   DETECTAR IDIOMA DEL NAVEGADOR
========================== */
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage; // Get browser language
    const lang = userLang.startsWith('es') ? 'es' : 'en'; // Set ES if Spanish, else EN

    // Cambiar la clase en el body para que coincida con el idioma detectado
    document.body.className = 'language-' + lang;

    // Actualizar botones activos
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(lang));
    });
}

// Llamar a la función al cargar la página
window.onload = detectLanguage;

/* ==========================
   SWITCH PARA SELECCIONAR EL TEMA
========================== */
function toggleTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const theme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    // 1. ¿El usuario ya eligió un tema antes?
    const storageTheme = localStorage.getItem('theme');

    // 2. Si no, usamos el esquema de color del sistema
    const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // 3. El que tenga prioridad será el que se aplique
    const finalTheme = storageTheme || systemColorScheme;

    // 4. Aplicar el tema
    document.documentElement.setAttribute('data-theme', finalTheme);

    // 5. Sincronizar el switch visual
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.checked = finalTheme === 'dark';
        themeToggle.addEventListener('change', toggleTheme);
    }
}

// Cargar el tema cuando la página esté lista
window.addEventListener('DOMContentLoaded', loadTheme);