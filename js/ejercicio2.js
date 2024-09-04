// Creamos un array de productos
const productos = [
    { nombre: "Telefono", precio: 1000 },
    { nombre: "Silla", precio: 500 },
    { nombre: "Tableta", precio: 300 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Mesa", precio: 150 },
    { nombre: "Cama", precio: 400 },
    { nombre: "Reloj", precio: 100 },
    { nombre: "Gafas", precio: 50 },
    { nombre: "Vaso", precio: 10 },
    { nombre: "Cuaderno", precio: 20 }
];

// Función para imprimir la tabla
function imprimirTabla() {
    const tbody = document.getElementById("productos-tbody");
    productos.forEach((producto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
    `;
        tbody.appendChild(row);
    });
}

// Llamamos a la función para imprimir la tabla
imprimirTabla();
