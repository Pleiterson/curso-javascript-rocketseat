/* Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:

URL de exemplo: https://api.github.com/users/diego3g/repos

Basta alterar "diego3g" pelo nome do usuário.

<input type="text" name="user">
<button onclick="">Adicionar</button>

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

<ul>
<li>repo1</li>
<li>repo2</li>
<li>repo3</li>
<li>repo4</li>
<li>repo5</li>
</ul> */

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepo(repos){
    for(repo of repos){
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function listRepo(){
    var user = inputElement.value;

    if(!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
        renderRepo(response.data);
    })
}