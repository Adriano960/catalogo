const produtos = [
  {
    nome: "Perfume Elegance",
    descricao: "Fragrância suave e marcante.",
    preco: "R$ 129,90",
    imagem: "./imagens/perfume.jpg"
  },
  {
    nome: "Creme Hidratante",
    descricao: "Hidratação profunda para todos os tipos de pele.",
    preco: "R$ 59,90",
    imagem: "./imagens/creme.jpg"
  },
  {
    nome: "Batom Luxo",
    descricao: "Cor intensa e duradoura.",
    preco: "R$ 39,90",
    imagem: "./imagens/batom.jpg"
  },
  {
    nome: "Shampoo Revitalizante",
    descricao: "Limpeza suave e brilho intenso para seus cabelos.",
    preco: "R$ 34,90",
    imagem: "./imagens/shampoo.jpg"
  },
  {
    nome: "Máscara Facial Detox",
    descricao: "Purifica e renova a pele do rosto.",
    preco: "R$ 44,90",
    imagem: "./imagens/mascara.jpg"
  },
  {
    nome: "Óleo Corporal Relaxante",
    descricao: "Aromaterapia e hidratação para o corpo.",
    preco: "R$ 69,90",
    imagem: "./imagens/oleo.jpg"
  },
  {
    nome: "leKit Maquiagem Completo",
    descricao: "Tudo para um look perfeito: sombras, blush, pó e mais.",
    preco: "R$ 199,90",
    imagem: "./imagens/kit-maquiagem.jpg"
  },
  {
    nome: "Esmalte Fashion",
    descricao: "Cores vibrantes e longa duração para suas unhas.",
    preco: "R$ 14,90",
    imagem: "./imagens/esmalte.jpg"
  },
  {
    nome: "Protetor Solar FPS 50",
    descricao: "Proteção máxima contra raios UVA e UVB.",
    preco: "R$ 49,90",
    imagem: "./imagens/prtetor-solar.jpg"
   
  },
  // Novos produtos de roupas e sapatos
  {
    nome: "Camiseta Básica Masculina",
    descricao: "Conforto e estilo para o dia a dia.",
    preco: "R$ 39,90",
    imagem: "./imagens/camiseta-masculina.jpg"
  },
  {
    nome: "Vestido Floral Feminino",
    descricao: "Leveza e elegância para todas as ocasiões.",
    preco: "R$ 89,90",
    imagem: "./imagens/vestido-floral.jpg"
  },
  {
    nome: "Calça Jeans Skinny",
    descricao: "Modelagem moderna e confortável.",
    preco: "R$ 119,90",
    imagem: "./imagens/calca-jeans.jpg"
  },
  {
    nome: "Tênis Esportivo Unissex",
    descricao: "Ideal para caminhadas e academia.",
    preco: "R$ 149,90",
    imagem: "./imagens/tenis-esportivo.jpg"
  },
  {
    nome: "Sandália Feminina Confort",
    descricao: "Beleza e conforto para seus pés.",
    preco: "R$ 79,90",
    imagem: "./imagens/sandalia-feminina.jpg"
  },
  {
    nome: "Blusa Manga Longa",
    descricao: "Perfeita para dias mais frios.",
    preco: "R$ 59,90",
    imagem: "./imagens/blusa-manga-longa.jpg"
  },
  {
    nome: "Jaqueta Jeans",
    descricao: "Clássica e versátil para qualquer look.",
    preco: "R$ 159,90",
    imagem: "./imagens/jaqueta-jeans.jpg"
  },
  {
    nome: "Saia Midi Plissada",
    descricao: "Elegância e movimento em uma peça só.",
    preco: "R$ 99,90",
    imagem: "./imagens/saia-midi.jpg"
  },
  {
    nome: "Bota Cano Curto",
    descricao: "Estilo e proteção para seus pés.",
    preco: "R$ 189,90",
    imagem: "./imagens/bota-cano-curto.jpg"
  },
  {
    nome: "Camisa Social Masculina",
    descricao: "Ideal para trabalho ou eventos formais.",
    preco: "R$ 89,90",
    imagem: "./imagens/camisa-social.jpg"
  },
  // Exemplo de produtos com lançamentos
  {
    nome: "Tênis Casual Branco",
    descricao: "Lançamento: estilo e conforto para o dia a dia.",
    preco: "R$ 159,90",
    imagem: "./imagens/tenis-casual.jpg",
    lancamento: true
  },
  {
    nome: "Jaqueta Corta Vento",
    descricao: "Lançamento: proteção leve contra o vento.",
    preco: "R$ 139,90",
    imagem: "./imagens/jaqueta-corta-vento.jpg",
    lancamento: true
  },
  {
    nome: "Bolsa Transversal Fashion",
    descricao: "Lançamento: praticidade e elegância.",
    preco: "R$ 89,90",
    imagem: "./imagens/bolsa-transversal.jpg",
    lancamento: true
  }
];

const carrinho = [];
const catalogo = document.getElementById('catalogo');
const carrinhoContainer = document.getElementById('carrinho-container');
const sacolaContador = document.getElementById('sacola-contador');
const btnSacola = document.getElementById('btn-sacola');

// Atualiza o contador da sacola
function atualizarSacola() {
  sacolaContador.textContent = carrinho.length;
}

