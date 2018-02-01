(function(){
    urlBlueboxApi = urlBluebox+"/api/es/";
    var app = angular.module('appMain', ['ui.router', 'ngAnimate', 'ngSanitize','ngResource']);
    app.constant("base_img",urlBluebox);
    app.config(function($stateProvider,  $locationProvider, $urlRouterProvider, $provide) {
        $stateProvider
        //SECTION:INICIO ========================================
            .state('/', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
        //SECTION:ABOUT ========================================
            //================La red=================
            .state('la-red', {
                url: '/la-red',
                templateUrl: 'views/about/la-red.html',
                controller: 'la-redController'
            })
            //================Entidades=================
            .state('entidades', {
                url: '/entidades',
                templateUrl: 'views/about/entidades.html',
                controller: 'entidadesController'
            })
            //===============la-red-internacional==================
            .state('la-red-internacional', {

                url: '/la-red-internacional',
	            templateUrl: 'views/about/la-red-internacional.html'   
        	})
        //SECTION:EN QUE TRABAJAMOS ========================================
	        //================La red=================
	        .state('educacion-inclusiva', {
	            url: '/educacion-inclusiva',
	            templateUrl: 'views/about/educacion-inclusiva.html',
		        controller: 'educacion-inclusivaController'
	        })
	        //================insercion-laboral=================
	        .state('insercion-laboral', {
	            url: '/insercion-laboral',
	            templateUrl: 'views/about/insercion-laboral.html',
		        controller: 'insercion-laboralController'
	        })
	        //================vida-independiente=================
            .state('vida-independiente', {
                url: '/vida-independiente',
                templateUrl: 'views/about/vida-independiente.html',
                controller: 'vida-independienteController'
            })
            //================salud=================
            .state('salud', {
                url: '/salud',
                templateUrl: 'views/about/salud.html',
                controller: 'saludController'
            })
            //================Incidencia-politica-participacion-ciudadana=================
            .state('incidencia-politica-participacion-ciudadana', {
                url: '/incidencia-politica-participacion-ciudadana',
                templateUrl: 'views/about/incidencia-politica-participacion-ciudadana.html',
                controller: 'incidencia-politica-participacion-ciudadanaController'
            })
        //SECTION:PROYECTOS ========================================
            //================proyectos=================
            .state('proyectos', {
                url: '/proyectos',
                templateUrl: 'views/proyectos/proyectos.html',
                controller: 'proyectosController'
            })
            .state('proyecto', {
                url: '/proyecto?id',
                templateUrl: 'views/proyectos/proyecto.html',
                controller: 'proyectoController'
            })
        //SECTION:TRANSPARENCIA ========================================
            //================junta-directiva=================
            .state('junta-directiva', {
                url: '/junta-directiva',
                templateUrl: 'views/transparencia/junta-directiva.html',
                controller: 'junta-directivaController'
            })
            //================organigrama=================
            .state('organigrama', {
                url: '/organigrama',
                templateUrl: 'views/transparencia/organigrama.html',
                controller: 'organigramaController'
            })
            //================estatutos=================
            .state('estatutos', {
                url: '/estatutos',
                templateUrl: 'views/transparencia/estatutos.html',
                controller: 'estatutosController'
            })
            //================tablas-salariales=================
            .state('tablas-salariales', {
                url: '/tablas-salariales',
                templateUrl: 'views/transparencia/tablas-salariales.html',
                controller: 'tablas-salarialesController'
            })
            //================mision-vision-valores=================
            .state('mision-vision-valores', {
                url: '/mision-vision-valores',
                templateUrl: 'views/transparencia/mision-vision-valores.html',
                controller: 'mision-vision-valoresController'
            })
            //================codigos-de-conducta=================
            .state('codigos-de-conducta', {
                url: '/codigos-de-conducta',
                templateUrl: 'views/transparencia/codigos-de-conducta.html',
                controller: 'codigos-de-conductaController'
            })
            //================financiadores=================
            .state('financiadores', {
                url: '/financiadores',
                templateUrl: 'views/transparencia/financiadores.html',
                controller: 'financiadoresController'
            })
            //================financiacion-recibida=================
            .state('financiacion-recibida', {
                url: '/financiacion-recibida',
                templateUrl: 'views/transparencia/financiacion-recibida.html',
                controller: 'financiacion-recibidaController'
            })
            //================planificacion-estrategica=================
            .state('planificacion-estrategica', {
                url: '/planificacion-estrategica',
                templateUrl: 'views/transparencia/planificacion-estrategica.html',
                controller: 'planificacion-estrategicaController'
            })
            //================memorias=================
            .state('memorias', {
                url: '/memorias',
                templateUrl: 'views/transparencia/memorias.html',
                controller: 'memoriasController'
            })
            //================cuentas-anuales-auditorias=================
            .state('cuentas-anuales-auditorias', {
                url: '/cuentas-anuales-auditorias',
                templateUrl: 'views/transparencia/cuentas-anuales-auditorias.html',
                controller: 'cuentas-anuales-auditoriasController'
            })
        //SECION:DISCAPACIDAD EN REPUBLICA DOMINICANA =================================
            //================discapacidad-republica-dominicana=================
            .state('discapacidad-republica-dominicana', {
                url: '/discapacidad-republica-dominicana',
                templateUrl: 'views/discapacidad-republica-dominicana/discapacidad-republica-dominicana.html',
                controller: 'discapacidad-republica-dominicanaController'
            })
        //SECTION:PUBLICACIONES =================================
            //================publicaciones=================
            .state('publicaciones', {
                url: '/publicaciones',
                templateUrl: 'views/publicaciones/publicaciones.html',
                controller: 'publicacionesController'
            })
            .state('publicacion', {
                url: "/publicacion?id",
                templateUrl: 'views/publicaciones/publicacion.html',
                controller: 'publicacionController'
            })
        //SECTION:NOTICIAS =================================
            //================noticias=================
            .state('noticias', {
                url: '/noticias',
                templateUrl: 'views/noticias/noticias.html',
                controller: 'noticiasController'
            })
        //SECTION:CONTACTANOS =================================
            //================contactanos=================
            .state('contactanos', {
                url: '/contactanos',
                templateUrl: 'views/contactanos/contactanos.html',
                controller: 'contactanosController'
            })        // CONTACT PAGE AND MULTIPLE NAMED VIEWS =================================
        //SECTION:EROR404 =================================
    		.state('page-not-found', {
    		  url: "/page-not-found",
    		  templateUrl: 'views/404.html'
    		});
            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise('page-not-found');
	});
    app.factory("dataResource", function ($resource,base_img) {
        return {
            data:function(url,id) {
                return [{
                            "loading": true
                        },
                        {
                            "data": $resource(urlBlueboxApi+url+'/'+id, { get: { method: "GET", isArray: true } }).get()
                        },
                        {
                            "base_img" : base_img
                        }
                    ];
            },
            dataAll:function(url){
                return [{
                            "loading": true
                        },
                        {
                            "data": $resource(urlBlueboxApi+url, { get: { method: "GET", isArray: true } }).query()
                        },
                        {
                            "base_img" : base_img
                        }
                    ];
            }
        }
    });
})();

