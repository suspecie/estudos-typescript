import Carro2 from './Carro';
import Moto from './Moto';
import Concessionaria2 from './Concessionaria';

let carro = new Carro2('Uno', 4);
carro.acelerar();
console.log(carro);

let moto = new Moto();
moto.acelerar();
moto.acelerar();
console.log(moto);

let concessionaria = new Concessionaria2('',[]);
console.log(concessionaria.fornecerHorariosDeFuncionamento());

