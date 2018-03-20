"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var carro = new Carro_1.default('Uno', 4);
carro.acelerar();
console.log(carro);
var moto = new Moto_1.default();
moto.acelerar();
moto.acelerar();
console.log(moto);
var concessionaria = new Concessionaria_1.default('', []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
