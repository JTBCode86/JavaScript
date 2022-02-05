/*
    //Diferenças entre VAR e LET
    Importante:
    * É possivel declarar e redeclarar com o VAR uma variavel
    * Sem especificar VAR ou LET ou const, vc cria variaveis globais.
    * 
*/
const nome = "Luiz"; //string
const nome1 = "Luiz"; //string
const nome2 = "Luiz"; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //Undefined -> não aponta para nenhum local na memória.
let sobrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória.
const vBoolean1 = true; // Verdadeiro ou falso
const vBoolean2 = false; // Verdadeiro ou falso

//verificar o tipo da variavel
console.log(typeof vBoolean2);
console.log(typeof sobrenomeAluno);
console.log(typeof nome,nome1);