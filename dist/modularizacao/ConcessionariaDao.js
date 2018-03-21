"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'td_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('inserindo');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('atualizando');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('removendo');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('selecionado');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('todos');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
