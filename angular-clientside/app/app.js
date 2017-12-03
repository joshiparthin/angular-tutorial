var helloWorldApp = angular.module('helloWorldApp',[]);

helloWorldApp.controller("helloWorldController", function($scope) {
    $scope.name = "Parth";
    console.log ("hello world: ", $scope.name);


});


