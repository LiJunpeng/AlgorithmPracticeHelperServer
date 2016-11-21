var app = angular.module("AlgorithmHelper");

app.controller("homeController",
    ["$scope", "$http", "$routeParams", "$location", function ($scope, $http, $routeParams, $location) {
    // $http.get("/api/v1/urls/" + $routeParams.shortUrl)
    //     .success(function (data) {
    //         $scope.shortUrl = data.shortUrl;
    //         $scope.longUrl = data.longUrl;
    //         $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
    //     });
    $scope.goToAddPage = function () {
        $location.path("/add");
    }
}]);