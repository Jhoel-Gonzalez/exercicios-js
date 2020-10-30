let form = document.querySelector('#form');
let oldestPanel = document.querySelector('#oldest-panel');
let list = document.querySelector("#list");
let registro = document.querySelector("#registro");

// Variável que utilizaremos para manter a idade da pessoa mais velha:
let oldest = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.name.value;
    const lastName = form.elements.lastName.value;
    const age = parseInt(form.elements.age.value, 10);
    form.elements.name.value = "";
    form.elements.lastName.value = "";
    form.elements.age.value = "";
    form.elements.name.focus();

    //Mensagem: "Registros de:" 
    registro.textContent = "Registros de:"

    // Lista de individuos registrados:
    let personList = document.createElement("li")
    personList.textContent = `${name} ${lastName}: ${age}`
    list.appendChild(personList)

    // Se a idade do indivíduo atual for maior do que a da pessoa mais velha (anterior):
    if (age > oldest) {
        oldest = age;
        oldestPanel.textContent = `A pessoa mais velha é: ${name} ${lastName} que tem (${age}) anos.`;
    }
});