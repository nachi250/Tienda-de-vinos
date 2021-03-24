// FUNCION CONSTRUCTORA: PRODUCTOS

function Producto(productoId, nombre, img, precio) {
    this.productoId = productoId;
    this.nombre = nombre;
    this.img = img;
    this.precio = precio;
}

let producto1 = new Producto(1, 'Pispi Blend', './assets/img/img1.jpg', 780);
let producto2 = new Producto(2, 'Luigi Bosca Malbec', './assets/img/img2.jpg', 620);
let producto3 = new Producto(3, 'Rutini Cabernet Sauvignon', './assets/img/img3.jpg', 500);
let producto4 = new Producto(4, 'Terrazas Gran Reserva', './assets/img/img4.jpg', 500);
let producto5 = new Producto(5, 'La Linda Malbec 2018', './assets/img/img5.jpg', 450);

// ARRAY DE OBJETOS
let misProductos = [];

misProductos.push(producto1, producto2, producto3, producto4, producto5);

const MISPRODUCTOSJSON = JSON.stringify(misProductos)