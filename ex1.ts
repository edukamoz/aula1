import promptSync = require('prompt-sync')

const prompt = promptSync()

const num : number = Number(prompt("Digite um número: "))

for (let i = 1; i < 3; i++) {
    console.log(num + i)
    console.log(num - i)
}