import PromptSync = require("prompt-sync")
const prompt = PromptSync()

const numeros : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numeros.push(Number(prompt("Digite um número maior que 10: ")))
console.log(numeros)
