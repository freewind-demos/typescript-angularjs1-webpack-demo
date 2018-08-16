const app = angular.module('app', []);
app.directive('hello', function () {
    return {
        restrict: 'EAC',
        template: "Hello, Directive"
    }
});