// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes signiticativos
let nomeClient = 'João';
console.log(nomeClient);
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// utilizamos camelCase
let nomeCompletoDoCliente = 'Luiz Otávio';
console.log(nomeCompletoDoCliente);
// Case-Sensitive
let nomeCliente = 'Luiz';
let nomecliente = 'Otávio'
console.log(nomeCliente, nomecliente)
// Não podemos redeclarar variáveis com let
let nomeClientes = 'Luiz';
nomeClientes = 'Otávio';
console.log(nomeClientes);
// Não utilize Var, Utilize let.