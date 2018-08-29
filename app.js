const app = angular.module('app', [])
app.directive('myDirective', function () {
    return {
        template: '<div>Good! Template from directive</div>',
        restrict: 'A'
    }
})