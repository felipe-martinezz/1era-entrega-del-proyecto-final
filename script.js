class Champion {
    constructor(marca, modelo, talle, precio) {
        this.marca = marca
        this.modelo = modelo
        this.talle = talle
        this.precio = precio
    }
}

const championes1 = new Champion("nike", "hyperdunk", 45, 195)
const championes2 = new Champion("nike", "kd", 47, 205)
const championes3 = new Champion("adidas", "harden", 43, 150)
const championes4 = new Champion("adidas", "rose", 40, 165)
const championes5 = new Champion("under armour", "curry", 46, 250)
const championes6 = new Champion("under armour", "embiid", 41, 220)
const championes7 = new Champion("converse", "chuck taylor", 42, 120)
const championes8 = new Champion("jordan", "melo III", 44, 210)

const championes = [championes1, championes2, championes3, championes4, championes5, championes6, championes7, championes8]

//Array buscar por marca
function buscarChampion(championes) {
   let marcaChampion = prompt("Que champion de basketball quiere comprar?").toLowerCase()
   console.log(marcaChampion)
   let championBuscado = championes.find(
    (champion) => champion.marca == marcaChampion
   )
   console.log(championBuscado)
   if(championBuscado === undefined) {
       console.log("Esta marca no está disponible en la tienda")
   } else {
       alert(`La marca que seleccionaste está disponible, es ${championBuscado.marca}`)
   }
}

//Array talle
function talleChampion(championes) {
    let buscarTalle = parseFloat(prompt("Ingrese el talle que busca"))
    let encontrarTalle = championes.filter(
        (championes) => championes.talle >= buscarTalle
    )

    if(encontrarTalle.lenght == 0) {
        console.log("No se encuentra el talle deseado")
    } else {
        console.log(encontrarTalle)
    }
}

//Array ordenar por precio
function ordenarPrecios(championes) {
    let ordenar = parseInt(
       prompt("Ingrese 1 para ordenar de menor a mayor precio, o 2 para ordenar de mayor a menor precio ") 
    )
    if (ordenar === 1) {
        console.log(championes.sort((a, b) => a.precio - b.precio))
    } else if (ordenar === 2) {
        console.log(championes.sort((a, b) => b.precio - a.precio))
    }
}

let respuesta

do {
    respuesta = parseInt(
       prompt(`Ingrese su opción deseada
       1- Buscar por marca
       2- Buscar por talle
       3- Ordenar por precio`)
    )
} while (respuesta < 1 || respuesta > 3);

switch (respuesta) {
    case 1: 
        buscarChampion(championes)
        break
    case 2:
        talleChampion(championes)
        break
    case 3:
        ordenarPrecios(championes)
        break
    default:
        alert("Opción no válida")
        break            
}

