import PromptSync from "prompt-sync";

const prompt = PromptSync()

const anoDeNascimento : number = Number(prompt("Digite seu ano de nascimento: "))

for (let i = 0; i <= (2024 - anoDeNascimento); i++) {
    console.log(`
        ${anoDeNascimento + i} ---- ${i}
        `)
}