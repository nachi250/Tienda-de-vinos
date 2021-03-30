//Cargamos los productos en el sitio.
let cargoProductos = () => { 
    contenedorProductos.innerHTML = ""
    for (let producto of misProductos) {
        let div = `
                    <div class="producto">
                        <img src="${producto.img}" alt="Imagen de vino" width="150">
                        <button type="button" class="btn btn-primary" onclick="agregoProductoAlCarrito(${producto.productoId})">+ Add $ ${producto.precio}</button>
                    </div>
                    `
                    contenedorProductos.innerHTML += div
                }
                producto = new Producto(carrito)
        }
cargoProductos()




let agregoProductoAlCarrito = (id) => {
    let r = misProductos.find(p => p.productoId == id)
        carrito.push(r)
        actualizoCarrito()
        guardoCarrito() //Me guarda en localStorage, el carrito parcial de la compra realizada
        armoListaCarrito() // Agrega los productos a la lista del carrito
        precioTotal.innerText = ("$ "+calculoTotal()+",00") // Agrego el total al final del carrito
}


let actualizoCarrito = () => { //Me actualiza la leyenda de cantidad de productos en el carrito
    let leyendaCarrito = `PRODUCTOS EN EL CARRITO: ${carrito.length}`
    productosEnCarrito.innerHTML = leyendaCarrito;
}

let guardoCarrito = () => { //Guardo el carrito en localStorage, solo si tiene productos 
    if (carrito.length > 0)
        localStorage.carrito = JSON.stringify(carrito)
}

let recuperoCarrito = () => { //Recupero el carrito de localStorage asignándole los productos al array carrito[]
    if (localStorage.carrito != undefined) {
        carrito = JSON.parse(localStorage.carrito)
        actualizoCarrito() //actualizo la leyenda de total de productos en carrito
    }
}

let armoListaCarrito = () => { //Cargo productos a la lista de productos en el carrito 
    let productosEnCarrito = ""
    tablaCarrito.innerHTML = ""
         for (let producto of carrito) {
                productosEnCarrito = `
                <tr>
                    <td class="align-middle producto-name">${producto.nombre}</td>
                    <td class="align-middle">$ ${producto.precio},00</td>
                    <td class="align-middle">
                    <button type="button" class="btn btn-danger" onclick="eliminarProductoDelCarrito(${producto.productoId})">Quitar</button></td>
                </tr>
             `
                tablaCarrito.innerHTML += productosEnCarrito
                
                for (let i = 0; i < btn.length; i++) { // Recorre la lista de productos agregados al carrito
                    let boton = btn[i]; 
                    boton.addEventListener("click", function (event) { // Asigno el evento al boton "eliminar"
                        let btnClickeado = event.target // Para que reconozca el boton que fue cliqueado
                        btnClickeado.parentElement.parentElement.remove()                  
                    })
                    
                }
        
         }

    }
    
    let calculoTotal = () => {
        let totalCarrito = 0
        for (total of carrito) {
            totalCarrito += total.precio }
            return totalCarrito
    }

    const finalizarCompra = () => { 
        alert("Muchas Gracias por su compra!")
        setTimeout(function(){ location.reload();}, 1500);
    }

// Eliminando productos del carrito

let btn = document.getElementsByClassName("btn-danger") // Le asigno la variable al Boton para eliminar productos
for (let i = 0; i < btn.length; i++) { 
    let boton = btn[i];
    boton.addEventListener("click", function (event) {
        let btnClickeado = event.target
        btnClickeado.parentElement.parentElement.remove()
    })
    function eliminarProductoDelCarrito(id) { // Borro los productos del array carrito[]
        let r = carrito.findIndex(p => p.productoId === id)
        carrito.splice(r, 1)
        actualizoCarrito()
        guardoCarrito()
        precioTotal.innerText = ("$ "+calculoTotal()+",00")
    }
}






    















