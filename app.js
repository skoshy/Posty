var app = angular.module('posty', []);

app.controller('MainCtrl', [
    '$scope',
    function ($scope) {
        $scope.test = 'Hello World!';
}]);