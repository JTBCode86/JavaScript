let varA ='A'; //B
let varB ='B'; //C
let varC ='C'; //A

/*Resolução - antiga resolução
    const varATemp =varA;
    varA=varB;
    varB=varC;
    varC=varATemp;
    console.log(varA,varB,varC);
*/

//Modo mais moderno.
[varA,varB,varC]=[varB,varC,varA];
console.log(varA,varB,varC);