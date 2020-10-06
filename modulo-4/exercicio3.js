/* A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:

<li>Carregando...</li>

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404. */

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepo(repos) {
    listElement.innerHTML = '';

    for (repo of repos) {
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderLoading(loading) {  
    listElement.innerHTML = '';
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function renderError(loading) {
    listElement.innerHTML = '';
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepo() {  
    var user = inputElement.value;

    if (!user) return;

    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepo(response.data);
        })
        .catch(function () {      
            renderError();    
        });
}