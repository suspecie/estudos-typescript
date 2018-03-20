import Veiculo from './Veiculo';

export default class Carro2 extends Veiculo{
    
    private numeroDePortas: number;
    
    constructor(modelo: string, numeroDePortas: number) {
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }


}

// exemplo de export de constantes
export const constanteExemplo = 'Teste';