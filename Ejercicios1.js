

let nombre = "Victor";
let apellido = "Ovalle";
let nombreDeUsuarioPlatzi = "Edu2022";
let correoElectronico = "Victor@platzi.com";
let mayorDeEdad = true;
let dineroAhorrado = 0;
let deudas = 00;


console.log(`Hola mi nombre completo es ${nombre} ${apellido}`);


let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
function readArray(array) {
for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`)
}
};
readArray(myArray);



function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname)

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + "." );
}

saludo("Juanita","Gallegos","juanitamonitos")

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic' ) {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
} else if (tipoDeSuscripcion == 'ExpertDuo'){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año");
}


for (let i = 0; i < 5; i++){
    console.log("El valor de i es: " + i)
}

for (let i = 10; i >= 2; i--){
    console.log("El valor de i es: " + i);
}


let i = 0;
while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

let x = 10;
while (x >= 2){
    console.log("El valor de x es: " + x);
    x--;
}

let respuesta;
while( respuesta != '4') {
    let pregunta = prompt('¿Cuanto es 2 + 2');
    respuesta = pregunta;
}


function imprimirPrimerElementoArray(arr){
    console.log(arr[2])
}

imprimirPrimerElementoArray(['Juanita','roro','jojo'])


function imprimirTodoLosElementosUnoxUno(arrays) {
for(let i = 0; i < arrays.length; i++) {
    console.log(arrays[i])
    }
}

imprimirTodoLosElementosUnoxUno(['Juanita','roro','jojo'])

// investigar con san google xd!

function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto({
    nombre: 'Fulanito',
    edad: 3,
    comidas: ['carapulcra','tallarines'],
})

