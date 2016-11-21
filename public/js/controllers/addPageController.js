var app = angular.module("AlgorithmHelper");

app.controller("addPageController",
    ["$scope", "$http", "$location", "$location", function ($scope, $http, $location, $location) {
    // $scope.submit = function () {
    //     $http.post("/api/v1/urls", {
    //         longUrl: $scope.longUrl
    //     })
    //         .success(function (data) {
    //             $location.path("/urls/" + data.shortUrl);
    //         });
    // }
    $scope.backToHomepage = function () {
        $location.path("/");
    }
}]);