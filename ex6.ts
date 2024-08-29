import PromptSync from "prompt-sync"

const prompt = PromptSync()

const numero : number = Number(prompt("Digite um número: "))

console.log(numero % 2 == 0 ? "O número é par" : "O número é ímpar");