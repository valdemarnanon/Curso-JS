const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz Quadrada de <strong>${numero}</strong> é: <strong>${Math.sqrt(numero)}</strong></p>`;

texto.innerHTML += `<p><strong>${numero}</strong> é inteiro?: <strong>${Number.isInteger(numero)}</strong></p>`;

texto.innerHTML += `<p><strong>${numero}</strong> é Nan?: <strong>${isNaN(numero)}</strong></p>`;

texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong></p>`;

texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.round(numero)}</strong></p>`;

texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;
