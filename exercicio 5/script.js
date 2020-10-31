const form = document.querySelector('#form')

function mostraResultado(resultado){
    const endereco = `O seu endereco é: ${resultado.logradouro}, ${resultado.bairro}, ${resultado.localidade}, ${resultado.uf}`
    const paragrafo = document.createElement("p")
    paragrafo.textContent = endereco

    document.body.appendChild(paragrafo)
}

function chamaApi(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => {
        if (resposta.ok) {
            return resposta.json()
        } else {
            throw new Error(`Codigo ${resposta.status}`)
        }
    })
    .then(data => {
        mostraResultado(data)
       
    })
    .catch(error => {
        console.log(error)
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const cep = form.elements.cep.value
    chamaApi(cep)
})