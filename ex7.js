"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const anoDeNascimento = Number(prompt("Digite seu ano de nascimento: "));
for (let i = 0; i <= (2024 - anoDeNascimento); i++) {
    console.log(`
        ${anoDeNascimento + i} ---- ${i}
        `);
}
