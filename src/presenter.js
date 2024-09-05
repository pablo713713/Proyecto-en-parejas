import {getInputData, getDataIsCorrect, getPosIsCorrect, getMotionIsCorrect, turnRight, turnLeft} from './datos.js';

document.getElementById('mostrar').addEventListener('click', () => {
    const ejex = parseFloat(document.getElementById('ejex').value);
    const ejey = parseFloat(document.getElementById('ejey').value);
    const posx = parseFloat(document.getElementById('posx').value);
    const posy = parseFloat(document.getElementById('posy').value);
    const direccion = document.getElementById('direccion').value;
    const movimientos = document.getElementById('movimientos').value; 
    
    // Verificación de datos
    const resultPassEje = getDataIsCorrect(ejex, ejey);
    const resultPassPos = getPosIsCorrect(ejex, ejey, posx, posy, direccion);
    const resultPassMotion = getMotionIsCorrect(movimientos);
    
    if (resultPassEje && resultPassPos && resultPassMotion) {
        const result = getInputData(ejex, ejey, posx, posy, direccion, movimientos);
        const nuevaDireccionDerecha = turnRight(direccion); 
        const nuevaDireccionIzquierda = turnLeft(direccion); 
        
        document.getElementById('ejex-output').textContent = result[0];
        document.getElementById('ejey-output').textContent = result[1];
        document.getElementById('posx-output').textContent = result[2];
        document.getElementById('posy-output').textContent = result[3];
        document.getElementById('direccion-output').textContent = direccion;
        document.getElementById('movimientos-output').textContent = result[5];

        console.log('Dirección al girar a la derecha:', nuevaDireccionDerecha);
        console.log('Dirección al girar a la izquierda:', nuevaDireccionIzquierda);
    } else {
        // Mostrar alerta si los datos son incorrectos
        alert('Las casillas fueron llenadas de manera incorrecta. Por favor, revisa los datos.');

        // Borrar contenido de los campos de entrada
        document.getElementById('ejex').value = '';
        document.getElementById('ejey').value = '';
        document.getElementById('posx').value = '';
        document.getElementById('posy').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('movimientos').value = '';
    }
});

