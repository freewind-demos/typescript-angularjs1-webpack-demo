const app = angular.module('app', []);
app.directive('bgColor', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.css("background-color", attrs.bgColor)
        }
    }
});