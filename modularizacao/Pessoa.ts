import Carro2 from "./Carro";

export default class Pessoa2 {

    private nome: string;
    private carroPreferido: string;
    private carro: Carro2;

    constructor (nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro2): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro2 {
        return this.carro;
    }
}