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
console.log(primeiroUsuario.nome, primeiroUsuario.idade, primeiroUsuario.corDeOlhos)

segundoUsuario.nome = prompt('Digite seu nome')
segundoUsuario.sobreNome = prompt('Digite seu sobrenome')
segundoUsuario.idade = prompt('Digite a sua idade')

console.log(segundoUsuario.nome, segundoUsuario.idade, segundoUsuario.corDeOlhos)

if (primeiroUsuario.idade === segundoUsuario.idade) {
	alert(`Yuhuu! ${primeiroUsuario.nome} e ${segundoUsuario.nome} sao da mesma idade`)

} else if (primeiroUsuario.idade > segundoUsuario.idade) {
	alert(` O/A ${primeiroUsuario.nome} é mais velho/a que ${segundoUsuario.nome}`)

} else if (primeiroUsuario.idade < segundoUsuario.idade) {
	alert(`O/A ${segundoUsuario.nome} é mais velho/a que ${primeiroUsuario.nome}`)

}


console.table(
	{
		nome: primeiroUsuario.nome,
		sobreNome: primeiroUsuario.sobreNome,
		idade: primeiroUsuario.idade,
	}
)
console.table(
	{
		nome: segundoUsuario.nome,
		sobreNome: segundoUsuario.sobreNome,
		idade: segundoUsuario.idade,
	}
)
