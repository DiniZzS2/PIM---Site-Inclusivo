document.addEventListener('DOMContentLoaded', () => {
    
    
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
          
            navLinks.classList.toggle('active');
            
            
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
                menuToggle.style.color = 'var(--cor-secundaria)';  
            } else {
                menuToggle.innerHTML = '☰';
                menuToggle.style.color = 'var(--cor-texto)';
            }
        });

        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuToggle.style.color = 'var(--cor-texto)';
            });
        });
    }

   
});








const btnTema = document.getElementById('btn-tema');
const body = document.body;
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark') {
    body.classList.add('dark-theme');
    if (btnTema) btnTema.textContent = '☀️';
}


if (btnTema) {
    btnTema.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        
        if (body.classList.contains('dark-theme')) {
            btnTema.textContent = '☀️';
            localStorage.setItem('tema', 'dark');
        } else {
            btnTema.textContent = '🌙';
            localStorage.setItem('tema', 'light');
        }
    });
}