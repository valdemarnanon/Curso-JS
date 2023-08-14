const nome = 'Valdemar Nanon';
const idade = 30;
const peso = 84;
const AlturaEmM = 1.8;
let IMC;
let anoNascimento;
IMC = peso / (AlturaEmM * AlturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${AlturaEmM} de altura e seu IMC é de ${IMC}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

