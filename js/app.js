var angularSite = angular.module('angularSite', [
  'ngRoute',
  'siteController'
]);
 
angularSite.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/About', {
        templateUrl: 'partials/about.html',
       // controller: 'AboutController'
      }).
      when('/Projects', {
        templateUrl: 'partials/work.html',
        controller: 'WorkController'
      }).
      when('/Work/:workName', {
        templateUrl: 'partials/work-detail.html',
        controller: 'WorkdetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);