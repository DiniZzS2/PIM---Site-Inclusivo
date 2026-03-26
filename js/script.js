
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