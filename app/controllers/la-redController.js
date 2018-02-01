(function(){
	'use strict';
	angular
    .module('appMain')
        .factory('getSeccion', ['$timeout','dataResource',
          function($timeout, dataResource) {
            return {
              seccion: function($scope,dataResource,get,id) {
                $scope.loading = false;
                if (id!='')
                    $scope.data = dataResource.data(get,id);
                else{
                    $scope.data = dataResource.dataAll(get);
                }
                $scope.base_img = $scope.data[2].base_img;
                $scope.data = $scope.data[1].data;
                $timeout( function(){
                    $scope.loading = true;
                }, 500 );
              }
            };
          }])
    // SECION:HOME__________________________________________________________________________________________________________________________
        .controller('homeController',['$scope', '$http', '$rootScope', 'base_img', function ($scope, $http, $rootScope, base_img) {
            $scope.loading = false;
            $scope.slider = [];
            $scope.base_img = base_img;
            $scope.sliders = function(){
                $http.get(urlBlueboxApi+'sliders')
                .then(function(res){
                    $scope.sliders = res.data;
                });
                $http.get(urlBlueboxApi+'brands')
                .then(function(res){
                    $scope.brands = res.data;
                });
            }
             $scope.home_seccion_1 = function(){
                $http.get(urlBlueboxApi+'headers/22')
                .then(function(res){
                    $scope.home_seccion_1 = res.data;
                });
            }           

            $scope.services = function(){
                $http.get(urlBlueboxApi+'services')
                .then(function(res){
                    $scope.services = res.data;
                });
            }

            $scope.redes = function(){
                $http.get(urlBlueboxApi+'variables/Redes')
                .then(function(res){
                    $scope.redes = res.data;
                });
            }
            $scope.parallax = function(){
                $http.get(urlBlueboxApi+'headers/21')
                .then(function(res){
                    $scope.parallax = res.data;
                });
            }

            $scope.swiper = function(){ 
                $(document).ready(function(){
                    swiper('swiper_home',5000,true);
                });
            }
            $scope.loading = true;
        }])
    // SECION:LA-RED__________________________________________________________________________________________________________________________
        // controller:la-red -url:la-red
        .controller('la-redController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion) {
            $scope.initSeccion = function() {
                getSeccion.seccion($scope,dataResource,'headers',1);
            };
        }])
        // controller:entidades -url:entidades
        .controller('entidadesController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion) {
            $scope.initSeccion = function() {
                getSeccion.seccion($scope,dataResource,'headers',2);
            };
        }])
        // controller:la-redinternacion -url:la-redinternacion
        .controller('la-red-internacionalController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion',function ($scope, $http, $rootScope, dataResource, getSeccion) {
            $scope.initSeccion = function() {            
                getSeccion.seccion($scope,dataResource,'headers',3);
            };
        }])
    // SECION:EN QUE TRABAJAMOS__________________________________________________________________________________________________________________________
        // controller:educacion-inclusiva -url:educacion-inclusiva
        .controller('educacion-inclusivaController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',4);
            }
        }])
        // controller:insercion-laboral -url:insercion-laboral
        .controller('insercion-laboralController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',5);
            }
        }])
        // controller:vida-independiente -url:vida-independiente
        .controller('vida-independienteController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',6);
            }
        }])
        // controller:salud -url:salud
        .controller('saludController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',7);
            }
        }])
        // controller:Incidencia-política-participación-ciudadana -url:Incidencia-política-participación-ciudadana
        .controller('incidencia-politica-participacion-ciudadanaController',['$scope', '$http', '$rootScope', 'dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',8);
            }
        }])
    // SECION:PROYECTO__________________________________________________________________________________________________________________________
        // controller:proyectos -url:proyectos
        .controller('proyectosController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'projects','');
            }
        }])
        // controller:proyecto -url:proyectos
        .controller('proyectoController',['$scope', '$http', '$stateParams','dataResource', 'getSeccion', function ($scope, $http, $stateParams, dataResource, getSeccion) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'project', $stateParams.id);
            }
        }])
    // SECION:TRANSPARENCIAS__________________________________________________________________________________________________________________________
        // controller:junta-directiva -url:junta-directiva
        .controller('junta-directivaController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',8);
            }
        }])
        // controller:organigrama -url:organigrama
        .controller('organigramaController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',10);
            }
        }])
        // controller:estatutos -url:estatutos
        .controller('estatutosController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',11);
            }
        }])
        // controller:tablas-salariales -url:tablas-salariales
        .controller('tablas-salarialesController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',12);
            }
        }])
        // controller:misión-visión-valores -url:misión-visión-valores
        .controller('mision-vision-valoresController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'company','');
            }
        }])
        // controller:codigos-de-conducta -url:codigos-de-conducta
        .controller('codigos-de-conductaController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',14);
            }
        }])
        // controller:financiadores -url:financiadores
        .controller('financiadoresController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',15);
            }
        }])
        // controller:financiación-recibida -url:financiación-recibida
        .controller('financiacion-recibidaController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',16);
            }
        }])
        // controller:planificacion-estrategica -url:planificacion-estrategica
        .controller('planificacion-estrategicaController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',17);
            }
        }])
        // controller:memorias -url:memorias
        .controller('memoriasController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',18);
            }
        }])
        // controller:cuentas-anuales-auditorias -url:cuentas-anuales-auditorias
        .controller('cuentas-anuales-auditoriasController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',19);
            }
        }])
    // SECION:DISCAPACIDAD EN REPUBLICA DOMINICANA__________________________________________________________________________________________________________________________
        // controller:discapacidad-republica-dominicana -url:discapacidad-republica-dominicana
        .controller('discapacidad-republica-dominicanaController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'headers',20);
            }
        }])
    // SECION:PUBLICACIONES__________________________________________________________________________________________________________________________
        // controller:publicaciones -url:publicaciones
        .controller('publicacionesController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', 'base_img',  function ($scope, $http, $rootScope, dataResource, getSeccion, base_img ) {
            $scope.initSeccion = function(){
                $scope.loading = false;
                $scope.base_img = base_img;
                $http.get(urlBlueboxApi+'publicaciones/1')
                .then(function(res){
                    $scope.data = res.data;
                });
                $scope.loading = true;
            }
        }])
        .controller('publicacionController',['$scope', '$http', '$stateParams','dataResource', 'getSeccion', function ($scope, $http, $stateParams, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'blog',$stateParams.id);
            }
        }])
    // SECION:NOTICIAS__________________________________________________________________________________________________________________________
        // controller:noticias -url:noticias
        .controller('noticiasController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', 'base_img',  function ($scope, $http, $rootScope, dataResource, getSeccion, base_img ) {
            $scope.initSeccion = function(){
                $scope.loading = false;
                $scope.base_img = base_img;
                $http.get(urlBlueboxApi+'publicaciones/2')
                .then(function(res){
                    $scope.data = res.data;
                });
                $scope.loading = true;
            }
        }])
    // SECION:CONTACTANOS__________________________________________________________________________________________________________________________
        // controller:contactanos -url:contactanos
        .controller('contactanosController',['$scope', '$http', '$rootScope','dataResource', 'getSeccion', function ($scope, $http, $rootScope, dataResource, getSeccion ) {
            $scope.initSeccion = function(){
                getSeccion.seccion($scope,dataResource, 'contacts','');
            }
            $scope.redes = function(){
                $http.get(urlBlueboxApi+'variables/Redes')
                .then(function(res){
                    $scope.redes = res.data;
                });
            }
        }])

})();
