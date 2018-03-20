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

### Inferência de Tipo

O JavaScript permite vc declarar uma variável de um tipo e no meio do código alterar essa variável para outro tipo. (Lembrando que essas alterações podem dar problemas/bugs).

``` //Exemplo ```
``` let  variavel1 = 'Minhas Dicas'; ```
``` variavel1 = true; ```

O TypeScript ajuda a resolver esses problemas fazendo a Inferência de Tipo para variáveis.
E também nos ajuda a identificar caso tentamos colocar outro tipo em uma variável ja declarada.

``` //Exemplo ```
``` let  titulo: string = "A menina que roubava livros"; ```

### Modificadores de Visibilidade - Métodos e Atributos

- Private : não consigo acessá-lo diretamente.
- Public: podem ser acessados a partir da referencia do objeto . nome do atributo ou metodo.

### .map()

Função nativa de variáveis do tipo array.
Um loop dentro de cada uma das posições do array, podemos recuperar o valor e fazer uma determinada ação através do envio de uma funcao de callback.

``` lojaConcessionaria.mostrarListaDeCarros().map((carro: Carro) => { console.log(carro); }) ```

Mais funções: https://www.w3schools.com/js/js_array_methods.asp




