$(function(){

	/*----------------------------------------------------------------
	1.FUNCIONES PARA EL MENU PRINCIPAL
	-----------------------------------------------------------------*/

	/*Insertar y quita la clase ".icono-cerrar" al boton del menu*/
	$('#menu-navegacion .navbar-toggler').click(function(){
		$('.boton-menu').toggleClass('icono-cerrar');
	});

	/*Al hacer click en un enlace del menu principal, se eliminara la clase ".icono-cerrar"*/
	$('#menu-navegacion .navbar-nav a').click(function(){
		/*1)Quita la clase ".icono-cerrar"*/
		$('.boton-menu').removeClass('icono-cerrar');

		/*2) Contraemos el menu*/
		$('#menu-navegacion .navbar-collapse').collapse('hide');
	});

	/*----------------------------------------------------------------
	2.INICIANDO SWIPER
	-----------------------------------------------------------------*/
	 var swiper = new Swiper('#animacion',{

	 	/*Botones de navegacion*/
	 	navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
	  	},

	  	/*Botones de Paginacion*/
		pagination: {
		    el: '.swiper-pagination',
		    type: 'bullets',
		    clickable:true
		 },
		  speed:500,
		  effect:'fade',
		  grabCursor:true,
		  loop:true,
		  autoplay:{
		  	delay:3000,
		  },

		 keyboard: {
		   enabled: true,
		   onlyInViewport: true,
  		}

	 });


	 /*----------------------------------------------------------------
	3.INICIANDO VENOBOX
	-----------------------------------------------------------------*/
	 $('.venobox-video').venobox({
	 	autoplay:true,
	 	bgcolor:'rgba(255,255,255,0.4)',
	 	border:'5px',
	 	closeColor:'#fff',
	 	overlayColor:'rgba(12,60,22,0.83)',
	 	spinner:'three-bounce'
	 }); 


	/*----------------------------------------------------------------
	4.INICIANDO jquery.counterup
	-----------------------------------------------------------------*/
	$('.counter').counterUp();

	/*----------------------------------------------------------------
	5.INICIANDO "picker.date.js"
	-----------------------------------------------------------------*/
	$('.datepicker').pickadate({
		monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
	    monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
	    weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
	    weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
	    today: 'Hoy',
	    clear: 'Limpiar',
	    close: 'Cerrar',
	    labelMonthNext: 'Siguiente mes',
		labelMonthPrev: 'Mes anterior',
		labelMonthSelect: 'Seleccione un mes',
		labelYearSelect: 'Seleccione un año',
	    firstDay: 1,
	    format: 'dddd, dd !de mmmm !de yyyy',
	    formatSubmit: 'dd/mm/yyyy',
	    selectYears: true,
 		selectMonths: true,
 		min: true,
 		max: 30,
 		onStart:function()
 		{
 			var date=new Date();
 			this.set('select',[date.getFullYear(), date.getMonth(), date.getDate()]);
 		}
	});


	/*----------------------------------------------------------------
	6.INICIANDO "picker.time.js"
	-----------------------------------------------------------------*/
	$('.timepicker').pickatime({
		clear: 'Borrar',
		format: 'hh:i A',
		interval: 60,
		min: [8, 0],
  		max: [18, 0]
	});

	/*----------------------------------------------------------------
	7.INICIANDO "rasley.js"
	-----------------------------------------------------------------*/
	$('#mi-formulario').parsley({
		errorClass: 'is-invalid text-danger',
  		successClass: 'is-valid',
  		errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2 small"></ul>',
  		errorTemplate: '<li></li>',
  		trigger:'change',
  		triggerAfterFailure:'change'
	});

	/*----------------------------------------------------------------
	8.INICIANDO "Stickit.js"
	-----------------------------------------------------------------*/
	$('#menu-navegacion').stickit({
		className:'menu-fijo'
	});

	/*----------------------------------------------------------------
	8.INICIANDO "page-scroll-to-id"
	-----------------------------------------------------------------*/

	$('#menu-principal a').mPageScroll2id({
		offset: 50,
		highlightClass:'active'
	});



	/*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300); /*500 le cambiamos a 0*/
    });










    /*--------------------------
	/*Configuracion de Mmenu.js*/
	/*---------------------------*/
	var $menu=$("#menu-principal1").mmenu({
		/*Configurando el Core*/

		/*Integracion con bootstrap*/
		 wrappers: ["bootstrap"],
		/*Efecto deslizante para sub-enlaces*/
		slidingSubmenus:true,
		/*Quitar la barra superior*/
		navbar: {
			title: false
		},
		/*Configurando extensiones*/
		extensions:["border-full","pagedim-black","shadow-page","theme-white"],

		/*Configurando los Add-ons*/
		 counters: true,
		/* iconbar: {
                 /"use": true,
                  "top": [
                     "<a href='#/'><i class='fa fa-home'></i></a>",
                     "<a href='#/'><i class='fa fa-user'></i></a>"
                  ],
                  "bottom": [
                     "<a href='#/'><i class='fab fa-twitter'></i></a>",
                     "<a href='#/'><i class='fab fa-facebook'></i></a>",
                     "<a href='#/'><i class='fab fa-linkedin'></i></a>"
                  ]


               }*/
         navbars: [
                  {
                     "position": "top",
                     "content": ['<a href="index.html"><img src="images/logo.svg" alt="logo del sitio" width="160"></a>']
                  }
         ]
	});


		/*----------------------------------------------
	2.Configuracion del boton buscar
	-----------------------------------------------*/
	$('.btn-buscar').click(function(){
		$('.btn-buscar').toggleClass('boton-buscar-activo');
	});


	/*----------------------------------------------
	3.Configuracion de Juggler.js
	-----------------------------------------------*/
	Juggler.init();

	


})


	