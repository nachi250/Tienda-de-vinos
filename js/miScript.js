// ARRAY DE OBJETOS: PRODUCTOS
let misProductos = [{productoid: 1, nombre: "Producto 1", stock: 12, precio: 780},
{productoid: 2, nombre: "Producto 2", stock: 12, precio: 620},
{productoid: 3, nombre: "Producto 3", stock: 12, precio: 500},
{productoid: 4, nombre: "Producto 4", stock: 12, precio: 500},
{productoid: 5, nombre: "Producto 5", stock: 12, precio: 450}]

//SELECCIONAR PRODUCTO: ESTO VINCULADO A LOS BOTONES DE AGREGAR PRODUCTO
let agregarProducto1 = document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[0].nombre+" - $ "+misProductos[0].precio+"</a></li>",
    agregarProducto2 = document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[1].nombre+" - $ "+misProductos[1].precio+"</a></li>",
    agregarProducto3 = document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[2].nombre+" - $ "+misProductos[2].precio+"</a></li>",
    agregarProducto4 = document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[3].nombre+" - $ "+misProductos[3].precio+"</a></li>",
    agregarProducto5 = document.getElementById("lista").innerHTML += "<li><a href='#'>"+misProductos[4].nombre+" - $ "+misProductos[4].precio+"</a></li>";

// ARRAY DE OBJETOS: PRESENTACION  
let presentacion = [{tipo: "Bolsa", cantidad: 1},
                    {tipo: "Caja x 2", cantidad : 2},
                    {tipo: "Caja x 3", cantidad : 3}];

// ELEGIR LA PRESENTACION: ESTO VINCULADO A LAS IMAGENES DE ELEGIR LA PRESENTACION 
let presentacion1 = document.getElementById("lista2").innerHTML += "<li><a href='#'>"+presentacion[0].tipo+"</a></li>",
    presentacion2 = document.getElementById("lista2").innerHTML += "<li><a href='#'>"+presentacion[1].tipo+"</a></li>",
    presentacion3 = document.getElementById("lista2").innerHTML += "<li><a href='#'>"+presentacion[2].tipo+"</a></li>";

// TOTAL SIN DESCUENTO
let totalParcial 
let total = document.getElementById("totalPrecio");
// CALCULAR TOTAL 
if (presentacion.cantidad == 2) {
    let total = totalParcial * 0.9;
    alert(total);        
    } else {
    if (presentacion.cantidad == 3) {
      let total = totalParcial * 0.85;
        alert(total);        
        } else {
            let = total = totalParcial;
            alert(total);
    }
}

// BOTON PARA FINALIZAR COMPRA 
let finalizarCompra = function () {};

// ELIMINAR PRODUCTO
let eliminarProducto = function () {
    document.getElementById("lista2").children[0].remove()
};

// CICLO FOR PARA RECORRER LOS ARRAYS


// Eventos

// 1: Seleccionar un articulo y que este se agregue automaticamente a una lista mediante boton agregar producto.
// 2: Sumar el total de los valores de los productos seleccionados.
// 3: Elegir la presentacion y aplicar el descuento sobre el total.
// 4: Mediante un boton "finalizar compra" redirigir al sitio de pago.
// 5: Eliminar productos de la lista, mediante click.