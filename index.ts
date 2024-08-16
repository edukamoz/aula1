import promptSync = require('prompt-sync')

var prompt = promptSync()

const b: number = Number(prompt("Insira o valor para b"))
const c: string = "segunda linha"
const d: string = "terceira linha"

console.log(b + b)