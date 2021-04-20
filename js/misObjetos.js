// FUNCION CONSTRUCTORA: PRODUCTOS

class Producto {
    constructor(productoId, nombre, img, precio) {
        this.productoId = productoId;
        this.nombre = nombre;
        this.img = img;
        this.precio = precio;
    }
}

let producto1 = new Producto(1, 'Pispi Blend', './assets/img/img1.jpg', 780);
let producto2 = new Producto(2, 'Luigi Bosca Malbec', './assets/img/img2.jpg', 620);
let producto3 = new Producto(3, 'Rutini Cabernet Sauvignon', './assets/img/img3.jpg', 500);
let producto4 = new Producto(4, 'Terrazas Gran Reserva', './assets/img/img4.jpg', 500);
let producto5 = new Producto(5, 'La Linda Malbec 2018', './assets/img/img5.jpg', 450);
let producto6 = new Producto(6, 'Mosquita Muerta', './assets/img/img12.jpg', 750);
let producto7 = new Producto(7, 'Andeluna Malbec', './assets/img/img13.jpg', 1100);
let producto8 = new Producto(8, 'Los Intocables Blend', './assets/img/img14.jpg', 910);
let producto9 = new Producto(9, 'Los Intocables Malbec', './assets/img/img15.jpg', 910);
let producto10 = new Producto(10, 'Los intocables Blanco', './assets/img/img16.jpg', 870);
let producto11 = new Producto(11, 'Trapiche Medalla', './assets/img/img17.jpg', 700);
let producto12 = new Producto(12, 'Cono Sur 18', './assets/img/img18.jpg', 1050);
let producto13 = new Producto(13, 'Pedriel Malbec', './assets/img/img19.jpg', 680);


// ARRAY DE OBJETOS
let misProductos = [];

misProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13);

const MISPRODUCTOSJSON = JSON.stringify(misProductos)