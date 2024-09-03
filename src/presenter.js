import showCant from './ventas.js';

document.getElementById('mostrar').addEventListener('click', () => {
    const cantidaditems = document.getElementById('cantidaditem').value;
    const precioitems = document.getElementById('precioitem').value;
    const Items= showCant(cantidaditems);
    const Precio = showCant(precioitems);
    document.getElementById('Items').textContent = cantidaditems;
    document.getElementById('Precio').textContent = precioitems;
});


