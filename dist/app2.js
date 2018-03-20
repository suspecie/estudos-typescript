"use strict";
/**
 * Criação de classe em js
 * class NomeDaClasse
 * Os navegadores ainda nao aceitam essa feature, por isso precisamos compilar e o ts ira gerar o nosso js
 */
var Carro = /** @class */ (function () {
    //Construtor - mesmo que nao esteja escrito, a classe procura se não encontrar ela ignora
    //vai ser responsavel por receber os parametros no momento de instanciar a classe
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    //Métodos/Funções
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    //Inferencia de tipo também para o retorno da função
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
/**
 * Geração do objeto da classe Carro / Instancia da Classe
 * Para ver no console o objeto temos que ir até a pasta dist e executar o comando node app2
 */
var carroA = new Carro('Veloster', 3);
console.log('------ CARROS ----------');
console.log(carroA);
carroA.acelerar();
console.log(carroA);
carroA.acelerar();
console.log(carroA);
console.log('----------------------');
/**
 * Classe concessionaria
 */
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
console.log('------ CONCESSIONARIA ----------');
var concessionaria = new Concessionaria('Av. Paulista');
console.log(concessionaria);
console.log('----------------');
/**
 * Classe pessoa
 */
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
console.log('------ PESSOA ----------');
var pessoa = new Pessoa('Su', 'Corsa');
console.log(pessoa.dizerCarroPreferido());
console.log('-----------------');
