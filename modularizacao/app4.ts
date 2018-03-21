//import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria2 from './Concessionaria';
import { Dao } from './Dao';
import Pessoa2 from './Pessoa';

//let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria2('',[]);

//dao.inserir(concessionaria);

/**
 * Aqui estamos criando uma instancia da classe Dao e passando o tipo Concessionaria.
 * La na classe vamos receber o Tipo T, e vai receber o tipo certo.
 */
let dao3: Dao<Concessionaria2> = new Dao<Concessionaria2>();
dao3.inserir(concessionaria);
let dao4: Dao<Pessoa2> = new Dao<Pessoa2>();
dao4.remover(4);