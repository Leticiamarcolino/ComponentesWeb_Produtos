document.addEventListener("DOMContentLoaded", () => {
  const ofertasAPI = "http://localhost:5502/ofertas";
  const visuAPI = "http://localhost:5502/mais_visualizados";

  const produtos = document.getElementById("produtos");

  function carregar() {
    fetch(ofertasAPI)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((produto) => {
          const produtoHTML = `
          <componente-novo class="card container-card" style="width: 9rem; height: 19rem; font-size: 10px !important; margin: 2rem;">
            <img
              slot="imagem"
              class="card-img-top"
              src="${produto.imagem}"
              alt="${produto.titulo}"
            />
            <h5 class="card-title" style="font-size: 10px !important;" slot="nome">${produto.titulo}</h5>
            <p class="card-text" slot="avaliacoes">${
              produto.avaliacoes
            } Avaliações</p>
            <p class="card-text" slot="preco-total">DE: R$ ${produto.preco_antigo.toFixed(
              2
            )}</p>
            <p class="card-text desconto" slot="preco-desconto">POR: R$ ${produto.preco_novo.toFixed(
              2
            )}</p>
            <p class="card-text" slot="parcelado">${produto.parcelamento}</p>
          </componente-novo>
          `;

          produtos.insertAdjacentHTML("beforeend", produtoHTML);
        });
      })
      .catch((error) => console.error("erro ao carregar produtos:", error));
  }

  carregar();
});
