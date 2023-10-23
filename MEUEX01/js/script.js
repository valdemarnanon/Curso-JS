function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const profissao = form.querySelector('.profissao'); 

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            profissao: profissao.value
        };
        pessoas.push(pessoa);
        console.log(pessoas)
        resultado.innerHTML += `<p>${pessoa.nome}<br />${pessoa.sobrenome}<br />${pessoa.idade}<br />${pessoa.profissao}</p>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();