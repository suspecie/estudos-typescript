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
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //aqui estamos sobrescrevendo um método herdado de Veiculo
    Moto.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 30;
    };
    return Moto;
}(Veiculo_1.default));
//também podemos separar as exportaçoes para sabermos mais facilmente o que o módulo exporta
// é uma outra maneira de utilizar o export
exports.default = Moto;
