import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria2 from './Concessionaria';

let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria2('',[]);

dao.inserir(concessionaria);
