function meuEscopo() {
    const form = document.querySelector('.form');
    function recebeEventoForm (evento) {
        const nome = form.querySelectorAll('.nome');
        const sobrenome = form.querySelectorAll('.sobrenome');
        const peso = form.querySelectorAll('.peso');
        const altura = form.querySelectorAll('.altura');
        evento.preventDefault();

        console.log(nome.value, sobrenome.value, altura.value, peso.value)
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();