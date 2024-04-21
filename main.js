
document.getElementById('cont').style.color = "red";

document.addEventListener('DOMContentLoaded', function() {
    const botaoIncrementar = document.getElementById('add');
    const botaoDecrementar = document.getElementById('sub');
    const displayContador = document.getElementById('cont');

    let contador = 0;

    botaoIncrementar.addEventListener('click', function() {
        contador = contador + 1;
        displayContador.textContent = contador;
    });

    botaoDecrementar.addEventListener('click', function() {
        contador = contador + 1;
        displayContador.textContent = contador;
    });
});

