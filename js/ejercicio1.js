function Calcular() {
    var nota1 = document.getElementById("txtNota1")
    var nota2 = document.getElementById("txtNota2")
    var nota3 = document.getElementById("txtNota3")

    var total = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3;

    document.getElementById("txtResultado").value = total.toFixed(2);
}

