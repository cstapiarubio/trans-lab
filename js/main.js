$(document).ready(function() {
	//Select calcular tarifa
	$('select').material_select();

	// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();


	/* validación de correo y contraseña*/
	$('#inicio').click(function() {
    // Expresion regular para validar el correo
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    // Se utiliza la funcion test() nativa de JavaScript
    if (!regex.test($('#email').val().trim())){
    	alert('Correo inválido');
    }

    var regex2 =/^(?=.*\d).{2,8}$/;
    if(!regex2.test($('#password').val().trim())){
    	alert('Contraseña inválida');
    }
    else{
    	window.location.href="pagina-menu.html";
    	//llamado a fx localstorage
    	//en contenedor guardaré el mail que ingresen
    	localStorage.setItem('contenedorMail', $('#email').val());
    }
});

	/* enlace de botón home a página-menú*/
	$('.home-menu').click(function(){
		window.location.href="pagina-menu.html";
	});

	/* enlace de botón perfil a perfil.html*/
	$('.perfil-menu').click(function(){
		window.location.href="perfil.html";
	});

	/* enlace de botón preguntas a preguntas.html*/
	$('.preguntas-menu').click(function(){
		window.location.href="preguntas.html";
	});

	/* enlace de botón ver saldo a saldo.html*/

	$('.saldo-menu').click(function(){
		window.location.href="saldo.html";
	});

	/* enlace de botón ver tarifa a calcular.html*/
	$('.tarifa-menu').click(function(){
		window.location.href="calcular.html";
	});

	/*función que imprime el n° de tarjeta ingresada*/
	var correoingresado=localStorage.getItem("contenedorMail");
		$('#contenedorEmail').append('<span id="emailPerfil">' + correoingresado + '</span>');

	$('#agregarTarjeta').click(function(){
		var tarjeta=$('#numeroTarjeta').val();
		$('#contenedorTarjeta').append('<p>'+tarjeta+'</p>');
	});

	/*funcion para obtener el saldo desde la api*/
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

	/*fx cálculo tarifa*/
	var calculo=0;
	$("#calculoTarifa").on("click", function(){
		var tarjeta=$('#tarjetaSaldo').val();
		var horario =$('#cbx_horario option:selected').val();
		console.log(horario);

		$.ajax({
			url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + tarjeta,
			type: 'GET',
			datatype: 'JSON',

		})

		.done(function(response){
             //div vacio//
             var saldoSinpeso =response.saldoTarjeta.slice(1).replace('.', '');
             console.log(saldoSinpeso);
             if(horario =="1"){
             	calculo=saldoSinpeso-740;
             	$("#contenedorCalculo").append("<div id='cuadroCalculo'>"+'<p>SALDO TOTAL</p>'+ calculo + "</div>");
             }
             else if(horario =="2"){
             	calculo=saldoSinpeso-660;
             	$("#contenedorCalculo").append("<div id='cuadroCalculo'>"+'<p>SALDO TOTAL</p>'+ calculo + "</div>");

             }
             else if(horario =="3")
             	{calculo=saldoSinpeso-610;
             		$("#contenedorCalculo").append("<div id='cuadroCalculo'>"+'<p>SALDO TOTAL</p>'+ calculo + "</div>");
             	}
             	else{"Seleccione una opción"}

             });

		$("#contenedorCalculo").append("<div id='cuadroSaldo2'>"+'<p>SALDO TOTAL</p>'+ response.saldoTarjeta + "</div>")
		console.log(response.saldoTarjeta);
	})

	.fail(function(error){
		console.log("error");
	})


/*funcion para el menu despegable de las preguntas*/

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

})/*término jquery*/





