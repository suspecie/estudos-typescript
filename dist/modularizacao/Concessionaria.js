"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria2 = /** @class */ (function () {
    function Concessionaria2(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria2.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria2.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria2;
}());
exports.default = Concessionaria2;
