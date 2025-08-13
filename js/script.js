function transicaoPagina() {
    const elemento = document.querySelector('.animacao-div');
    elemento.classList.add('animacao-fade-out'); // Adiciona a classe de animação
  
    setTimeout(() => {
      window.location.href = 'pagina2.html'; // Redireciona após a animação
    }, 1000); // Tempo da animação (1 segundo)
  }
  
  // Chama a função ao carregar a página ou com um evento
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(transicaoPagina, 3000); // Inicia a transição após 3 segundos
  });