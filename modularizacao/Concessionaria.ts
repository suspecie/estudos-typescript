import  Carro2 from "./Carro";
import { ConcessionariaInterface } from './ConcessionariaInterface';

export default class Concessionaria2 implements ConcessionariaInterface {
    
    private endereco: string;
    private listaDeCarros: Carro2[];

    constructor(endereco: string, listaDeCarros: Carro2[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro2[] {
        return this.listaDeCarros;
    }

    public fornecerHorariosDeFuncionamento(): string {
        return 'De seg a sexta das 08:00 as 18:00';
    }

}