angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
        this.postActors = function(datos){
        	return $http.post(urlBase, datos);
        };
    });