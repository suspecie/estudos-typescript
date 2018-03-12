# estudos-typescript
Pequenas dicas sobre TypeScript

## Sobre o Typescript

- TypeScript ajuda a fazer o transpire, ou seja os navegadores atuais ainda não conseguem entender as novas funcionalidades do ES6, e para que possamos utilizar essas novas features podemos utilizar o Typescript para fazer essa conversão do ES6 para o ES5, o qual os navegadores atualmente suportam.

- Inferência de Tipos.

- Scripts typescript precisam ter a extensão .ts

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
```tsc -init```

### watcher
```tsc -w```
