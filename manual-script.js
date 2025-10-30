document.addEventListener('DOMContentLoaded', () => {
    const testButtons = document.querySelectorAll('.test-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');

    // "Testar no Editor" buttons
    testButtons.forEach(button => {
        button.addEventListener('click', () => {
            const formulaToTest = button.getAttribute('data-formula');
            if (formulaToTest) {
                localStorage.setItem('rocket_formula_to_test', formulaToTest);
                const editorWindow = window.open('index.html', 'rocket_editor');
                editorWindow.focus();
            }
        });
    });

    // Back to Top Button
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
