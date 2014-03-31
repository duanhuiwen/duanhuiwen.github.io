angular.module('siteDirectives', [])
.directive('projectBoxDirective', function() {
    return {
		restrict: 'AEC',
		transclude: true,
		scope: {
			project:"="
		},
/*		link: function(scope, element, attributes){
        	element.addClass('projectImg');
      	},*/
		controller: function($scope) {
			//console.log("$scope.project.id:"+$scope.project.id);
			if($scope.project.id == 1){
				$('div.image-list img').centerImage();
				//$('div.image-list img').fakecrop();
				console.log('ready');
			}


		},
		templateUrl: 'partials/directives/projectBox.html'
	};
})


    