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

   
    const formInscricao = document.getElementById('form-inscricao');

    if (formInscricao) {
        formInscricao.addEventListener('submit', function(evento) {
            
           
            evento.preventDefault(); 
            
           
            const dados = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone') ? document.getElementById('telefone').value : "",
                curso: document.getElementById('curso').value,
                precisaAcessibilidade: document.getElementById('acessibilidade') ? document.getElementById('acessibilidade').checked : false
            };

        
            try {
                const resultado = window.API.criarInscricao(dados);
                
                
                alert('Inscrição confirmada com sucesso!\nSeu certificado: ' + resultado.certificado.hash);
                formInscricao.reset(); 
                
            } catch (erro) {
                
                if (erro.tipo === "VagasEsgotadas") {
                    alert("Putz, as vagas acabaram para o evento: " + erro.evento);
                } else if (erro.tipo === "InscricaoDuplicada") {
                    alert("Erro: Esse email já está inscrito (" + erro.email + ").");
                } else {
                    alert("Atenção: Verifique o campo " + erro.campo);
                }
            }
        });
    }

})