const nome = "Luiz Otávio";
const sobreNome ="Miranta";
const idade = 30;
const peso =84;
const alturaEmCm = 1.80;
const anoAtual=2022;

let anoNascimento =anoAtual-idade;
let IMC = peso/(alturaEmCm*alturaEmCm);

/*
    **FORMA TRADICIONAL**
console.log(nome,sobreNome,"tem",idade,"anos de idade, pesa",peso +" kg.");
console.log("Ele tem",alturaEmCm,"de altura e seu IMC é de",IMC+".");
console.log(nome,sobreNome,"nasceu no ano de",anoNascimento+".");
*/

//Template strings
//Para referenciar a variavel dentro da string usamos a crase e ${variavel}
console.log(`${nome} ${sobreNome} tem ${idade} anos, seu peso é ${peso} Kg.`);
console.log(`Sua altura é de ${alturaEmCm} e seu IMC é de ${IMC}.`);
console.log(`${nome} ${sobreNome} nasceu no ano de ${anoNascimento}.`);