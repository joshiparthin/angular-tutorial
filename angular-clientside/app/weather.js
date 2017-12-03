var weatherApp = angular.module('weatherApp',[]);

weatherApp.factory('TempService', function() {
    var factory = {};
    
    factory.getTempData = function() {
       return ""
    }
    return factory;
 }); 

weatherApp.service('YahooWeatherService', function($http){
    this.GetYahooWeatherFor = function(query) {
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22surat%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

        $http.get(url).then(function (response) {
            $scope.weatherInfo = response.data;
        });
       return "";
    }
 });

weatherApp.controller("weatherController", function($scope, YahooWeatherService) {
    // TODO: do your stuff here.. 
    console.log('Emp controller loaded');
});

