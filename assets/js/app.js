// Angular App Module and Controller
var mapApp = angular.module('mapApp', ["ngStorage"]);
mapApp.controller('MapCtrl', ['$scope', '$http', '$localStorage',function ($scope,$http,$localStorage) {
  // Fetch data from json file
  var getData = function() {
    $http.get('../position-list.json')
    .success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      // load data
      console.log("data = " + data);
      $scope.load = function() {
        // save data to the local storage
        $localStorage.data = data;
        $scope.data = $localStorage.data;
      }      
    })
    .error(function() {
      console.log("Error: could not find position-list.json file!");
    });
  }

  // Fetch data from JSON file
  getData();

  function initMap() {
    var mapOptions = {
      zoom: 5,
      center: new google.maps.LatLng(40,-118),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Fetch data from json file to draw the trail line on the map
    var getDataTrail = function() {
      $http.get('../pct-data.json')
            .success(function(data) {
              // this callback will be called asynchronously when the response is available
              // creat array of cooordinates
              var flightPlanCoordinates = [];
              var coordinateObj = {};
              var lat;
              var lng;
              
              // put coordinates data from JSON file to array   
              for (var key in data) {
                // reset object 
                coordinateObj = {};
                coordinateObj["lat"] = data[key][1];
                coordinateObj["lng"] = data[key][2];
                // push an object of latitute and longitude to array
                flightPlanCoordinates.push(coordinateObj);
              }
              // Draw the line to connect coordinates
              var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
              });
              // Draw line on the map
              flightPath.setMap($scope.map); 
            })
            .error(function() { // If it couldn't find JSON file
              console.log("Error: could not load pct-data.json file!");
            }); 
    }
    // Create the trail on the map
    getDataTrail();
  }

  // Create a map
  initMap();
}]);