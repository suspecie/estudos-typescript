import { DaoInterface } from './DaoInterface';

// Criando uma classe Dao que vai tratar os tipos genericos, quando ela for estanciada nos vamos informar o tipo de T, por isso Dao tem <T>
export class Dao<T> implements DaoInterface<T> {

    public nomeTabela: string = '';

    public inserir(object: T): boolean {
        console.log('inserindo');
        return true;
    }

    public atualizar(object: T): boolean {
        console.log('atualizando');
        return true;
    }

    public remover(id: number): T {
        console.log('removendo');
        return Object();
    }

    public selecionar(id: number): T {
        console.log('selecionado');
        return Object();
    }
    
    public selecionarTodos(): [T] {
        console.log('todos');
        return [Object()];
    }

}