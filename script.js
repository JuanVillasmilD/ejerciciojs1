function generarCampos() {
    var cantidad = document.getElementById("cantidad").value;
    if (cantidad > 0) {
        var camposDiv = document.getElementById("campos");
        camposDiv.innerHTML = ""; // Limpiar campos anteriores

        for (var i = 1; i <= cantidad; i++) {
            var label = document.createElement("label");
            label.setAttribute("for", "peso-" + i);
            label.innerHTML = "Peso del Alumno " + i + ": ";

            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", "peso-" + i);
            input.setAttribute("name", "peso-" + i);

            camposDiv.appendChild(label);
            camposDiv.appendChild(input);
            camposDiv.appendChild(document.createElement("br"));
            camposDiv.appendChild(document.createElement("br"));
        }

        document.getElementById("formulario").style.display = "block";
    }
}

function calcularEstadistica() {
    var cantidad = document.getElementById("cantidad").value;
    var menos40 = 0;
    var entre40y50 = 0;
    var mas50Menos60 = 0;
    var mas60 = 0;

    for (var i = 1; i <= cantidad; i++) {
        var pesoInput = document.getElementById("peso-" + i);
        var peso = parseFloat(pesoInput.value);

        if (peso < 40) {
            menos40++;
        } else if (peso >= 40 && peso < 50) {
            entre40y50++;
        } else if (peso >= 50 && peso < 60) {
            mas50Menos60++;
        } else if (peso >= 60) {
            mas60++;
        }
    }

    document.getElementById("resultado").innerHTML =
        "<h4>Estadística de peso de los alumnos.</h1>" +
        "Alumnos de menos de 40 Kg: " + menos40 + "<br>" +
        "Alumnos entre 40 y 50 Kg: " + entre40y50 + "<br>" +
        "Alumnos de más de 50 y menos de 60 Kg: " + mas50Menos60 + "<br>" +
        "Alumnos de más o igual a 60 Kg: " + mas60;
}