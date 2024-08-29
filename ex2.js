"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromptSync = require("prompt-sync");
const prompt = PromptSync();
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.push(Number(prompt("Digite um número maior que 10: ")));
console.log(numeros);
