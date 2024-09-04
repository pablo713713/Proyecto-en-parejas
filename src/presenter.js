import showTam from './datos.js';

document.getElementById('mostrar').addEventListener('click', () => {
    const dim_ejex = document.getElementById('ejex').value;
    const dim_ejey = document.getElementById('ejey').value;
    const Items = showTam(dim_ejex);  // Uso correcto de showTam
    const Precio = showTam(dim_ejey);
    
    // Actualización de los spans, no de los inputs
    document.getElementById('ejex-output').textContent = Items;
    document.getElementById('ejey-output').textContent = Precio;
});

 