angular.module('angularSpa')
app.controller('ActorsCtrl', function($scope, actorsService){
    $scope.actors =[];
    function getActors(){
        actorsService.getActors()
        .success(function(data){
            $scope.actors = data;
        })
        .error(function(error){
            $scope.status = 'Error al consultar por actores';
        });
    }
    getActors();
    $scope.postActors= function(){
        actorsService.postActors($scope.a)
        .success(function(data){
            $scope.actors = data;
        })
        .error(function(error){
            $scope.status = 'Error al agregar actores';
        });
    }
});