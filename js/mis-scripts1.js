$(function(){
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
});