const dataNascimento = document.querySelector("#inputData")
const btnValida = document.querySelector("#btnValida")
const idadeAtualApresenta = document.querySelector("#idadeAtual")
const MaiorIdade = document.querySelector("#maioridade")

function validar() {
    if (inputData.value == "") {
        alert ("Insira uma data")
        return
    }
const dataCompleta = new Date(dataNascimento.value)
let ano = dataCompleta.getFullYear()

const dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()

const idade = anoAtual - ano
if (idade < 18) {
    MaiorIdade.innerHTML = "Voce nao possui idade suficiente"
    
}
else {
    MaiorIdade.innerHTML = "Voce é maior de idade"
}

idadeAtualApresenta.innerHTML = " Voce possui " + idade + " anos"

}