import PromptSync from "prompt-sync";

const prompt = PromptSync()

const x : number = Number(prompt("Digite um número: "))
const y : number = Number(prompt("Digite outro número: "))
const z : number = Number(prompt("Digite o terceiro número: "))

if (z < y && z > x) {
    console.log("Está no intervalo")    
} else {
    console.log("Não está no intervalo");
}