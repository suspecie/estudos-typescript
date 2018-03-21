"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criando uma classe Dao que vai tratar os tipos genericos, quando ela for estanciada nos vamos informar o tipo de T, por isso Dao tem <T>
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('inserindo');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('atualizando');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('removendo');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('selecionado');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
