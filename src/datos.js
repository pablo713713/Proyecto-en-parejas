function getInputData(ejex, ejey, posx = null, posy= null, direccion= null,movimientos=null) {
    return [ejex, ejey, posx, posy, direccion,movimientos];
}

function getDataIsCorrect(ejex, ejey) {
    if(ejex >= 0 && ejey >= 0 && Number.isInteger(ejex) && Number.isInteger(ejey)){
        return true
    }
    return false
}

export { getDataIsCorrect , getInputData};