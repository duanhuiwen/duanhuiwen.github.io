var angularSite = angular.module('angularSite', [
  'ngRoute',
  'siteController',
  'siteDirectives'
]);
 
angularSite.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/About', {
        templateUrl: 'partials/about.html',
       // controller: 'AboutController'
      }).
      when('/Projects', {
        templateUrl: 'partials/projects.html',
        controller: 'WorkController'
      }).
      when('/Projects/:workName', {
        templateUrl: 'partials/project-detail.html',
        controller: 'WorkdetailController'
      }).
      when('/Photography', {
        templateUrl: 'partials/photo.html',
        
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);