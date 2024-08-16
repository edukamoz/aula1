"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promptSync = require("prompt-sync");
var prompt = promptSync();
const b = Number(prompt("Insira o valor para b"));
const c = "segunda linha";
const d = "terceira linha";
console.log(b + b);
