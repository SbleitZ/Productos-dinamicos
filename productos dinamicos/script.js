const test = document.querySelector(".testing")
const tast = document.querySelector(".testing")
const hola = document.querySelector(".header-item")
const clases = document.getElementsByClassName('testing')
const tabla = document.querySelector(".tabla")
let reales = document.getElementsByClassName("header-item")
let total = document.querySelectorAll(".header-item")
const price = document.getElementById("price")

console.log(total.length)
let productos = {
    img: 'hola',
    nombreP: [],
    cantidad: [],//cafe platano sandia pera
    repeticion: [],//cafe platano sandia pera,
    money: 0
}
console.log(total[2].firstElementChild.nextElementSibling.innerHTML)
// console.log(productos)
n=total.length//cantidad de productos, también modificar la parte de de repeticion y cantidad en el objeto productos
// console.log("tamaño"+ productos.cantidad.length)
// productos.cantidad.push(0)
// productos.repeticion.push(false)
for (i=0; i<total.length; i++) {//inicialización
    productos.cantidad.push(0)
    productos.repeticion.push(false)
    productos.nombreP.push(total[i].firstElementChild.nextElementSibling.innerHTML)//agrego el nombre del producto como un tipo de constructor
    //inicializo todos los datos necesarios para ser manipulados
}
console.log(productos.repeticion)
const fragmento = document.createDocumentFragment()
for(let i = 0;i<n;i++){

    clases[i].onclick = () =>{
        
        if(productos.repeticion[i]){
            productos.cantidad[i]++
            // al hijo que tenga de nombre cafe se le agrega una cantidad más a sus hermanos
                console.log(tabla.children)
            // for(ite in tabla.children){
            //     if(tabla.children[ite].firstElementChild[1].innerHTML == productos.nombreP[ite]){
            //         productos.cantidad[ite]++
            //     }
            // }
            //significa que ya esta el producto
            
        }else{//si no esta el producto se crea y se añade
            productos.repeticion[i] = true;
            productos.cantidad[i]++
            
            // console.log(`cantidad a llevar: ${productos.cantidad[i]}`)

            const tr = document.createElement("TR")
            const tdIMG = document.createElement("TD")
            const tdP = document.createElement("TD")
            const tdPrice = document.createElement("TD")
            const tdCantidad = document.createElement("TD")
            const eliminar = document.createElement("BUTTON")
            eliminar.setAttribute("class", "eliminar")
            eliminar.innerHTML = "X"

            const agregar =  document.createElement("BUTTON")
            agregar.innerHTML = '+'
            agregar.setAttribute("class", "agregar")
            agregar.onclick = () =>{
                agregar.previousElementSibling.innerHTML++
                productos.money += parseInt(eliminar.nextElementSibling.innerHTML.split('$')[1])
                price.innerHTML = productos.money
            }
            eliminar.onclick = () =>{
                if(agregar.previousElementSibling.innerHTML == 1){
                    //borrar la linea
                    productos.money -= parseInt(eliminar.nextElementSibling.innerHTML.split('$')[1])
                    price.innerHTML = productos.money
                    tabla.removeChild(agregar.parentElement)
                    for(let r=0;r<n;r++){//cantidad de productos
                        if(agregar.previousElementSibling.previousElementSibling.innerHTML == productos.nombreP[r]){
                            // console.log("cafesito borradito")
                            productos.repeticion[r] = false;
                            productos.cantidad[r] = 0
                        }
                    }
                    
                    
                }else{
                    agregar.previousElementSibling.innerHTML--
                    productos.money -= parseInt(eliminar.nextElementSibling.innerHTML.split('$')[1])
                    price.innerHTML = productos.money
                }
            }
            
            tdCantidad.innerHTML = productos.cantidad[i];
            tdIMG.innerHTML = reales[i].children[0].outerHTML
            tdP.innerHTML = reales[i].children[1].innerHTML
            tdPrice.innerHTML = reales[i].children[2].innerHTML
            // console.log(tdPrice.innerHTML)
            // productos.money = 
            productos.money += parseInt(reales[i].children[2].innerHTML.split('$')[1])
            price.innerHTML = productos.money
            // console.log(productos.money)
            // td.outerHTML = `${productos.img}`
            tr.appendChild(tdIMG)
            tr.appendChild(tdP)
            tr.appendChild(tdCantidad)
            tr.appendChild(agregar)
            tr.appendChild(eliminar)
            tr.appendChild(tdPrice)
            fragmento.appendChild(tr)
            tabla.appendChild(fragmento)
        }
    }
}
