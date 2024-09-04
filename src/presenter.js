import getInputData from './datos.js';

document.getElementById('mostrar').addEventListener('click', () => {
    const ejex = document.getElementById('ejex').value;
    const ejey = document.getElementById('ejey').value;
    const posx = document.getElementById('posx').value;
    const posy = document.getElementById('posy').value;
    const direccion = document.getElementById('direccion').value;
    const movimientos = document.getElementById('movimientos').value; 
    const result = getInputData(ejex, ejey, posx, posy, direccion,movimientos);
    
    document.getElementById('ejex-output').textContent = result[0];
    document.getElementById('ejey-output').textContent = result[1];
    document.getElementById('posx-output').textContent = result[2];
    document.getElementById('posy-output').textContent = result[3];
    document.getElementById('direccion-output').textContent = result[4];
    document.getElementById('movimientos-output').textContent = result[5];
});
