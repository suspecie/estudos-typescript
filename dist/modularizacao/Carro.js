"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro2 = /** @class */ (function () {
    function Carro2(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro2.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro2.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro2.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro2;
}());
exports.default = Carro2;
exports.constanteExemplo = 'Teste';
