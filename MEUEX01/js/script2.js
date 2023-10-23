function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm (evento) {
        evento.preventDefault();
        // busca todos IPT dentro de FORM
        const inputs = form.querySelectorAll("input");
        console.log(inputs)
        // cria obj vazio
        const pessoa = {}
        // percorre cada item da lista " imput ";
        inputs.forEach((ipt) => {
        // ipt.value cria uma chave no objeto pessoa conforme a class do IPT e 
        // associa o valor do IPT na chave 
            pessoa[ipt.className] = ipt.value;
        })

        console.log(pessoa);
        resultado.innerHTML += `<p>${pessoa.nome}<br />${pessoa.sobrenome}<br />${pessoa.idade}<br />${pessoa.profissao}<br />${pessoa.sexo}<br />${pessoa.time}</p>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();