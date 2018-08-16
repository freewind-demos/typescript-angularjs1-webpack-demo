const app = angular.module('app', []);
app.directive('hello', function () {
    return {
        restrict: 'M',
        template: "<span>Hello, Directive</span>",
        replace: true
    }
});