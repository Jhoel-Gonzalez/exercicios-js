function Person(nome, sobreNome, idade) {
    this.firstName = nome
    this.lastName = sobreNome
    this.age = idade
}

function oldest(array) {
    let maximunAge = 0
    let oldestPerson = 0

    for (let person of array) {
        if (person.age > maximunAge) {
            maximunAge = person.age
            oldestPerson = `${person.firstName} ${person.lastName}`
        }
    } return oldestPerson
}

function registration(array) {
    for (let personRegistration of array) {
        console.log(`${personRegistration.firstName} ${personRegistration.lastName}: ${personRegistration.age}`)
    }
}

let personArray = []
let repetition = 0
do {
    let nome = prompt("Qual é o seu nome?")
    let sobreNome = prompt("Qual é o seu sobrenome?")
    let idade = prompt("Qual é a sua idade")

    personArray[repetition] = new Person(nome, sobreNome, idade)

    repetition = repetition + 1

} while (confirm("Voce deseja adicionar mais uma pessoa?"))

console.log('Registros de:')
registration(personArray)
console.log(`A pessoa mais velha é: ${oldest(personArray)}`)