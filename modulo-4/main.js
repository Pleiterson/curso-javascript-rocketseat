/* Requisições AJAX */
/* var xhr = new XMLHttpRequest();

// buscando os dados do link api.github
xhr.open('GET', 'https://api.github.com/users/Pleiterson');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
} */

/* Promisses */
/* var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        // buscando os dados do link api.github
        xhr.open('GET', 'https://api.github.com/users/Pleiterson');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

// var result = minhaPromise();
// vai mostrar <pending>, pois o JavaScript não esperará o resultado de minhaPromise()
console.log(result);

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error); // vai executar se a url da Promise estiver errada
    }); */

/* Utilizando Axios */
// pode usar get, put, post, delete, etc.
axios.get('https://api.github.com/users/Pleiterson')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error); // vai executar se a url apenas se estiver errada
    });