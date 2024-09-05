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
function forward(ejex, ejey, posx = null, posy= null, direccion= null,movimientos=null) {

    if(direccion == 'N')
    {
        if(posy == ejey)
        {
            return [posx, posy, direccion];
        }
        return [posx, posy+1, direccion];
    }else if(direccion == 'S'){
        if(posy == 0)
        {
            return [posx, posy, direccion];
        }
        return [posx, posy-1, direccion];
    }else if(direccion == 'O'){
        if(posx == 0)
        {
            return [posx, posy, direccion];
        }
        return [posx-1, posy, direccion];
    }else if(direccion == 'E'){
        if(posx == ejex)
        {
            return [posx, posy, direccion];
        }
        return [posx+1, posy, direccion];
    }
}

function Go(ejex, ejey, posx = null, posy= null, direccion= null,movimientos=null) {
    
    let posicionfinal = new Array(3);
    for (let i = 0; i < movimientos.length; i++) {
        if(movimientos[i] == 'A')
        {
            posicionfinal= forward(ejex, ejey, posx, posy, direccion, 'A')
        }else if(movimientos[i] == 'I')
        {
            posicionfinal[2] = turnLeft(direccion)
            posicionfinal[1] = posy
            posicionfinal[0] = posx
        }else if(movimientos[i] == 'D')
        {
            posicionfinal[2] = turnRight(direccion)
            posicionfinal[1] = posy
            posicionfinal[0] = posx
        }
         posx = posicionfinal[0]
         posy = posicionfinal[1]
         direccion = posicionfinal[2]
    }
    return posicionfinal
}

export { getDataIsCorrect, getInputData, getPosIsCorrect, getMotionIsCorrect, turnRight, turnLeft , forward, Go};

