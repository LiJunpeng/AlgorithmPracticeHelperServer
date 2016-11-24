var app = angular.module("AlgorithmHelper");

app.controller("addPageController",
    ["$scope", "$http", "$location", "$location", function ($scope, $http, $location, $location) {
    $scope.submit = function () {
        $http.post("/api/v1/AlgoProblem", {
            sourcePlatform: $scope.sourcePlatform,
            platformNumber: $scope.platformNumber,
            problemName: $scope.problemName,
            problemDescription: $scope.problemDescription,
            level: $scope.level,
                // problemTags: $scope.problemTags,
                // companyTags: $scope.companyTag,
            solution: $scope.solution,
            note: $scope.note
        })
            .success(function (data) {
                $location.path("/");
            });
    }
    $scope.backToHomepage = function () {
        $location.path("/");
    }
}]);
