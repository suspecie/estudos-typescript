"use strict";
/**
 * Nessa exemplo estamos utilizando a arrow_functoins (ES6)
 * e a inferencia de tipo (tipagem) do TypeScript
 * TypeScript ajuda a fazer o transpire
 * Para fazer o transpire, rodar o comando tsc nomedoarquivo
 * Após fazer o transpire, é criado um arquivo .js que é o arquio que os browsers entendem.
 * ES5 - > Versão suportada pelos browsers
 */
var ola = function (nome, sobrenome) {
    console.log("Olá " + nome + sobrenome);
};
ola("Suu", " Specie");
/**
 * Tipagaem do TypeScript
 * nomeDaVariavel: tipo
 */
var mensagem = "Seja bem vindo!!";
var temporadasFriends = 10;
var estudandoAngular = true;
var listaDeFrutas = ['Uva', 'Banana', 'Manga'];
var listaDeFrutas2 = ['Pera', 'Morango', 'Melancia']; //outro exemplo de declaracao de arrays
var notas = [7.8, 9, 10];
