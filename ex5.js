"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const x = Number(prompt("Digite um número: "));
const y = Number(prompt("Digite outro número: "));
const z = Number(prompt("Digite o terceiro número: "));
if (z < y && z > x) {
    console.log("Está no intervalo");
}
else {
    console.log("Não está no intervalo");
}
