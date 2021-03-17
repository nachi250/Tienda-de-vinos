(function(){

// FUNCION CONSTRUCTORA
function Producto(id, nombre, stock, precio) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}

let prod1 = new Producto(1, 'Pispi Blend', 12, 780);
let prod2 = new Producto(2, 'Luigi Bosca Malbec', 12, 620);
let prod3 = new Producto(3, 'Rutini Cabernet Sauvignon', 12, 500);
let prod4 = new Producto(4, 'Terrazas Gran Reserva', 12, 500);
let prod5 = new Producto(5, 'La Linda Malbec 2018', 12, 450);

// ARRAY DE OBJETOS
let misProductos = [];

misProductos.push(prod1, prod2, prod3, prod4, prod5);

// VARIABLES LISTAS DE PRODUCTOS
let lista = document.getElementById("lista"),
    lista2 = document.getElementById("lista2");

// ARRAY DE OBJETOS: PRODUCTOS
//let misProductos = [{productoId: 1, nombre: "Producto 1", stock: 12, precio: 780},
//{productoId: 2, nombre: "Producto 2", stock: 12, precio: 620},
//{productoId: 3, nombre: "Producto 3", stock: 12, precio: 500},
//{productoId: 4, nombre: "Producto 4", stock: 12, precio: 500},
//{productoId: 5, nombre: "Producto 5", stock: 12, precio: 450}]

// ARRAY DE OBJETOS: PRESENTACION  
let presentacion = [{tipo: "Bolsa", cantidad: 1},
                    {tipo: "Caja x 2", cantidad : 2},
                    {tipo: "Caja x 3", cantidad : 3}];

// AGREGAR PRODUCTOS AL LISTA
let producto1 = document.getElementById("producto1");
        producto1.addEventListener("click", function producto1() {
            document.getElementById("lista").innerHTML += "<li><p>"+misProductos[0].nombre+" - $ "+misProductos[0].precio+"</p></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })

let producto2 = document.getElementById("producto2");
        producto2.addEventListener("click", function producto2() {
            document.getElementById("lista").innerHTML += "<li><p>"+misProductos[1].nombre+" - $ "+misProductos[1].precio+"</p></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })
let producto3 = document.getElementById("producto3");
        producto3.addEventListener("click", function producto3() {
            document.getElementById("lista").innerHTML += "<li><p>"+misProductos[2].nombre+" - $ "+misProductos[2].precio+"</p></li>";            
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })
let producto4 = document.getElementById("producto4");
        producto4.addEventListener("click", function producto4() {
            document.getElementById("lista").innerHTML += "<li><p>"+misProductos[3].nombre+" - $ "+misProductos[3].precio+"</p></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })
let producto5 = document.getElementById("producto5");
        producto5.addEventListener("click", function producto5() {
            document.getElementById("lista").innerHTML += "<li><p>"+misProductos[4].nombre+" - $ "+misProductos[4].precio+"</p></li>";
            for (let i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", eliminarProducto);   
            }
        })


// ELEGIR LA PRESENTACION
let presentacion1 = document.getElementById("presentacion1");
        presentacion1.addEventListener("click", function presentacion1() {
            document.getElementById("lista2").innerHTML += "<li><p>"+presentacion[0].tipo+"</p></li>";
            for (let i = 0; i <= lista2.children.length -1; i++) {
                lista2.children[i].addEventListener("click", eliminarPresentacion);    
            }
        })
let presentacion2 = document.getElementById("presentacion2");
        presentacion2.addEventListener("click", function presentacion2() {
            document.getElementById("lista2").innerHTML += "<li><p>"+presentacion[1].tipo+"</p></li>";
            for (let i = 0; i <= lista2.children.length -1; i++) {
                lista2.children[i].addEventListener("click", eliminarPresentacion);    
            }
        })
let presentacion3 = document.getElementById("presentacion3");
        presentacion3.addEventListener("click", function presentacion3() {
            document.getElementById("lista2").innerHTML += "<li><p>"+presentacion[2].tipo+"</p></li>";            
            for (let i = 0; i <= lista2.children.length -1; i++) {
                lista2.children[i].addEventListener("click", eliminarPresentacion);    
            }
        })

// CALCULAR TOTAL
let totalPrecio = document.getElementById("totalPrecio");

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

//FINALIZAR COMPRA
let finalizarCompra = document.getElementById("finalizarCompra");

finalizarCompra.addEventListener("click", function finalizarCompra() {
    alert("finalizar compra");
})

}());

// 1: Seleccionar un articulo y que este se agregue automaticamente a una lista mediante boton agregar producto.
// 2: Sumar el total de los valores de los productos seleccionados.
// 3: Elegir la presentacion y aplicar el descuento sobre el total.
// 4: Mediante un boton "finalizar compra" redirigir al sitio de pago.
// 5: Eliminar productos de la lista, mediante click.