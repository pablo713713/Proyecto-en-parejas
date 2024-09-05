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

export { getDataIsCorrect , getInputData, getPosIsCorrect, getMotionIsCorrect};