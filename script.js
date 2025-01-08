const submitbtn = document.querySelector('#submitbtn')

/* Evento de click, captura dados input (DOM) */
submitbtn.addEventListener("click", function(event) {
    event.preventDefault()

    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const price = document.querySelector('#price').value
    const available = document.querySelector('#available').value
    
})

let listaCadastro = []

/* Cria objeto e insere no Array, valida inputs*/
function cadastra(){

    console.log("funcionou")

    const name = document.querySelector('#name').value
    const price = document.querySelector('#price').value
    const description = document.querySelector('#description').value
    const available = document.querySelector('#available').value

    if (!name || !price || !description || !available) {
        alert('Favor preencher todos campos.')
    } else {


    const novoObjeto = {
        nome: name, 
        preco: price
    }

    listaCadastro.push(novoObjeto)
    
    console.log(listaCadastro)

    adicionaProdutoLista()

    limpaInputs()
    }
}

/* Cria tabela, inserida valores e ordena */
function adicionaProdutoLista() {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = "";
    
    listaCadastro.sort((a, b) => a.preco - b.preco);
    
    for(let i = 0; i < listaCadastro.length; i++ ) {
        let tr = tbody.insertRow();
        
        
        let tdProduto = tr.insertCell();
        let tdPreco = tr.insertCell();
        
        tdProduto.innerText = listaCadastro[i].nome 
        tdPreco.innerText = listaCadastro[i].preco
    }
        
}

/* Limpa inputs */
function limpaInputs() {
    const name = document.querySelector('#name');
    name.value = ""
    const price = document.querySelector('#price')
    price.value = ""
    const available = document.querySelector('#available')
    available.value = ""
    const description = document.querySelector('#description')
    description.value = ""
}