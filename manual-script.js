document.addEventListener('DOMContentLoaded', () => {
    const testButtons = document.querySelectorAll('.test-btn');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const copyFunctionButtons = document.querySelectorAll('.copy-btn-inline');

    // "Testar no Editor" buttons
    testButtons.forEach(button => {
        button.addEventListener('click', () => {
            const formulaToTest = button.getAttribute('data-formula');
            if (formulaToTest) {
                localStorage.setItem('rocket_formula_to_test', formulaToTest);
                // Tenta focar em uma janela existente, senão abre uma nova.
                const editorWindow = window.open('index.html', 'rocket_editor');
                if (editorWindow) {
                    editorWindow.focus();
                }
            }
        });
    });

    // "Copiar" buttons for function signatures
    copyFunctionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const signatureContainer = e.target.closest('.function-signature');
            if (!signatureContainer) return;

            const codeElement = signatureContainer.querySelector('code');
            if (!codeElement) return;

            const textToCopy = codeElement.textContent.replace(/‘|’/g, '"'); // Replace curly quotes with straight quotes

            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Copiado!';
                button.style.backgroundColor = 'var(--success-color)';
                button.style.color = 'var(--background-color)';

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.style.color = '';
                }, 1500);
            }).catch(err => {
                console.error('Falha ao copiar função: ', err);
                button.textContent = 'Erro!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 1500);
            });
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