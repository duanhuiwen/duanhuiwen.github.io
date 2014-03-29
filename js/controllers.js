var siteController = angular.module('siteController', []);


siteController.controller('NavController',['$scope','$routeParams',function($scope,$routeParams){
$scope.menu = ["HUIWEN","About", "Work", "Contact"];

  $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection
  
  
  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
    $scope.selectedItem = $scope.menu[$index];
    console.log($scope.selectedItem);
  };



}]) ;

siteController.controller('AboutController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);


siteController.controller('WorkController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);
 
siteController.controller('WorkdetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.workName = $routeParams.workName;
  }]);