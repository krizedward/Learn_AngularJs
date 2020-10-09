//membuat modul dengan menggunakan fungsi angular.module
var app = angular.module("myApp", []);

//membuat controller dengan merujuk ke ng-controller
app.controller("myCtrl", function($scope) {
  $scope.firstname = "kriz";
  $scope.lastname  = "edward";
});
