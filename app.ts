/**
 * Nessa exemplo estamos utilizando a arrow_functoins (ES6) 
 * e a inferencia de tipo (tipagem) do TypeScript
 * TypeScript ajuda a fazer o transpire
 * Para fazer o transpire, rodar o comando tsc nomedoarquivo
 * Após fazer o transpire, é criado um arquivo .js que é o arquio que os browsers entendem.
 * ES5 - > Versão suportada pelos browsers
 */

 let ola = (nome: string, sobrenome: string) => {
    console.log("Olá " + nome + sobrenome)
 }

 ola("Suu", " Specie")

 /**
  * Tipagaem do TypeScript
  * nomeDaVariavel: tipo 
  */
let mensagem: string = "Seja bem vindo!!"
let temporadasFriends: number = 10
let estudandoAngular: boolean = true
let listaDeFrutas: Array<string> = ['Uva', 'Banana', 'Manga']
let listaDeFrutas2: string[] =['Pera', 'Morango', 'Melancia'] //outro exemplo de declaracao de arrays
let notas: Array<number> = [7.8,9,10]
let notas2: number[] = [7.8,9,10] //esse outro tipo de declaração é mais utilizado.
