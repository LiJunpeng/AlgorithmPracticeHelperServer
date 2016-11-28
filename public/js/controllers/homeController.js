var app = angular.module("AlgorithmHelper");

app.controller("homeController",
    ["$scope", "$http", "$routeParams", "$location", function ($scope, $http, $routeParams, $location) {
    // $http.get("/api/v1/urls/" + $routeParams.shortUrl)
    //     .success(function (data) {
    //         $scope.shortUrl = data.shortUrl;
    //         $scope.longUrl = data.longUrl;
    //         $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
    //     });


    $http.get("/api/v1/AlgoProblems")
        .success(function (data) {
            console.log(data);
           // var names = data.name_list.split('|');
            //$scope.problems = names;
            $scope.problems = data;

        });


    $scope.goToAddPage = function () {
        $location.path("/add");
    }


    $scope.submit = function () {
        alert($scope.problems.name);
    }

}]);