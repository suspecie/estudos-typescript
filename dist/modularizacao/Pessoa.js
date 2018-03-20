"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa2.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa2.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa2.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa2.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa2;
}());
exports.default = Pessoa2;
