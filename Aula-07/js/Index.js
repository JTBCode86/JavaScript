/*
    **IMPORTANTE**  
    * Não é possível criar constante com nomes reservados.
    * constante precisam ter nomes significativos.
    * Não é permitido começar nomes de constante com números.
    * Não podem conter espaços ou traços.
    * Para nomes compostos usar o camelCase. Ex: nomeCompleto.
    * constante são Case-sensitive.
    * Não é permitido redeclarar constante com Let.
    * Não utilize var, utilize Let.  
*/

//String...
const nome = "João da constante.";
console.log(nome);

//Trabalhando com números -> operadores aritiméticos.
const primeiroNumero =5;
const segundoNumero =10;
const resultado = primeiroNumero*segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado =  resultado * 3;

resultadoTriplicado+5;

console.log("O resultado é:",resultado);
console.log("O resultado duplicado é:",resultadoDuplicado);
console.log("O resultado triplicado acrescido de 5 é:",resultadoTriplicado);

// Informa o tipo da variavel. 
console.log(typeof(primeiroNumero)); 
console.log(typeof(nome)); 