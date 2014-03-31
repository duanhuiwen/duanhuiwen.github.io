var siteController = angular.module('siteController', []);


siteController.controller('NavController',['$scope','$location','$routeParams',function($scope,$location,$routeParams){
$scope.menu = ["HUIWEN","About", "Projects", "Photography"];

  $scope.selectedIndex = 0; // Whatever the default selected index is, use -1 for no selection
  
  console.log("path:"+$location.path());
  $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
    $scope.selectedItem = $scope.menu[$index];
    console.log($scope.selectedItem);
  };



}]) ;



siteController.controller('WorkController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.indicator = "-id";
    $http.get('./data/projects.json').success(function(data) {
    $scope.projects = data.projects;
    //  console.log(data.projects.length)
    });

/*    $scope.$watch('project', function(newProject) {
        if(newProject.id == project.length){
          $('#fakecrop-fill img').fakecrop();
          console.log(newProject.id );
        }
    });*/

/*    $(document).ready(function () {
      $('#fakecrop-fill img').fakecrop();
      console.log("doc ready");
    });
  */
    
  }]);
 





siteController.controller('WorkdetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.workName = $routeParams.workName;
  }]);

siteController.controller('PhotoController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);



