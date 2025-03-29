//abrir e fechar a nav
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-container').classList.toggle('expanded');
});

//digitando no Habilidades
document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector(".titulo");
    const texto = "Habilidades";
    let index = 0;
    let jaDigitou = false; 

    function digitar() {
        if (index < texto.length) {
            titulo.textContent = texto.substring(0, index + 1);
            index++;
            setTimeout(digitar, 150);
        } else {
            titulo.style.borderRight = "none"; 
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !jaDigitou) {
                jaDigitou = true;
                digitar();
            }
        });
    }, { threshold: 0.6 }); 

    observer.observe(titulo);
});
