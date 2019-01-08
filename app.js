const app = angular.module('app', []);

app.directive('myDirective', function () {
    return {
        template: '<div class="bg-yellow">{{ message }}</div>',
        controller: function ($scope) {
            $scope.message = "Hello, angularjs"
        },
        restrict: 'A'
    }
});
