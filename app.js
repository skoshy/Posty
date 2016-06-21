var app = angular.module('posty', []);

app.controller('MainCtrl', [
    '$scope',
    function ($scope) {
        $scope.test = 'Hello World!';
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
        ];
        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') return;
            
            $scope.posts.push({title: $scope.title, upvotes: 0, link: $scope.link});
            
            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes++;
        };
    }
]);