var app = angular.module('posty', ['ui.router']);

/* Configuration */
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl',
        })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl',
        });
    
    $urlRouterProvider.otherwise('home');
}]);

/* Controllers */
app.controller('MainCtrl', [
    '$scope', 'posts',
    function ($scope, posts) {
        $scope.test = 'Hello World!';
        $scope.posts = posts.posts;
        $scope.addPost = function() {
            // Don't add the post if there's no title
            if (!$scope.title || $scope.title === '') return;
            
            // Store the post
            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
                link: $scope.link,
                comments: [
                    {
                        author: 'Joe',
                        body: 'Cool!',
                        upvotes: 0,
                    }
                ],
            });
            
            // Reset the form
            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes++;
        };
    }
]);

app.controller('PostsCtrl', [
    '$scope', '$stateParams', 'posts',
    function ($scope, $stateParams, posts) {
        $scope.post = posts.posts[$stateParams.id];
    }
]);

/* Factories */
app.factory('posts', [function() {
    var o = {
        posts: []
    };
    return o;
}]);