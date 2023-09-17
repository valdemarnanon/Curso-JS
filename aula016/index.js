function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Miranda', 30);
const pessoa3 = criaPessoa('Joao', 'Oliveira', 55);
const pessoa4 = criaPessoa('Junior', 'Nanon', 32);
const pessoa5 = criaPessoa('Jean', 'Moreira', 44);

console.log(pessoa1.nome, pessoa1.idade, pessoa2.nome, pessoa2.idade);

/*
const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};


console.log(pessoal.nome)
console.log(pessoal.idade)
*/