// Torna o link de âncora mais suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Comportamento do link de voltar ao topo da página
document.querySelector('#home').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
