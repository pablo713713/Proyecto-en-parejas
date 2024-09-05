function getInputData(ejex, ejey, posx = null, posy= null, direccion= null,movimientos=null) {
    return [ejex, ejey, posx, posy, direccion,movimientos];
}

function getDataIsCorrect(ejex, ejey) {
    if(ejex >= 0 && ejey >= 0 && Number.isInteger(ejex) && Number.isInteger(ejey)){
        return true
    }
    return false
}

function getPosIsCorrect(ejex, ejey, posx = null, posy= null,direccion= null ) {
    if(getDataIsCorrect(posx, posy) && ejex >= posx && ejey >= posy && (direccion == "N" || direccion == "S" || direccion == "O" || direccion == "E") ){
        return true
    }
    return false
}

function getMotionIsCorrect(movimientos=null) {

    const regex = /^[ADI]+$/;
    return regex.test(movimientos);
}

function turnRight(direccion) {
    const direcciones = ['N', 'E', 'S', 'O'];
    let index = direcciones.indexOf(direccion);
    
    if (index === -1) return null;
    index = (index + 1) % direcciones.length;
    
    return direcciones[index];
}
function turnLeft(direccion) {
    const direcciones = ['N', 'O', 'S', 'E']; // Cambia el orden para girar a la izquierda
    let index = direcciones.indexOf(direccion);

    if (index === -1) return null;
    index = (index + 1) % direcciones.length;

    return direcciones[index];
}

export { getDataIsCorrect, getInputData, getPosIsCorrect, getMotionIsCorrect, turnRight, turnLeft };

