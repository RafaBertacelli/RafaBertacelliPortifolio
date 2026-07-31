const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

const typed = new Typed('#typed-text', {
    strings: ['Transformando ideias em interfaces incríveis e funcionais.', 'Criando experiências digitais marcantes.', 'Desenvolvendo soluções reais com código.'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('show');
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


document.querySelector('.contato').addEventListener('click', () => {
    Swal.fire({
        title: 'Redirecionando para o WhatsApp!',
        text: 'Você será levado para uma conversa comigo. 😊',
        icon: 'info',
        confirmButtonText: 'Ir',
        confirmButtonColor: '#e54999',
        backdrop: true,
        showCloseButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            const numero = '5511982369339';
            const mensagem = encodeURIComponent('Olá! Gostaria de falar com você.');
            window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        }
    });
});


const form = document.querySelector('.contato-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Mensagem enviada!',
                text: 'Seu email foi enviado com sucesso.',
            });
            form.reset(); // Limpa os campos
        } else {
            response.json().then(data => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao enviar',
                    text: data.error || 'Tente novamente mais tarde.',
                });
            });
        }
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Erro de conexão',
            text: 'Não foi possível enviar a mensagem.',
        });
    });
});

 document.getElementById("year").textContent = new Date().getFullYear();

// Crie os objetos de áudio (substitua pelos caminhos reais dos seus arquivos)
const hoverSound = new Audio('sounds/hover-suave.mp3');
const clickSound = new Audio('sounds/click-suave.mp3');

// Abaixe um pouco o volume para ficar elegante
hoverSound.volume = 0.2;
clickSound.volume = 0.4;

// Seleciona todos os botões, links e cards de projetos
const elementosInterativos = document.querySelectorAll('button, a, .projetos-card');

elementosInterativos.forEach(el => {
    el.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0; // Reseta o som para tocar rápido
        hoverSound.play().catch(error => console.log('Autoplay bloqueado no hover'));
    });

    el.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(error => console.log('Autoplay bloqueado no click'));
    });
});

VanillaTilt.init(document.querySelectorAll(".projetos-card"), {
    max: 15, // Inclinação máxima
    speed: 400, // Velocidade da animação
    glare: true, // Efeito de brilho
    "max-glare": 0.3 // Intensidade do brilho
});
