/*
    ***IMPORTANTE!***

    Operadores aritiméticos
    + ->    Adição ** Concatenação também.
    - ->    Subtração
    / ->    Divisão
    * ->    Multiplicação
    ** ->   Potenciação
    % ->    Resto da divisão
    Incremento ++
    Decremento --

    Pre incremento = ++Variavel
    Pre decremento = --Variavel

    Pós incremento = Variavel++
    Pós decremento = Variavel--

    OBS: Os operadores, seguem a mesma lógica da aritimética.
    PEMDAS:
     * P --> Parenteses
     * E --> Expoente
     * M --> Multiplicação
     * D --> Divisão
     * A --> Adição
     * S --> subtração
*/ 

const num1 =5;
const num2 =10;
const num3 =20;
let inc = 1;
let incB = 1;
const ConvIntTest = parseInt('5');
const ConvFloatTest = parseFloat('5.2');
const ConvNumberTest = Number('5.3');

//Adição
console.log(num1+num2);
console.log(num1+num2+num3);

//Subtração
console.log(num1-num2);

//Potenciação
console.log(num1**num2);

//Multiplicação
console.log(num1*num2);

//Divisão
console.log(num1/num2);

//Incremento
console.log(inc++);
console.log(inc);

//É possivel fazer desta forma também
//Incrementa primeiro e mostra depois.
console.log(++incB);

//Converter para interiro
//Função parseInt
console.log(typeof(ConvIntTest));

//Float
console.log(ConvFloatTest);

//Resolve a conversão
console.log(ConvNumberTest);