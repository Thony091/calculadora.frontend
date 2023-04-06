$(document).ready( function () {
// Captura el evento click de todos los botones
$("button").click(function(){
	// Obtiene el valor del botón
	var value = $(this).text();

	// Si se presiona el botón "C", borra el campo de texto
	if (value == "C") {
		$("#result").val("");
	}
	// Si se presiona el botón "=", evalúa la expresión
	else if (value == "=") {
		try {
			var result = eval($("#result").val());
			$("#result").val(result);
		}
		catch (e) {
			$("#result").val("Error");
		}
	}
	// Si se presiona cualquier otro botón, agrega el valor al campo de texto
	else {
		$("#result").val($("#result").val() + value);
	}
});


});