"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from './ConcessionariaDao';
var Concessionaria_1 = require("./Concessionaria");
var Dao_1 = require("./Dao");
//let dao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
//dao.inserir(concessionaria);
/**
 * Aqui estamos criando uma instancia da classe Dao e passando o tipo Concessionaria.
 * La na classe vamos receber o Tipo T, e vai receber o tipo certo.
 */
var dao3 = new Dao_1.Dao();
dao3.inserir(concessionaria);
var dao4 = new Dao_1.Dao();
dao4.remover(4);
