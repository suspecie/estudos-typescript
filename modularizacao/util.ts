import Carro2, { constanteExemplo as constante } from './Carro';
import Pessoa2 from './Pessoa';
import Concessionaria2 from './Concessionaria';

let carroA = new Carro2('veloster', 4);
let carroB = new Carro2('uno', 2);
let cliente = new Pessoa2('Joao', 'veloster');
let listaDeCarros: Carro2[] = [carroA, carroB];
let concessionaria = new Concessionaria2('Av. Paulista', listaDeCarros);