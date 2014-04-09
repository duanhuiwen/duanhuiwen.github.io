var angularSite = angular.module('angularSite', [
  'ui.router',
  'ngRoute',
  'siteController',
  'siteDirectives'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
/*      when('/', {
        templateUrl: 'partials/main.html',        
       // controller: 'AboutController'
      }).*/
      when('/About', {
        templateUrl: 'partials/about.html',
       // controller: 'AboutController'
      }).
      when('/Projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectController'
      }).
      when('/Projects/:projectId', {
        templateUrl: 'partials/urlRouter.html',
        controller: 'ProjectDetailController'
      }).
      when('/Photography', {
        templateUrl: 'partials/photo.html',
        controller:'PhotoController'
      }).
      otherwise({
        redirectTo: '/About'
      });
  }]);
