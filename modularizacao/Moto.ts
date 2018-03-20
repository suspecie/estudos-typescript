import Veiculo from './Veiculo';

class Moto extends Veiculo {

    //aqui estamos sobrescrevendo um método herdado de Veiculo
    public acelerar(): void {
        this.velocidade = this.velocidade + 30;
    }

}

//também podemos separar as exportaçoes para sabermos mais facilmente o que o módulo exporta
// é uma outra maneira de utilizar o export
export default Moto;