//  Mudando o texto de um parágrafo
function mudarTextoParagrafo() {
    // Acessa o elemento a partir do seu ID
    const paragrafo = document.getElementById('identificadorDoParagrafo');

    // Muda o texto do elemento
    paragrafo.textContent = 'Olá, alunos!';
}


// Modificando atributos HTML
function mudaImagem() {
    // Acessa o elemento a partir do seu ID
    const imagem = document.getElementById('identificadorDaImagem');

    // Muda o src da imagem
    imagem.src = 'cachorro.png';
    imagem.alt = 'Cachorro';
}


// Adicionando e removendo classes CSS
function mudaAsClassesCss() {
    // Acessa o elemento a partir do seu ID
    const div = document.getElementById('identificadorDaDiv');

    // Adiciona a classe CSS
    div.classList.add('destaque');

    // Remove a classe CSS
    div.classList.remove('caixa');
}

// Manipulando eventos
function cliqueDoBotao() {
    // Acessa o elemento a partir do seu ID
    const botao = document.getElementById('meuBotao');

    // Adiciona um ouvinte ao evento de clique do botão
    botao.addEventListener('click', function() {
        alert('Botão clicado!');
    });
}

// Executa a função ao carregar o arquivo
cliqueDoBotao();

// Adiciona um novo elemento HTML
function adicionarNovoElemento() {
    // Acessa o elemento a partir do seu ID
    const container = document.getElementById('meuContainer');

    // Cria novo elemento
    const paragrafo = document.createElement('p');

    // Adiciona texto ao elemento
    paragrafo.textContent = 'Oi! Eu sou novo por aqui.';

    // Adiciona o elemento ao container
    container.appendChild(paragrafo);
}

function criarTabela(){
    const listaDeAlunos = ["João", "Maria", "José", "Pedro"];

    const container = document.getElementById('meuContainer');

    const tabela = document.createElement('table');

    listaDeAlunos.forEach(function(aluno) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = aluno;
        tr.appendChild(td);
        tabela.appendChild(tr);
    });
    container.appendChild(tabela);
}
