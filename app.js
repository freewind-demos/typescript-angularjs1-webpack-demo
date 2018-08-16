const app = angular.module('app', []);
app.directive('bgColor', function () {
    return {
        restrict: 'A',
        compile: function (tElement, tAttributes) {
            console.log("-------------- compile --------------");
            console.dir(tElement);
            console.dir(tAttributes);
            tElement.css("background-color", "red")
        }
    }
});