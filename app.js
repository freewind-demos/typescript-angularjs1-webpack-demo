const app = angular.module('app', []);
app.directive('backgroundColor', function () {
    return {
        restrict: 'A',
        controller: function ($scope, $element, $attrs) {
            const color = $attrs.backgroundColor;
            $element.css("background-color", color);
        }
    }
});