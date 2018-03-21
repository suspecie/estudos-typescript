# estudos-typescript
Pequenas dicas sobre TypeScript

## Sobre o Typescript

- TypeScript ajuda a fazer o transpire, ou seja os navegadores atuais ainda não conseguem entender as novas funcionalidades do ES6, e para que possamos utilizar essas novas features podemos utilizar o Typescript para fazer essa conversão do ES6 para o ES5, o qual os navegadores atualmente suportam.

- Inferência de Tipos.

- Scripts typescript precisam ter a extensão .ts

- O TypeScript permite a implementação de interfaces e generics.

## Comandos TypeScript

### Instalação
```npm install -g typescript```

### Verificar versão
```tsc -v```

### Execução de um arquivo
```tsc nomedoarquivo.ts```

Lembrando que ao executar esse comando, o Typescript fará o transpire e criará um arquivo .js

Para executar o arquivo .js

```node nomedoarquivo.js```

### Criação automatica do tsconfig.json

É possível configurar os parâmetros de compilação, a partir do arquivo tsconfig.json podemos enviar instruções para o compilador.

Para criar o arquivo tsconfig.json utilizamos o comando:

```tsc -init```

Quando rodamos o comando tsc e é criado um arquivo .js. O compilador sabe fazer esse transpile pois o parâmetro target informa para qual linguagem ele tem que compilar que no caso o configurado é ES5.

#### Parâmetros tsconfig.json

-  Target: Informar para qual versão do ES vai ser compilado, ou seja qual ES os navegadores irão entender.
-  outDir: Em qual diretório serão gerados os arquivos compilados.

### watcher
```tsc -w```

## Inferência de Tipo

O JavaScript permite vc declarar uma variável de um tipo e no meio do código alterar essa variável para outro tipo. (Lembrando que essas alterações podem dar problemas/bugs).

``` //Exemplo ```
``` let  variavel1 = 'Minhas Dicas'; ```
``` variavel1 = true; ```

O TypeScript ajuda a resolver esses problemas fazendo a Inferência de Tipo para variáveis.
E também nos ajuda a identificar caso tentamos colocar outro tipo em uma variável ja declarada.

``` //Exemplo ```
``` let  titulo: string = "A menina que roubava livros"; ```

## Modificadores de Visibilidade - Métodos e Atributos

- Private : não consigo acessá-lo diretamente, só pode ser alterada a partir do próprio objeto.
- Public: podem ser acessados a partir da referencia do objeto . nome do atributo ou metodo.
- Protected: semalhante ao private, a diferença é que ele permite que classes filhas façam a alteração direta.

## .map()

Função nativa de variáveis do tipo array.
Um loop dentro de cada uma das posições do array, podemos recuperar o valor e fazer uma determinada ação através do envio de uma funcao de callback.

``` lojaConcessionaria.mostrarListaDeCarros().map((carro: Carro) => { console.log(carro); }) ```

Mais funções: https://www.w3schools.com/js/js_array_methods.asp

## Export e Import

 - export: Para transformar a classe em módulo. Posso ter variáveis, classes e funções sendo exportadas.
 ``` export class Carro{} ```

 - import: para importar os módulos
 ```import { NomeDaClasse } from './CaminhoDoArquivo'; ```

 ### Export
- default: é permitido somente uma exportação default por arquivo.
``` export default class Carro {} ```

 ### Import
- alias: podemos colocar um alias no import.
``` import { NomeDaClasse as nomedoalias} from './CaminhoDoArquivo'; ```
- default: importação default é um pouco diferente a estrutura.
``` import NomeDaClasse from './CaminhoDoArquivo'; ```

## extends (herança)

- é a capacidade que uma classe possui de herdar métodos e atributos de outra classe.
Em um exemplo prático, podemos criar a classe imóvel.
A classe imóvel contém os atributos quartos, salas, cozinha.
A classe apartamento, herda os mesmos atributos.
E já a classe casa, herda os mesmos atributos porém tem o telhado de diferença.
O mesmo acontece com os métodos.
Uma classe pode herdar somente uma classe.
Quando uma classe extende outra ela precisa ter uma chamada para a função super.

## funcao super
- ajusta o contexto das variaveis.
- deve ser chamada dentro de um construtor.

## polimorfismo (sobrescrita de método)
- Uma classe filha define o seu proprio comportamento baseado em um metodo implementado na classe pai.

## implements (Interfaces) 
- Define como uma classe deve implementar os seus métodos.
- Quando uma classe implementa uma interface, essa classe precisa implementar os métodos.
- A interface somente relaciona quais métodos deverão ser implementdos.
- A classe que implementa essa interface deve dizer COMO o método deve se comportar.
- Interfaces não possuem modificadores de visibilidade, pois eles somente forçam as classes que a implementaram terem os mesmos métodos.

``` interface ConcessionariaInterface { } ```

``` export default class Concessionaria implements ConcessionariaInterface {} ```

## Generics
- Permite que componentes, classes ou métodos sejam reutilizáveis.
- Podemos por exemplo, fazer a interface receber algum tipo de dado no qual ela ira trabalhar.
Para isso é so passarmos no nome da interface o  <T> , o T corresponde ao Type que será recebido.









