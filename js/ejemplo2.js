// Array de objeto
var contactos = [
    { nombre: "Luis", telefono: "8765-4321" },
    { nombre: "Carmen", telefono: "1234-1234" },
];
console.log(contactos);

for (var i = 0; i < contactos.length; i++) {
    var html = "<tr>"
        html+= "        <td>" + contactos [i].nombre +" </td>"
        html+= "        <td>" + contactos [i].telefono +" </td>"
        html += "</tr>";
    document.getElementById("tbodyContactos").innerHTML += html;
}

