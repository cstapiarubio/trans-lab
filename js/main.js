/* Holiii acá va tu código también */

$(document).ready(function() {
	/* validación de correo*/
	$('#inicio').click(function() {
    // Expresion regular para validar el correo
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Se utiliza la funcion test() nativa de JavaScript
    if (regex.test($('#email').val().trim())) {
    	alert('Correo validado');
    } else {
    	alert('La dirección de correo no es válida');
    }
   });
});

