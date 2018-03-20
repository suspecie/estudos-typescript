import  Carro2 from "./Carro";

export default class Concessionaria2 {
    
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

}