import { DaoInterface } from './DaoInterface';
import Concessionaria2 from './Concessionaria';

export class ConcessionariaDao implements DaoInterface {

    public nomeTabela: string = 'td_concessionaria';

    public inserir(object: Concessionaria2): boolean {
        console.log('inserindo');
        return true;
    }

    public atualizar(object: Concessionaria2): boolean {
        console.log('atualizando');
        return true;
    }

    public remover(id: number): Concessionaria2 {
        console.log('removendo');
        return new Concessionaria2('',[]);
    }

    public selecionar(id: number): Concessionaria2 {
        console.log('selecionado');
        return new Concessionaria2('',[]);
    }
    
    public selecionarTodos(): [Concessionaria2] {
        console.log('todos');
        return [new Concessionaria2('',[])];
    }

}