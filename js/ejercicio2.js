// Creamos un array de productos
const productos = [
    { nombre: "Telefono", precio: 10 },
    { nombre: "Vaso", precio: 20 },
    { nombre: "Table", precio: 30 },
    { nombre: "Silla", precio: 40 },
    { nombre: "Cama", precio: 50 },
    { nombre: "Mesa", precio: 60 },
    { nombre: "Puerta", precio: 70 },
    { nombre: "Lampara", precio: 80 },
    { nombre: "Taza", precio: 90 },
    { nombre: "Ventana", precio: 100 }
];

// Obtener el cuerpo de la tabla
const tablaProductos = document.getElementById("tabla-productos");

// Funci�n para agregar productos a la tabla
function agregarProductosATabla() {
    productos.forEach(producto => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = producto.nombre;
        fila.appendChild(celdaNombre);

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = producto.precio;
        fila.appendChild(celdaPrecio);

        tablaProductos.appendChild(fila);
    });
}

// Llamar a la funci�n para agregar los productos a la tabla
agregarProductosATabla();