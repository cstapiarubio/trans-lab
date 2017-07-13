/* validación de correo*/
$(document).ready(function() {
	$('#inicio').click(function() {
    // Expresion regular para validar el correo
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Se utiliza la funcion test() nativa de JavaScript
    if (regex.test($('#email').val().trim())) {
    	window.location.href="pagina-menu.html";
    } else {
    	alert('La dirección de correo no es válida');
    }
});
});


/* validación de contraseña*/
$(document).ready(function() {
	$('#inicio').click(function() {
    // Expresión regular para validar la contraseña
    var regex =/^(?=.*\d).{2,8}$/; 

    // Se utiliza la funcion test() nativa de JavaScript
    if (regex.test($('#password').val().trim())) {
    	window.location.href="pagina-menu.html";
    } else {
    	alert('La contraseña no es válida');
    }
});

});

/*menú despegable*/
$(document).ready(function() {   
	var sideslider = $('[data-toggle=collapse-side]');
	var sel = sideslider.attr('data-target');
	var sel2 = sideslider.attr('data-target-2');
	sideslider.click(function(event){
		$(sel).toggleClass('in');
		$(sel2).toggleClass('out');
	});
});

/* enlace de botón home a página-menú*/
$(document).ready(function() {
	$('#home-menu').click(function(){
		window.location.href="pagina-menu.html";
	});

});

/* enlace de botón perfil a perfil.html*/
$(document).ready(function() {
	$('.perfil-menu').click(function(){
		window.location.href="perfil.html";
	});

});