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
	$('.home-menu').click(function(){
		window.location.href="pagina-menu.html";
	});

});

/* enlace de botón perfil a perfil.html*/
$(document).ready(function() {
	$('.perfil-menu').click(function(){
		window.location.href="perfil.html";
	});

});

/* enlace de botón preguntas a preguntas.html*/
$(document).ready(function() {
	$('.preguntas-menu').click(function(){
		window.location.href="preguntas.html";
	});

});

/* enlace de botón ver saldo a saldo.html*/
$(document).ready(function() {
	$('.saldo-menu').click(function(){
		window.location.href="saldo.html";
	});

});

/*función que imprime el n° de tarjeta ingresada*/
$(document).ready( function(){
	$('#agregarTarjeta').click(function(){
		var tarjeta=$('#numeroTarjeta').val();
		$('#contenedorTarjeta').append('<p>'+tarjeta+'</p>' );
	});
});


/*funcion para obtener el saldo desde la api*/
$(document).ready(function(){
    $("#botonSaldo").on("click", function(){
        var tarjeta = $("#tarjetaSaldo").val();
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + tarjeta,
            type: 'GET',
            datatype: 'JSON',
            
       })

       .done(function(response){
             //div vacio//
        $("#contenedorSaldo").append("<div id='cuadroSaldo'>"+'<p>SALDO TOTAL</p>'+ response.saldoTarjeta + "</div>")
            console.log(response.saldoTarjeta);
        })

       .fail(function(error){
            console.log("error");
        })
    });
    })

/*funcion para el menu despegable de las preguntas*/
$(document).ready( function(){
	$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordeon'), false);
});
	});




