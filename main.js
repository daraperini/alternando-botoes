const tabs = [
  { id: 1, title: "Problems", content: "<p>My problems</p>" },
  { id: 2, title: "Output", content: "<p>My output</p>" },
  { id: 3, title: "Terminal", content: "<p>My terminal</p>" },
  { id: 4, title: "Console", content: "<p>My console</p>" },
];

const containers = [];
const botoes = [];

const containerBotao = document.createElement("div");
document.body.appendChild(containerBotao);

const containerConteudo = document.createElement('div');
document.body.appendChild(containerConteudo)

tabs.forEach((tab, index) => {
  criaElementosHTML(tab, index);
});

function criaElementosHTML(tab, index) {
  const botao = document.createElement("button");
  botao.innerHTML = tab.title;
  botoes.push(botao);

  botao.addEventListener("click", () => tornaConteudoVisivel(container, botao));

  containerBotao.appendChild(botao);

  const container = document.createElement("div");
  container.innerHTML = tab.content;
  container.classList.add("nao_visivel");

  containers.push(container);

  containerConteudo.appendChild(container);
}

let containerInicial = containers[0];
containers[0].classList.add('visivel');

let botaoInicial = botoes[0];
botaoInicial.classList.add('botao-ativo');

function tornaConteudoVisivel(container, botao) {
  let containerAtual = container;

  if (containerAtual === containerInicial) {
   return;
  }
  
  containerAtual.classList.add("visivel");
  containerAtual.classList.remove("nao_visivel");
  
  containerInicial.classList.remove("visivel");
  containerInicial.classList.add("nao_visivel");

  containerInicial = containerAtual;
  
  let botaoAtual = botao;
  
  if (botaoAtual === botaoInicial){
    return;
  }
  
  botaoAtual.classList.add('botao-ativo');
  botaoInicial.classList.remove('botao-ativo');
  
  botaoInicial = botaoAtual;
}






//HTML
//1- Criar arquivo HTML + linkar JS
//2- Criar 2 divs no body (pelo JS)
//2.1- Criar 4 botões e incluir em uma das divs + incluir classes
//2.2- Incluir as tabs na outra div + incluir classes

//CSS
//1- Criar arquivo CSS + linkar no HTML
//2- Ajustar fonte, cor, plano de fundo, etc... na tag body (incluir classe na tag body, nos botões e nas tabs)
//3- Posicionar elementos na página
//3.1-botões:
//display: flex;
//justify-content: space-between;
//ajustar mudanças de weight da fonte, adicionar border etc
//3.2-tabs:
//ver se precisa algum ajuste
//adicionar display: none em 3 das tags, adicionar display: block em 1 tag (index 0)

//JS
//1- Criar let com um valor inicial de indexAtual = 0
//2- Criar função com clique no elemento botão
//2.1- incluir evento de clique
//2.2- criar uma const que puxe o index do elemento clicado
//2.3- linkar botão com o elemento a ser mostrado (quando clicado o botão correspondente deve mostrar x tag)
//2.4- adicionar classe display:block no novo index
//2.5- remover classe display:none do novo index
//2.6- remover classe display:block do index anterior
//2.7- trocar o index atual pelo index da tag clicada (indexAtual = novoIndex)

// criar elementos (OK, fê já criou)
//incluir elementos numa tag body?
//document.createElement('tagname')  -> preciso ter um html criado para conseguir selecionar o doc e incluir uma tag?
//body.appendChild(tabs) ???? -> para incluir tabs no body do html

// posicionar elementos na página
//títulos lado a lado, com espaçamento (display flex, gap) (posso botar os títulos dentro de uma tag header?) (poderia só setar classes no próprio title, sem precisar botar dentro da tag)
//conteúdo: posso colocar dentro de uma div? (consigo fazer essa divisão de conteúdos dentro de um mesmo elemento?) (assim conseguiria incluir classes em cada parte dos elementos) (display block) (poderia só setar classes no próprio content, sem precisar botar dentro da tag)
//ajustar cor, fonte, plano de fundo etc

// iniciar com o primeiro elemento em tela
//setar pelo index 0 e incluir uma classe com display block no conteúdo do elemento (criar uma let index = 0 e alterar conforme cliques)
//outros elementos incluir classe com display none no conteúdo
//todos os títulos devem ficar em tela todo o tempo (todos devem ter display flex o tempo todo e não devem ser alterados)
//quando o elemento for clicado o conteúdo deve aparecer, sem remover o título de nenhum elemento

// incluir um index inicial (posso usar o index 0, que é o que quero que inicie sempre?)
//ir alterando o index inicial de acordo com o index do elemento clicado (exibir (indexElemento))

// adicionar evento de clique em todos os elementos (forEach?)
//a partir do clique, passar para a página correspondente do index
//no momento do clique buscar o index do elemento sendo clicado
//criar uma função que utilize o index para fazer o seguinte:
//utilizar o index do elemento para remover a classe display none do conteúdo
//utilizar o index do elemento para incluir a classe display block no conteúdo
//pegar o index anterior e remover a classe display block (preciso incluir a classe display none?)
