
(function(){

// VARIABLES
let lista = document.getElementById("lista"),
    lista2 = document.getElementById("lista2");

// ARRAY DE OBJETOS: PRODUCTOS
let misProductos = [{productoId: 1, nombre: "Producto 1", stock: 12, precio: 780},
{productoId: 2, nombre: "Producto 2", stock: 12, precio: 620},
{productoId: 3, nombre: "Producto 3", stock: 12, precio: 500},
{productoId: 4, nombre: "Producto 4", stock: 12, precio: 500},
{productoId: 5, nombre: "Producto 5", stock: 12, precio: 450}]

// ARRAY DE OBJETOS: PRESENTACION  
let presentacion = [{tipo: "Bolsa", cantidad: 1},
                    {tipo: "Caja x 2", cantidad : 2},
                    {tipo: "Caja x 3", cantidad : 3}];

// AGREGAR PRODUCTOS AL LISTA
let producto1 = document.getElementById("producto1");
        producto1.addEventListener("click", function producto1() {
            document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[0].nombre+" - $ "+misProductos[0].precio+"</a></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })

let producto2 = document.getElementById("producto2");
        producto2.addEventListener("click", function producto2() {
            document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[1].nombre+" - $ "+misProductos[1].precio+"</a></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })
let producto3 = document.getElementById("producto3");
        producto3.addEventListener("click", function producto3() {
            document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[2].nombre+" - $ "+misProductos[2].precio+"</a></li>";            
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })
let producto4 = document.getElementById("producto4");
        producto4.addEventListener("click", function producto4() {
            document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[3].nombre+" - $ "+misProductos[3].precio+"</a></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })
let producto5 = document.getElementById("producto5");
        producto5.addEventListener("click", function producto5() {
            document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[4].nombre+" - $ "+misProductos[4].precio+"</a></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })


// ELEGIR LA PRESENTACION
let presentacion1 = document.getElementById("presentacion1");
        presentacion1.addEventListener("click", function presentacion1() {
            document.getElementById("lista2").innerHTML += "<li><a href='#'>"+presentacion[0].tipo+"</a></li>";
            for (let i = 0; i <= lista2.children.length -1; i++) {
                lista2.children[i].addEventListener("click", eliminarPresentacion);    
            }
        })
let presentacion2 = document.getElementById("presentacion2");
        presentacion2.addEventListener("click", function presentacion2() {
            document.getElementById("lista2").innerHTML += "<li><a href='#'>"+presentacion[1].tipo+"</a></li>";
            for (let i = 0; i <= lista2.children.length -1; i++) {
                lista2.children[i].addEventListener("click", eliminarPresentacion);    
            }
        })
let presentacion3 = document.getElementById("presentacion3");
        presentacion3.addEventListener("click", function presentacion3() {
            document.getElementById("lista2").innerHTML += "<li><a href='#'>"+presentacion[2].tipo+"</a></li>";            
            for (let i = 0; i <= lista2.children.length -1; i++) {
                lista2.children[i].addEventListener("click", eliminarPresentacion);    
            }
        })

// CALCULAR TOTAL
let totalPrecio = document.getElementById("totalPrecio");

//FINALIZAR COMPRA
function finalizarCompra() {
    alert("Finalizar compra");
}

// ELIMINAR PRODUCTO
let eliminarProducto = function eliminarProducto() {
    this.parentNode.removeChild(this);
}
for (let i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);   
}

// ELIMINAR PRESENTACION
let eliminarPresentacion = function eliminarPresentacion() {
    this.parentNode.removeChild(this);
}
for (let i = 0; i <= lista2.children.length -1; i++) {
    lista2.children[i].addEventListener("click", eliminarPresentacion);    
}




}());

// 1: Seleccionar un articulo y que este se agregue automaticamente a una lista mediante boton agregar producto.
// 2: Sumar el total de los valores de los productos seleccionados.
// 3: Elegir la presentacion y aplicar el descuento sobre el total.
// 4: Mediante un boton "finalizar compra" redirigir al sitio de pago.
// 5: Eliminar productos de la lista, mediante click.