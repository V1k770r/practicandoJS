const tipoDeSuscripcion = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertoduo: 'Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año'
    };

function conseguirTipoSuscripcion(suscripcion) {
    if (tipoDeSuscripcion[suscripcion]){
        console.log(tipoDeSuscripcion[suscripcion]);
        return;
    }
    console.warn('Este tipo de suscripcion no existe')
}

conseguirTipoSuscripcion('lalala')