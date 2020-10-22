let input = prompt('Digite seu "Primeiro" nome')
console.log(input)
let input1 = prompt('Digite seu "segundo" nome')
console.log(input1)
let input2 = prompt('Digite seu sobrenome')
console.log(input2)
let input3 = prompt('Digite sua idade')
console.log(input3)

/*A utilizacao do nome de variavel "input" é a modo 
de ilutracao para esse exercicio */

alert(`Olá ${input} que bom ter vocé aquí conosco 
entao a sua idade é ${input3} mesmo que legal!`)

console.table(
    {
        nome: input,
        segundoNome: input1,
        sobreNome: input2,
        idade: input3
    }
)
