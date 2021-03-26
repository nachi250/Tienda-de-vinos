
let cargoProductos = () => { //función con la cual cargamos el array JSON de cursos, en la tabla principal
    contenedorProductos.innerHTML = ""
    for (let producto of misProductos) {
        let div = `
                    <div class="producto">
                        <img src="${producto.img}" alt="funciono" width="150">
                        <button type="button" onclick="agregoProductoAlCarrito(${producto.productoId})">Agregar al carrito</button>
                    </div>
                    `
                    contenedorProductos.innerHTML += div
                }
                //Si existe un localStorage con el carrito almacenado, lo recupero por aquí
                //localStorage no me sirve para nada, dentro de la función cargoCursos(), pero como esta última función
                //la llamo cuando se carga el documento HTML, allí es donde la lógica de recuperoCarrito() se aplica
                producto = new Producto(carrito)
            //También instancio curso dentro de la función cargoCurso(), solo para que se instancie al momento de cargar,
            //o recargar el documento HTML.
}
cargoProductos()

let agregoProductoAlCarrito = (id) => {
    let r = misProductos.find(p => p.productoId == id)
        carrito.push(r)
        // console.log("Se agregó al carrito 👇")
        // console.table(r)
        actualizoCarrito()
        guardoCarrito() //Me guarda en localStorage, el carrito parcial de la compra realizada
        armoListaCarrito() // Agrega los productos a la lista del carrito
        precioTotal.innerText = ("$ "+calculoTotal()) // Calculo el total en el carrito
}


let actualizoCarrito = () => { //Me actualiza la leyenda de cantidad de cursos en el carrito
    let leyendaCarrito = `PRODUCTOS EN EL CARRITO: ${carrito.length}`
    productosEnCarrito.innerHTML = leyendaCarrito;
}

let guardoCarrito = () => { //Guardo el carrito en localStorage, solo si tiene productos
    if (carrito.length > 0)
        localStorage.carrito = JSON.stringify(carrito)
}

let recuperoCarrito = () => { //Recupero el carrito de localStorage asignándole los cursos al array carrito[]
    if (localStorage.carrito != undefined) {
        carrito = JSON.parse(localStorage.carrito)
        actualizoCarrito() //actualizo la leyenda de total de productos en carrito
    }
}

let armoListaCarrito = () => { //Cargo productos a la lista de productos 
    let productosEnCarrito = ""
    tablaCarrito.innerHTML = ""
         for (let producto of carrito) {
                productosEnCarrito = `
                <tr>
                    <td class="align-middle producto-name">${producto.nombre}</td>
                    <td class="align-middle">$ ${producto.precio}</td>
                    <td class="align-middle"><button type="button" class="btn btn-danger" onclick="eliminarProductoDelCarrito(${producto.productoId})">Quitar</button></td>
                </tr>
             `
                tablaCarrito.innerHTML += productosEnCarrito
                
                for (let i = 0; i < btn.length; i++) {
                    let boton = btn[i];
                    boton.addEventListener("click", function (event) {
                        let btnClickeado = event.target
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

let btn = document.getElementsByClassName("btn-danger")
for (let i = 0; i < btn.length; i++) {
    let boton = btn[i];
    boton.addEventListener("click", function (event) {
        let btnClickeado = event.target
        btnClickeado.parentElement.parentElement.remove()
    })
    function eliminarProductoDelCarrito(id) {
        let r = carrito.findIndex(p => p.productoid == id)
        carrito.splice(r, 1)
        actualizoCarrito()
        guardoCarrito()
        precioTotal.innerText = ("$ "+calculoTotal())
    }
}





    















