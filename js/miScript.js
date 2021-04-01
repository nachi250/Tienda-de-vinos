//Cargamos los productos en el sitio.
let cargoProductos = () => { 
    contenedorProductos.innerHTML = ''
    for (let producto of misProductos) {
        let div = `
                    <div class="producto">
                        <img class="img-producto" src="${producto.img}" alt="Imagen de vino" width="150">
                        <p class="producto-nombre">${producto.nombre}</p>
                        <p class="producto-precio">$ ${producto.precio},00</p>
                        <button type="button" class="btn btn-primary">+ Add $ ${producto.precio}</button>
                    </div>
                    `
                    contenedorProductos.innerHTML += div
                }
                producto = new Producto(carrito)
        }
cargoProductos()


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let botonEliminarProductoDelCarrito = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < botonEliminarProductoDelCarrito.length; i++) {
        const boton = botonEliminarProductoDelCarrito[i];
        boton.addEventListener('click', eliminarProductoDelCarrito)   
    }

    let itemCantidadInput = document.getElementsByClassName('item-cantidad-input')
    for (let i = 0; i < itemCantidadInput.length; i++) {
    let cantidad = itemCantidadInput[i];
    cantidad.addEventListener('change', cantidadDeProductos)   
    }

    let botonAñadirProductoAlCarrito = document.getElementsByClassName('btn-primary')
    for (let i = 0; i < botonAñadirProductoAlCarrito.length; i++) {
        boton = botonAñadirProductoAlCarrito[i];
        boton.addEventListener('click', añadirProductoSeleccionado)
    }
}

function eliminarProductoDelCarrito(event) {
    let botonCliqueado = event.target
            botonCliqueado.parentElement.parentElement.remove()
            actualizarTotalDelCarrito()
}


function cantidadDeProductos(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarTotalDelCarrito()
}

// Agregar Productos al carrito de compras
function añadirProductoSeleccionado(event) {
   let boton = event.target
   let itemProducto = boton.parentElement
   let nombre = itemProducto.getElementsByClassName('producto-nombre')[0].innerText
   let precio = itemProducto.getElementsByClassName('producto-precio')[0].innerText
   let img = itemProducto.getElementsByClassName('img-producto')[0].src
   console.log(nombre, precio, img)
   cargarProductoAlCarrito(nombre, precio, img)
   actualizarTotalDelCarrito()
}

function cargarProductoAlCarrito(nombre, precio, img) {
    let fila = document.createElement('tr')
    fila.classList.add('item-carrito')
    let tablaCarrito = document.getElementsByClassName('tabla-carrito')[0]
    let itemCarritoNombre = document.getElementsByClassName('item-carrito-nombre')
    for (let i = 0; i < itemCarritoNombre.length; i++) {
        if (itemCarritoNombre[i].innerText == nombre) {
            alert('Este producto ya se encuentra en el carrito')
            return
        }
    }
    let itemFila = `
        <td class="align-middle"><img class="" src="${img}" alt="" width="50"><p class="item-carrito-nombre">${nombre}</p></td>
        <td class="align-middle item-carrito-precio">${precio}</td>
        <td class="align-middle"><input class="cart-quantity-input item-cantidad-input" type="number" value="1"><button type="button" class="btn btn-danger">Quitar</button></td>
        `
        fila.innerHTML = itemFila
    tablaCarrito.append(fila)
    fila.getElementsByClassName('btn-danger')[0].addEventListener('click', eliminarProductoDelCarrito)
    fila.getElementsByClassName('item-cantidad-input')[0].addEventListener('change', cantidadDeProductos)
}

//Actualizar el precio y y cantidad de productos     
function actualizarTotalDelCarrito() {
    let tablaCarrito = document.getElementsByClassName('tabla-carrito')[0]
    let itemsCarrito = document.getElementsByClassName('item-carrito')
    let c = document.getElementById('leyendaProductosCarrito')
    let total = 0
    let y = 0
    for (let i = 0; i < itemsCarrito.length; i++) {
         let itemCarrito = itemsCarrito[i];
         let itemCarritoPrecio = itemCarrito.getElementsByClassName('item-carrito-precio')[0]
         let itemCantidadInput = itemCarrito.getElementsByClassName('item-cantidad-input')[0]
         let precio = parseFloat(itemCarritoPrecio.innerText.replace('$', ''))
         let cantidad = itemCantidadInput.value
         total = total + (precio * cantidad)
         let n = parseInt(itemCantidadInput.value)
         y = y += n
         console.log(y)
    }
    document.getElementsByClassName('carrito-total')[0].innerText = '$ '+total+',00'
    c.innerHTML = 'PRODUCTOS EN EL CARRITO: '+y
}

function finalizarCompra() {

    alert("Muchas gracias por su compra!") //Agradezco la compra realizada
    setTimeout(() => { //Espero dos y medio segundos, 👇 luego...
        document.location.reload()
    }, 2500);
}












    















