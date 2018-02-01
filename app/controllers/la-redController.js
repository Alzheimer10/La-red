(function(){
    'use strict';
    angular
    .module('appMain')
    // SECION:HOME__________________________________________________________________________________________________________________________
        .controller('homeController',['$scope', '$http', 'base_img', function ($scope, $http, base_img) {
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

             $scope.home_seccion_internacional = function(){
                $http.get(urlBlueboxApi+'headers/23')
                .then(function(res){
                    $scope.home_seccion_internacional = res.data;
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
        .controller('la-redController',['$scope', '$http', function ($scope, $http) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/1')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:entidades -url:entidades
        .controller('entidadesController',['$scope', '$http', function ($scope, $http) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/2')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:la-redinternacion -url:la-redinternacion
        .controller('la-red-internacionalController',['$scope', '$http',function ($scope, $http) {
            $scope.loading = false;
            $scope.initSeccion = function() {
                $scope.initSeccion = function(){
                    $http.get(urlBlueboxApi+'headers/3')
                    .then(function(res){
                        $scope.data = res.data;
                        $scope.loading = true;
                    });
                }
                
                $http.get(urlBlueboxApi+'contacts')
                .then(function(res){
                    $scope.contacts = res.data;
                    $scope.loading = true;
                });
            };
        }])
    // SECION:EN QUE TRABAJAMOS__________________________________________________________________________________________________________________________
        // controller:educacion-inclusiva -url:educacion-inclusiva
        .controller('educacion-inclusivaController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/4')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:insercion-laboral -url:insercion-laboral
        .controller('insercion-laboralController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/5')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:vida-independiente -url:vida-independiente
        .controller('vida-independienteController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/6')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:salud -url:salud
        .controller('saludController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/7')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:Incidencia-política-participación-ciudadana -url:Incidencia-política-participación-ciudadana
        .controller('incidencia-politica-participacion-ciudadanaController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/8')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
    // SECION:PROYECTO__________________________________________________________________________________________________________________________
        // controller:proyectos -url:proyectos
        .controller('proyectosController',['$scope', '$http', 'base_img', function ($scope, $http, base_img) {
            $scope.loading = false;
            $scope.base_img = base_img;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'projects')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:proyecto -url:proyectos
        .controller('proyectoController',['$scope', '$http', '$stateParams', 'base_img', function ($scope, $http, $stateParams, base_img) {
            $scope.loading = false;
            $scope.base_img = base_img;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'project/'+$stateParams.id)
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
    // SECION:TRANSPARENCIAS__________________________________________________________________________________________________________________________
        // controller:junta-directiva -url:junta-directiva
        .controller('junta-directivaController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/9')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:organigrama -url:organigrama
        .controller('organigramaController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/10')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:estatutos -url:estatutos
        .controller('estatutosController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/11')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:tablas-salariales -url:tablas-salariales
        .controller('tablas-salarialesController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/12')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:misión-visión-valores -url:misión-visión-valores
        .controller('mision-vision-valoresController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'company')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:codigos-de-conducta -url:codigos-de-conducta
        .controller('codigos-de-conductaController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/14')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:financiadores -url:financiadores
        .controller('financiadoresController',['$scope', '$http',  function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/15')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:financiación-recibida -url:financiación-recibida
        .controller('financiacion-recibidaController',['$scope', '$http',  function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/16')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:planificacion-estrategica -url:planificacion-estrategica
        .controller('planificacion-estrategicaController',['$scope', '$http',  function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/17')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:memorias -url:memorias
        .controller('memoriasController',['$scope', '$http',  function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/18')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        // controller:cuentas-anuales-auditorias -url:cuentas-anuales-auditorias
        .controller('cuentas-anuales-auditoriasController',['$scope', '$http',  function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/19')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
    // SECION:DISCAPACIDAD EN REPUBLICA DOMINICANA__________________________________________________________________________________________________________________________
        // controller:discapacidad-republica-dominicana -url:discapacidad-republica-dominicana
        .controller('discapacidad-republica-dominicanaController',['$scope', '$http',  function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'headers/20')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
    // SECION:PUBLICACIONES__________________________________________________________________________________________________________________________
        // controller:publicaciones -url:publicaciones
        .controller('publicacionesController',['$scope', '$http',  'base_img',  function ($scope, $http, base_img ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $scope.base_img = base_img;
                $http.get(urlBlueboxApi+'publicaciones/2')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
        .controller('publicacionController',['$scope', '$http', '$stateParams', 'base_img', function ($scope, $http, $stateParams, base_img  ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $scope.base_img = base_img;
                $http.get(urlBlueboxApi+'blog/'+$stateParams.id)
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
    // SECION:NOTICIAS__________________________________________________________________________________________________________________________
        // controller:noticias -url:noticias
        .controller('noticiasController',['$scope', '$http',  'base_img',  function ($scope, $http, base_img ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $scope.base_img = base_img;
                $http.get(urlBlueboxApi+'publicaciones/1')
                .then(function(res){
                    $scope.data = res.data;
                    $scope.loading = true;
                });
            }
        }])
    // SECION:CONTACTANOS__________________________________________________________________________________________________________________________
        // controller:contactanos -url:contactanos
        .controller('contactanosController',['$scope', '$http', function ($scope, $http ) {
            $scope.loading = false;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'contacts')
                .then(function(res){
                    $scope.data = res.data;
                });
            }
            $scope.redes = function(){
                $http.get(urlBlueboxApi+'variables/Redes')
                .then(function(res){
                    $scope.redes = res.data;
                    $scope.loading = true;
                });
            }
        }])

})();
