(function(){
    urlBlueboxApi = urlBluebox+"/api/es/";
    var app = angular.module('appMain', ['ui.router','ngSanitize']);
    app.constant("base_img",urlBluebox);
    app.config(function($stateProvider,  $locationProvider, $urlRouterProvider) {

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
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/1')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'la-redController'
            })

            //================Entidades=================
            .state('entidades', {
                url: '/entidades',
                templateUrl: 'views/about/entidades.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/2')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'entidadesController'
            })
            //===============la-red-internacional==================
            .state('la-red-internacional', {
                url: '/la-red-internacional',
                templateUrl: 'views/about/la-red-internacional.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/3')
                        .then(function(res){
                            return res;
                        });
                  }],
                  dataContact: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'contacts')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'la-red-internacionalController'
        	})
        //SECTION:EN QUE TRABAJAMOS ========================================
	        //================La red=================
	        .state('educacion-inclusiva', {
	            url: '/educacion-inclusiva',
	            templateUrl: 'views/trabajamos/educacion-inclusiva.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/4')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
		        controller: 'educacion-inclusivaController'
	        })
	        //================insercion-laboral=================
	        .state('insercion-laboral', {
	            url: '/insercion-laboral',
	            templateUrl: 'views/trabajamos/insercion-laboral.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/5')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
		        controller: 'insercion-laboralController'
	        })
	        //================vida-independiente=================
            .state('vida-independiente', {
                url: '/vida-independiente',
                templateUrl: 'views/trabajamos/vida-independiente.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/6')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'vida-independienteController'
            })
            //================salud=================
            .state('salud', {
                url: '/salud',
                templateUrl: 'views/trabajamos/salud.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/7')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'saludController'
            })
            //================Incidencia-politica-participacion-ciudadana=================
            .state('incidencia-politica-participacion-ciudadana', {
                url: '/incidencia-politica-participacion-ciudadana',
                templateUrl: 'views/trabajamos/incidencia-politica-participacion-ciudadana.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/8')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'incidencia-politica-participacion-ciudadanaController'
            })
        //SECTION:PROYECTOS ========================================
            //================proyectos=================
            .state('proyectos', {
                url: '/proyectos',
                templateUrl: 'views/proyectos/proyectos.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'projects')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'proyectosController'
            })
            .state('proyecto', {
                url: '/proyecto?id',
                templateUrl: 'views/proyectos/proyecto.html',
                resolve: {
                  dataView: ['$http','$stateParams', function($http,$stateParams) {
                    return $http.get(urlBlueboxApi+'project/'+$stateParams.id)
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'proyectoController'
            })
        //SECTION:TRANSPARENCIA ========================================
            //================junta-directiva=================
            .state('junta-directiva', {
                url: '/junta-directiva',
                templateUrl: 'views/transparencia/junta-directiva.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/9')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'junta-directivaController'
            })
            //================organigrama=================
            .state('organigrama', {
                url: '/organigrama',
                templateUrl: 'views/transparencia/organigrama.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/10')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'organigramaController'
            })
            //================estatutos=================
            .state('estatutos', {
                url: '/estatutos',
                templateUrl: 'views/transparencia/estatutos.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/11')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'estatutosController'
            })
            //================tablas-salariales=================
            .state('tablas-salariales', {
                url: '/tablas-salariales',
                templateUrl: 'views/transparencia/tablas-salariales.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/12')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'tablas-salarialesController'
            })
            //================mision-vision-valores=================
            .state('mision-vision-valores', {
                url: '/mision-vision-valores',
                templateUrl: 'views/transparencia/mision-vision-valores.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'company')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'mision-vision-valoresController'
            })
            //================codigos-de-conducta=================
            .state('codigos-de-conducta', {
                url: '/codigos-de-conducta',
                templateUrl: 'views/transparencia/codigos-de-conducta.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/14')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'codigos-de-conductaController'
            })
            //================financiadores=================
            .state('financiadores', {
                url: '/financiadores',
                templateUrl: 'views/transparencia/financiadores.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/15')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'financiadoresController'
            })
            //================financiacion-recibida=================
            .state('financiacion-recibida', {
                url: '/financiacion-recibida',
                templateUrl: 'views/transparencia/financiacion-recibida.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/16')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'financiacion-recibidaController'
            })
            //================planificacion-estrategica=================
            .state('planificacion-estrategica', {
                url: '/planificacion-estrategica',
                templateUrl: 'views/transparencia/planificacion-estrategica.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/17')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'planificacion-estrategicaController'
            })
            //================memorias=================
            .state('memorias', {
                url: '/memorias',
                templateUrl: 'views/transparencia/memorias.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/18')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'memoriasController'
            })
            //================cuentas-anuales-auditorias=================
            .state('cuentas-anuales-auditorias', {
                url: '/cuentas-anuales-auditorias',
                templateUrl: 'views/transparencia/cuentas-anuales-auditorias.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/19')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'cuentas-anuales-auditoriasController'
            })
        //SECION:DISCAPACIDAD EN REPUBLICA DOMINICANA =================================
            //================discapacidad-republica-dominicana=================
            .state('discapacidad-republica-dominicana', {
                url: '/discapacidad-republica-dominicana',
                templateUrl: 'views/discapacidad-republica-dominicana/discapacidad-republica-dominicana.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'headers/20')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'discapacidad-republica-dominicanaController'
            })
        //SECTION:PUBLICACIONES =================================
            //================publicaciones=================
            .state('publicaciones', {
                url: '/publicaciones',
                templateUrl: 'views/publicaciones/publicaciones.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'publicaciones/2')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'publicacionesController'
            })
            .state('publicacion', {
                url: "/publicacion?id",
                templateUrl: 'views/publicaciones/publicacion.html',
                resolve: {
                  dataView: ['$http','$stateParams', function($http,$stateParams) {
                    return $http.get(urlBlueboxApi+'blog/'+$stateParams.id)
                        .then(function(res){
                            return res;
                        });
                  }]
                },
                controller: 'publicacionController'
            })
        //SECTION:NOTICIAS =================================
            //================noticias=================
            .state('noticias', {
                url: '/noticias',
                templateUrl: 'views/noticias/noticias.html',
                resolve: {
                  dataView: ['$http', function($http) {
                    return $http.get(urlBlueboxApi+'publicaciones/1')
                        .then(function(res){
                            return res;
                        });
                  }]
                },
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
})();

