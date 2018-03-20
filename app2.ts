/**
 * Criação de classe em js
 * class NomeDaClasse
 * Os navegadores ainda nao aceitam essa feature, por isso precisamos compilar e o ts ira gerar o nosso js
 */

class Carro {

    /**
     * Atributos e métodos
     * Privates: não é possível acessá-los diretamente
     * Public: podem ser acessados a partir da referenciaDoObjeto.nomeAtributo ou referenciaDoObjeto.nomeMetodo
     * 
     */

    //Atributos
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    //Construtor - mesmo que nao esteja escrito, a classe procura se não encontrar ela ignora
    //vai ser responsavel por receber os parametros no momento de instanciar a classe
    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    //Métodos/Funções
    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void{
        this.velocidade = 0;
    }

    //Inferencia de tipo também para o retorno da função
    public velocidadeAtual(): number {
        return this.velocidade; 
    }

}

/**
 * Geração do objeto da classe Carro / Instancia da Classe
 * Para ver no console o objeto temos que ir até a pasta dist e executar o comando node app2
 */

 /*let carroA = new Carro('Veloster', 3);
 console.log('------ CARROS ----------');
 console.log(carroA);
 carroA.acelerar();
 console.log(carroA);
 carroA.acelerar();
 console.log(carroA);
 console.log('----------------------');*/

 /**
  * Classe concessionaria
  */

class Concessionaria {
    
    private endereco: string;
    // private listaDeCarros: any; //permite que a variavel receba qualquer tipo de dado
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }

}

/**
 * Classe pessoa
 */

class Pessoa {

    private nome: string;
    private carroPreferido: string;
    private carro: Carro;

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

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}


/**
 * Definindo a regra de negocio
 */

/* Criação de carros */
let carro1 = new Carro('Etios', 4);
let carro2 = new Carro('Uno', 2);
let carro3 = new Carro('Sandero', 4);

/* Montando lista de carros da concessionaria */
let listaDeCarros: Carro[] = [carro1, carro2, carro3];
let lojaConcessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

/* Exibindo a lista de carros*/
console.log(lojaConcessionaria.mostrarListaDeCarros());

/* Comprar o carro */
let cliente = new Pessoa('Su', 'Sandero');

//percorrendo lista para verficar se o carro preferido consta na lista de carros da concessionaria
lojaConcessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());
