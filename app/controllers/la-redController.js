(function(){
    'use strict';
    angular
    .module('appMain')
    // SECION:HOME__________________________________________________________________________________________________________________________
        .controller('homeController',['$scope', '$http', 'base_img', function ($scope, $http, base_img) {
            $scope.base_img = base_img;
            $scope.initSeccion = function(){
                $http.get(urlBlueboxApi+'home')
                .then(function(res){
                    $scope.data = res.data;
                    
                });
            };
            $scope.swiper = function(){ 
                $(document).ready(function(){
                    swiper('swiper_home',5000,true);
                });
            }
            $scope.initSeccion();
        }])
    // SECION:LA-RED__________________________________________________________________________________________________________________________
        // controller:la-red -url:la-red
        .controller('la-redController', ['$scope', '$state', 'dataView', function($scope, $state, dataView) {
            $scope.data = dataView.data;
        }])
        // controller:entidades -url:entidades
        .controller('entidadesController',['$scope', '$state','dataView', function($scope, $state, dataView) {
            $scope.data = dataView.data;
        }])
        // controller:la-redinternacion -url:la-redinternacion
        .controller('la-red-internacionalController',['$scope','dataContact','$state','dataView', function($scope,dataContact, $state, dataView) {       
            $scope.data = dataView.data;
            $scope.dataContact = dataContact.data;
        }])
    // SECION:EN QUE TRABAJAMOS__________________________________________________________________________________________________________________________
        // controller:educacion-inclusiva -url:educacion-inclusiva
        .controller('educacion-inclusivaController',['$scope', 'dataView',  function ($scope, dataView) { 
            $scope.data = dataView.data;
        }])
        // controller:insercion-laboral -url:insercion-laboral
        .controller('insercion-laboralController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:vida-independiente -url:vida-independiente
        .controller('vida-independienteController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:salud -url:salud
        .controller('saludController',['$scope', 'dataView', function ($scope,  dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:Incidencia-política-participación-ciudadana -url:Incidencia-política-participación-ciudadana
        .controller('incidencia-politica-participacion-ciudadanaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
    // SECION:PROYECTO__________________________________________________________________________________________________________________________
        // controller:proyectos -url:proyectos
        .controller('proyectosController',['$scope','base_img', 'dataView', function ($scope, dataView, base_img ) {
            $scope.base_img = base_img;
            $scope.data = dataView.data;
        }])
        // controller:proyecto -url:proyectos
        .controller('proyectoController',['$scope','base_img', 'dataView', function ($scope, dataView, base_img ) {
            $scope.base_img = base_img;
            $scope.data = dataView.data;
        }])
    // SECION:TRANSPARENCIAS__________________________________________________________________________________________________________________________
        // controller:junta-directiva -url:junta-directiva
        .controller('junta-directivaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:organigrama -url:organigrama
        .controller('organigramaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:estatutos -url:estatutos
        .controller('estatutosController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:tablas-salariales -url:tablas-salariales
        .controller('tablas-salarialesController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:misión-visión-valores -url:misión-visión-valores
        .controller('mision-vision-valoresController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:codigos-de-conducta -url:codigos-de-conducta
        .controller('codigos-de-conductaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:financiadores -url:financiadores
        .controller('financiadoresController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:financiación-recibida -url:financiación-recibida
        .controller('financiacion-recibidaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:planificacion-estrategica -url:planificacion-estrategica
        .controller('planificacion-estrategicaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:memorias -url:memorias
        .controller('memoriasController',['$scope','dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
        // controller:cuentas-anuales-auditorias -url:cuentas-anuales-auditorias
        .controller('cuentas-anuales-auditoriasController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
    // SECION:DISCAPACIDAD EN REPUBLICA DOMINICANA__________________________________________________________________________________________________________________________
        // controller:discapacidad-republica-dominicana -url:discapacidad-republica-dominicana
        .controller('discapacidad-republica-dominicanaController',['$scope', 'dataView', function ($scope, dataView ) {
            $scope.data = dataView.data;
        }])
    // SECION:PUBLICACIONES__________________________________________________________________________________________________________________________
        // controller:publicaciones -url:publicaciones
        .controller('publicacionesController',['$scope', 'base_img', 'dataView', function ($scope, base_img, dataView ) {
            $scope.base_img = base_img;
            $scope.data = dataView.data;
        }])
        .controller('publicacionController',['$scope', 'base_img', 'dataView', function ($scope, base_img, dataView ) {
            $scope.base_img = base_img;
            $scope.data = dataView.data;
        }])
    // SECION:NOTICIAS__________________________________________________________________________________________________________________________
        // controller:noticias -url:noticias
        .controller('noticiasController',['$scope', 'base_img', 'dataView', function ($scope, base_img, dataView ) {
            $scope.base_img = base_img;
            $scope.data = dataView.data;
        }])
    // SECION:CONTACTANOS__________________________________________________________________________________________________________________________
        // controller:contactanos -url:contactanos
        .controller('contactanosController',['$scope', '$http', function ($scope, $http ) {
            
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
                    
                });
            }
        }])
})();
