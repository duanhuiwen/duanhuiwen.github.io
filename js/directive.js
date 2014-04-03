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
				jQuery("img.lazy").lazy({
			        effect: "fadeIn",
			        effectTime: 1500
			    });
				$('div.image-list img').centerImage();
				//$('div.image-list img').fakecrop();
				console.log('controller ready');

			}


		},
		templateUrl: 'partials/directives/projectBox.html'
	};
})
.
directive('lazy', function($timeout) {
              return {
                restrict: 'C',
                link: function (scope, elm, attrs) {
                    $(elm).lazy({
				        effect: "fadeIn",
				        effectTime: 1500
				    });
                }
              }
            });


    