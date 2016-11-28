var app = angular.module("AlgorithmHelper");



app.controller("homeController",
    ["$scope", "$http", "$routeParams", "$location", function ($scope, $http, $routeParams, $location) {
    // $http.get("/api/v1/urls/" + $routeParams.shortUrl)
    //     .success(function (data) {
    //         $scope.shortUrl = data.shortUrl;
    //         $scope.longUrl = data.longUrl;
    //         $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
    //     });

    $scope.selectedRow = null;  // initialize our variable to null
        $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
        $scope.selectedRow = index;
        console.log($scope.problems[index].name);

        var url = "/api/v1/AlgoProblems/" + $scope.problems[index].name.replace(" ", "%20");
        $http.get(url)
            .success(function (data) {
                $scope.problem_detail = data;
                console.log(data);
                prettyPrint();
        });
    }

    $http.get("/api/v1/AlgoProblems")
        .success(function (data) {
            console.log(data);
            $scope.problems = data;
    });


    $scope.goToAddPage = function () {
        $location.path("/add");
    }


    $scope.submit = function () {
        alert($scope.problems.name);
    }

}]);