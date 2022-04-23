let numeroDaPergunta = 0;

function criarQuizz() {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    app.innerHTML = `
    <main class="tela3">
        <h1>Comece pelo começo</h1>
        <div class="flex-center">
            <div class="inputs">
                <input type="text" id="" placeholder="Título do seu quizz">
                <input type="text" id="" placeholder="URL da imagem do seu quizz">
                <input type="text" id="" placeholder="Quantidade de perguntas do quizz">
                <input type="text" id="" placeholder="Quantidade de níveis do quizz">
            </div>
        </div>
        <div class="flex-center">
            <button onclick="criarPerguntas()" >Prosseguir pra criar perguntas</button>
        </div>
    </main>
    `;
}
function criarPerguntas() {
    const tela3 = document.querySelector(".tela3");
    tela3.innerHTML = "";
    tela3.innerHTML = `
    <h1>Crie suas perguntas</h1>
    <section class="flex-center">
        <div class="conteudo-perguntas">
                <h2>Pergunta X</h2>
                <div class="inputs">
                    <input type="text" id="" placeholder="Texto da pergunta">
                    <input type="text" id="" placeholder="Cor de fundo da pergunta">
                </div>
                <h2>Resposta correta</h2>
                <div class="inputs">
                    <input type="text" id="" placeholder="Resposta correta">
                    <input type="text" id="" placeholder="URL da imagem">
                </div>
                <h2 class"respostas-incorretas>Respostas incorretas</h2>
                <div class="inputs incorretas">
                    <input type="text" id="" placeholder="Resposta incorreta X">
                    <input type="text" id="" placeholder="URL da imagem X">
                </div>
                <button onclick="criarNiveis()" >Prosseguir pra criar níveis</button>
        </div>
    </section>
    
    `;
}

function criarNiveis() {
    const tela3 = document.querySelector(".tela3");
    tela3.innerHTML = "";
    tela3.innerHTML = `
    <h1>Agora, decida os níveis!</h1>
    <div class="flex-center">
        <h2>Nível X</h2>
        <input type="text" id="" placeholder="Título do nível">
        <input type="text" id="" placeholder="% de acerto mínima">
        <input type="text" id="" placeholder="URL da imagem do nível">
        <input class="descricao-nivel" type="text" id="" placeholder="Descrição do nível">
    </div>
    <div class="flex-center">
        <button onclick="sucessoDoQuizz()">Finalizar Quizz</button>
    </div>
    `;
}
function sucessoDoQuizz() {
    const tela3 = document.querySelector(".tela3");
    tela3.innerHTML = "";
    tela3.innerHTML = `
    <h1>Seu quizz está pronto</h1>
    <p>imagem aqui, isso é um p</p>
    <button>Acessar Quizz</button>
    <button onclick="carregarPag()">Voltar pra home</button>
    `;
}