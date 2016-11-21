var app = angular.module('AlgorithmHelper', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            controller: "homeController"
        })
        .when("/add", {
            templateUrl: "./public/views/addPage.html",
            controller: "addPageController"
        });
});
