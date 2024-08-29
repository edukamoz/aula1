function imprime() {
    console.log("Bom dia")
}

//chamada de função
imprime()

//funcao com parametro e sem retorno
function soma (num1: number, num2: number) {
    console.log(`Soma: ${num1 + num2}`)
}

//chamada de função
soma(1, 2)

//funcao com parametro e com retorno
function subtrai(num1: number, num2: number) : number {
    return num1 - num2
}

//chamada de função
console.log(subtrai(10, 9));
