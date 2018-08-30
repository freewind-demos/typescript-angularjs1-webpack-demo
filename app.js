const app = angular.module('app', [])
app.directive('myDirective', function () {
    return {
        template: '<div class="bg-yellow">Good! Template from directive</div>',
        restrict: 'A'
    }
})