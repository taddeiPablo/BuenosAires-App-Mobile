/**
* ==================================================
*   MODULO CREADO PARA MANEJAR LAS PETICIONES HACIA 
*   EL SERVICIO WEB
* ==================================================
**/

// MODULO CREADO PARA ESTABLECER LA CONEXION CON EL WEB SERVICES
var app = angular.module('dataConn', []);

// Factory creado para consumir el web services
app.factory('$Wservices', function($http, $q){
	var data_factory = {};
	var deferred = undefined;
    var fd;

    //  Funcion por la cual se busca el barrio ingresado
    //  por el usuario
    data_factory.buscar_barrio = function(barrio) {
    	deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/barrios',
            method: 'POST',
            params: {barrio: barrio.name},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });
                
        return deferred.promise;
    }
    //  Funcion por la cual se buscan los cajeros automaticos
    //  aqui se muestran todos los cajeros de la cuidada de buenos aires
    data_factory.cajerosAutomaticos = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/cajeros',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se buscan las farmacias dentro del barrio
    //  previamente seleccionado. En caso de no haber seleccionado ningun
    // barrio se mostraran todas las farmacias de la ciudad de buenos aires
    data_factory.farmacias = function(barrio) {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/farmacias',
            method: 'GET',
            params: {Barrio: barrio},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos los hospitales dentro de la cuidad
    //  de buenos aires
    data_factory.hospitales = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/hospitales',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos los centros de reciclado en la
    //  cuidad de buenos aires
    data_factory.centros_verdes = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/centrosVerdes',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todas las comisarias de 
    //  la policia federal dentro del barrio que el usuario 
    //  haya ingresado. En caso de no haber ingresado el barrio
    //  se obtendran todas las comisarias de la ciudad
    data_factory.comisariaFederal = function(barrio) {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/comisariasFederal',
            method: 'GET',
            params: {Barrio: barrio},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todas las comisarias de 
    //  la policia metropolitana dentro del barrio que el usuario
    //  haya ingresado. En caso de no haber ingresado el barrio
    //  se obtendran todas las comisarias de la ciudad
    data_factory.comisariasMetro = function(barrio) {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/comisariasMetro',
            method: 'GET',
            params: {Barrio: barrio},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos cuarteles de bomberos
    //  dentro de la ciudad de buenos aires.
    data_factory.cuartelesBomberos = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/cuartelesBomberos',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todas las rampas de accesibilidad 
    //  para personas con mobilidad reducida dentro de la ciudad de buenos aires
    //  se obtienen todas las rampas disponibles dentro de la ciudad
    data_factory.rampas = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/rampas',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos los bancos accesibles
    //  para personas con mobilidad reducida dentro de la ciudad de buenos aires
    //  en este caso se pueden obtener los bancos segun el barrio ingresado
    //  de lo contrario si no ingreso el barrio se obtienen todos los bancos
    data_factory.bancosAccesibles = function(barrio) {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/bancosAccesibles',
            method: 'GET',
            params: {Barrio: barrio},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos los establecimientos
    //  publicos segun el barrio ingresado. En caso de no ingresar
    //  el barrio se obtendran todos los establecimientos publicos
    //  de la ciudad de buenos aires
    data_factory.establecimientosPublicos = function(barrio) {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/EstablecimientosP',
            method: 'GET',
            params: {Barrio: barrio},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos los registros civiles
    //  dentro de la ciudad de buenos aires
    data_factory.registrosCiviles = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/registrosCiviles',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todos los centros de Documentacion
    //  rapida de la ciudad de buenos aires
    data_factory.centrosDocRapida = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/centroDocRapidos',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }
    //  Funcion por la cual se obtienen todas las embajadas dentro 
    //  de la ciudad de buenos aires
    data_factory.embajadas = function() {
        deferred = $q.defer();
        $http({
            url: 'http://localhost:3000/services/Embajadas',
            method: 'GET',
            params: {},
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }).then(function (results) {
            deferred.resolve(results);
        }).catch(function (e) {
            console.log(e);
        });

        return deferred.promise;
    }

    return data_factory;
});