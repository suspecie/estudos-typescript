/**
 * Criação de classe em js
 * class NomeDaClasse
 * Os navegadores ainda nao aceitam essa feature, por isso precisamos compilar e o ts ira gerar o nosso js
 */

class Carro {

    //Atributos
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    //Construtor - mesmo que nao esteja escrito, a classe procura se não encontrar ela ignora
    //vai ser responsavel por receber os parametros no momento de instanciar a classe
    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    //Métodos/Funções
    public acelerar(): void {
        this.velocidade = this.velocidade + 10 
    }

    public parar(): void{
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade 
    }

}

/**
 * Geração do objeto da classe Carro
 * Para ver no console o objeto temos que ir até a pasta dist e executar o comando node app2
 */

 let carroA = new Carro("Veloster", 3)
 console.log(carroA)
 carroA.acelerar()
 console.log(carroA)
 carroA.acelerar()
 console.log(carroA)