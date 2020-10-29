const primeiroUsuario = {
	nome: "",
	sobreNome: "",
	idade: ""
}
const segundoUsuario = {
	nome: "",
	sobreNome: "",
	idade: ""

}

primeiroUsuario.nome = prompt('Digite seu nome')
primeiroUsuario.sobreNome = prompt('Digite seu sobrenome')
primeiroUsuario.idade = prompt('Digite a sua idade')

segundoUsuario.nome = prompt('Digite seu nome')
segundoUsuario.sobreNome = prompt('Digite seu sobrenome')
segundoUsuario.idade = prompt('Digite a sua idade')

console.log(`Registros de ${primeiroUsuario.nome} ${primeiroUsuario.sobreNome} e ${segundoUsuario.nome} ${segundoUsuario.sobreNome}`)
console.log(`Idade de ${primeiroUsuario.nome} ${primeiroUsuario.sobreNome}: ${primeiroUsuario.idade}`)
console.log(`Idade de ${segundoUsuario.nome} ${segundoUsuario.sobreNome}: ${segundoUsuario.idade}`)

if (primeiroUsuario.idade === segundoUsuario.idade) {
	console.log(`Yuhuu! ${primeiroUsuario.nome} ${primeiroUsuario.sobreNome} e ${segundoUsuario.nome} ${segundoUsuario.sobreNome} são da mesma idade.`)

} else if (primeiroUsuario.idade > segundoUsuario.idade) {
	console.log(`${primeiroUsuario.nome} ${primeiroUsuario.sobreNome} é mais velho/a que ${segundoUsuario.nome} ${segundoUsuario.sobreNome}.`)

} else {
	console.log(`${segundoUsuario.nome} ${segundoUsuario.sobreNome} é mais velho/a que ${primeiroUsuario.nome} ${primeiroUsuario.sobreNome}.`)

}



