var siteController = angular.module('siteController', []);


siteController.controller('NavController',['$scope',function($scope){
$scope.menu = ["About", "Work", "Contact"];

  $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection

  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
  };



}]) ;

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