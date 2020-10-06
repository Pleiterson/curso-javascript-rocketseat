var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// renderizando (mostrando) todos os to dos do array todos
function renderTodos() {
    listElement.innerHTML = ''; // limpando todo o conteúdo da tag <ul> html

    for (todo of todos) {
        var todoElement = document.createElement('li'); // criando uma tag <li> 
        var todoText = document.createTextNode(todo); // colocando o texto dentro da tag <li>, array todos
        var linkElement = document.createElement('a'); // criado uma tag link <a>
        var linktext = document.createTextNode('Excluir'); // colocando o texto dentro da tag <li>
        var pos = todos.indexOf(todo);
        
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); // removendo o todo na posição do array
        linkElement.setAttribute('href', '#'); // definindo o href da tag <a>
        linkElement.appendChild(linktext); // inserindo o texto do link todos na tag <a>
        todoElement.appendChild(todoText); // inserindo o texto do array todos na tag <li>
        todoElement.appendChild(linkElement); // inserindo o texto na tag <a>
        listElement.appendChild(todoElement); // mostrando o texto do array
    }
}

renderTodos(); // mostrando os todos na tela já como uma tag <li>

// função para adicionar um todo do input
function addTodo() {
    var todoText = inputElement.value; // obtedo o valor do input

    todos.push(todoText); // adicionando o todo digitado no input no array todos
    inputElement.value = ''; // limpando o input após adicionado no array todos
    renderTodos(); // renderizando novamente os todos atualizados do array todos
    saveToStorage(); // chamando a função para salvar as alterações de adicionar ou excluir
}

btnElement.onclick = addTodo; // chamando a função addTodo ao clicar no botão Adicionar

// função para remover um todo do array
function deleteTodo(pos) {
    todos.splice(pos, 1); // splice remove o 1º objeto referente a posição passada
    renderTodos();
    saveToStorage(); // chamando a função para salvar as alterações de adicionar ou excluir
}

// armazenando os dados em um local storage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); // grava apenas chave e valor string
}