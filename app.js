
// ... código de dados.js (se você estiver usando uma variável global)

function filtrarMangas(query) {
    const resultados = mangas.filter(manga => {
      return manga.titulo.toLowerCase().includes(query.toLowerCase()) ||
        manga.sinopse.toLowerCase().includes(query.toLowerCase());
    });
    return resultados;
  }
  
  function renderizarMangas(mangas, rank) {
    const rankSection = document.getElementById(`mangas-${rank.toLowerCase()}`);
    rankSection.innerHTML = ''; // Limpa a seção antes de adicionar os mangas
    mangas.forEach(manga => {
      const rankItem = document.createElement('div');
      rankItem.classList.add('rank-item');
      rankItem.innerHTML = `
        <img src="${manga.imagem}" alt="${manga.titulo}">
        <div class="manga-info">
          <p> <a href="${manga.link}" class="manga-title">${manga.titulo}</a> </p>
          <p>${manga.sinopse}</p>
        </div>
      `;
      rankSection.appendChild(rankItem);
    });
  }
  
  // Passo 4: Implementar o evento de pesquisa
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const query = document.querySelector('input[name="q"]').value; 
    const resultados = filtrarMangas(query);
    renderizarMangas(resultados, 'S'); // Renderiza os resultados no RANK S
    renderizarMangas(resultados, 'A'); // Renderiza os resultados no RANK A
  });
  
  // Passo 5: Renderizar os mangas iniciais
  window.onload = () => {
    renderizarMangas(mangas, 'S');
    renderizarMangas(mangas, 'A');
  };