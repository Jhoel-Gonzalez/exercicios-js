let form = document.querySelector('#form')
let resultado = 0
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let cep = form.elements.cep.value
    
    fetch("https://viacep.com.br/ws/" + cep + "/json/").then(resposta => {
        if (resposta.ok) {
            return resposta
        } else {
            throw new Error(`Codigo ${resposta.status}`)
        }
    }).then(resposta => resposta.json()).then(data => resultado = data).catch(error => console.log(error))

    let endereco = "O seu endereco é: " + resultado.logradouro + ", " + resultado.bairro + ", " + resultado.localidade + ", " + resultado.uf
    let paragrafo = document.createElement("p")
    paragrafo.textContent = endereco

    document.body.appendChild(paragrafo)
})