"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = require("./Veiculo");
var Carro2 = /** @class */ (function (_super) {
    __extends(Carro2, _super);
    function Carro2(modelo, numeroDePortas) {
        var _this = _super.call(this) || this;
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    return Carro2;
}(Veiculo_1.default));
exports.default = Carro2;
// exemplo de export de constantes
exports.constanteExemplo = 'Teste';