// Atualiza o conteúdo do carrinho/sacola
function atualizarCarrinho() {
  if (!carrinhoContainer) return;
  const lista = carrinhoContainer.querySelector('#carrinho-lista');
  const total = carrinhoContainer.querySelector('#carrinho-total');
  if (!lista || !total) return;

  lista.innerHTML = '';
  let soma = 0;
  carrinho.forEach((produto, index) => {
    const li = document.createElement('li');
    // conteúdo do item com botão remover
    li.innerHTML = `
      <div class="carrinho-item">
        <span class="carrinho-nome">${produto.nome}</span>
        <span class="carrinho-preco">${produto.preco}</span>
        <button class="btn-remover" data-index="${index}">Remover</button>
      </div>
    `;
    lista.appendChild(li);
    soma += parseFloat(produto.preco.replace('R$', '').replace(',', '.'));
  });
  
  // botão finalizar compra
  const finalizarWrapper = document.createElement('div');
  finalizarWrapper.className = 'finalizar-wrapper';
  finalizarWrapper.innerHTML = `
    <button id="btn-finalizar" class="btn-finalizar">Finalizar Compra</button>
  `;
  // garante que exista apenas um botão no container
  const existingFinal = carrinhoContainer.querySelector('.finalizar-wrapper');
  if (existingFinal) existingFinal.remove();
  carrinhoContainer.appendChild(finalizarWrapper);

  // delegação de evento para remover itens e finalizar
  lista.querySelectorAll('.btn-remover').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = Number(this.getAttribute('data-index'));
      removerDoCarrinho(idx);
    });
  });
  finalizarWrapper.querySelector('#btn-finalizar').addEventListener('click', function() {
    finalizarCompra();
  });
  total.textContent = `Total: R$ ${soma.toFixed(2).replace('.', ',')}`;
}

// Remove item do carrinho por índice
function removerDoCarrinho(index) {
  if (index < 0 || index >= carrinho.length) return;
  carrinho.splice(index, 1);
  atualizarCarrinho();
  atualizarSacola();
}

// Finaliza a compra: monta mensagem e abre WhatsApp
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Sua sacola está vazia. Adicione produtos antes de finalizar.');
    return;
  }
  const numero = '5589981485667'; // número informado
  let soma = 0;
  const itensTexto = carrinho.map(p => {
    soma += parseFloat(p.preco.replace('R$', '').replace(',', '.'));
    return `- ${p.nome} (${p.preco})`;
  }).join('%0A'); // quebra de linha para URL

  const mensagem = `Olá!%20Gostaria%20de%20finalizar%20minha%20compra.%0A%0AItens:%0A${encodeURIComponent(itensTexto)}%0A%0ATotal:%20R$%20${soma.toFixed(2).replace('.', ',')}`;
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, '_blank');
}

// Função para adicionar ao carrinho e abrir a sacola
function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  atualizarCarrinho();
  atualizarSacola();
  // Mostra a sacola/carrinho ao adicionar
  if (carrinhoContainer) {
    carrinhoContainer.style.display = 'block';
    carrinhoContainer.scrollIntoView({ behavior: 'smooth' });
  }
}

// Função para renderizar os produtos (usada para pesquisa)
function renderizarProdutos(lista) {
  const catalogo = document.getElementById('catalogo');
  catalogo.innerHTML = '';
  lista.forEach((produto, index) => {
    const card = document.createElement('div');
    card.className = 'product';

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <div class="price">${produto.preco}</div>
      <button class="btn-adicionar" data-index="${index}">Adicionar</button>
      <a class="btn-comprar" href="https://wa.me/5589981485667?text=Olá!%20Tenho%20interesse%20em%20comprar%20o%20produto:%20${encodeURIComponent(produto.nome)}%20por%20${encodeURIComponent(produto.preco)}" target="_blank">Comprar</a>
    `;

    catalogo.appendChild(card);
  });

  document.querySelectorAll('.btn-adicionar').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      adicionarAoCarrinho(lista[index]);
    });
  });
}

// Inicializa o catálogo com todos os produtos
renderizarProdutos(produtos);

// Pesquisa de produtos
const barraPesquisa = document.getElementById('barra-pesquisa');
barraPesquisa.addEventListener('input', function() {
  const termo = this.value.toLowerCase();
  const filtrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(termo) ||
    produto.descricao.toLowerCase().includes(termo)
  );
  renderizarProdutos(filtrados);
});

// Filtro de lançamentos
const btnLancamentos = document.getElementById('btn-lancamentos');
btnLancamentos.addEventListener('click', function() {
  const filtrados = produtos.filter(produto => produto.lancamento);
  renderizarProdutos(filtrados);
});

// Evento para mostrar SEMPRE a sacola ao clicar no botão da sacola
if (btnSacola && carrinhoContainer) {
  btnSacola.addEventListener('click', () => {
    carrinhoContainer.style.display = 'block';
    carrinhoContainer.scrollIntoView({ behavior: 'smooth' });
    atualizarCarrinho(); // garante que a lista está atualizada ao abrir
  });
}

// Inicializa a sacola e carrinho
window.addEventListener('DOMContentLoaded', () => {
  atualizarSacola();
  atualizarCarrinho();
  if (carrinhoContainer) carrinhoContainer.style.display = 'none';
});

// CSS sugerido:
// .lancamento-badge {
//   display: inline-block;
//   background: #ff9800;
//   color: #fff;
//   font-size: 0.85rem;
//   font-weight: bold;
//   border-radius: 6px;
//   padding: 2px 10px;
//   margin-bottom: 6px;
//   margin-top: 4px;
// }
