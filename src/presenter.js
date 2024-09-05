import {getInputData, getDataIsCorrect, getPosIsCorrect, getMotionIsCorrect} from './datos.js';

document.getElementById('mostrar').addEventListener('click', () => {
    const ejex = parseFloat(document.getElementById('ejex').value);
    const ejey = parseFloat(document.getElementById('ejey').value);
    const posx = parseFloat(document.getElementById('posx').value);
    const posy = parseFloat(document.getElementById('posy').value);
    const direccion = document.getElementById('direccion').value;
    const movimientos = document.getElementById('movimientos').value; 
    const resultPassEje = getDataIsCorrect(ejex, ejey);
    const resultPassPos = getPosIsCorrect(ejex, ejey, posx, posy, direccion);
    const resultPassMotion = getMotionIsCorrect(movimientos);
    const result = getInputData(ejex, ejey, posx, posy, direccion,movimientos);
    
    
    document.getElementById('ejex-output').textContent = result[0];
    document.getElementById('ejey-output').textContent = result[1];
    document.getElementById('eje-Pass').textContent = resultPassEje;
    document.getElementById('posx-output').textContent = result[2];
    document.getElementById('posy-output').textContent = result[3];
    document.getElementById('pos-Pass').textContent = resultPassPos;
    document.getElementById('direccion-output').textContent = result[4];
    document.getElementById('movimientos-output').textContent = result[5];
    document.getElementById('Motion-Pass').textContent = resultPassMotion;
})
