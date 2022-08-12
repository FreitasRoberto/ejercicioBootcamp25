//Una función sin parámetros que devuelva siempre "true"

function devuelvaTrue() {
    return true
}
const devolver = devuelvaTrue();
console.log(devolver)

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function unaPromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

const promesa = unaPromesa();
console.log(promesa)


//Una función generadora de índices pares automáticos



function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}

const ids = idsPares();

console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)