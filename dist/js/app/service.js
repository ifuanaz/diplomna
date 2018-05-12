'use strict';

(function () {

    function AppService($http) {
        var URLS = {
            FETCH_SLIDES: "./json/slides.json"
        };
        var service = {
            getSlides: getSlides
        };

        return service;

        function getSlides() {
            return $http.get(URLS.FETCH_SLIDES);
        }
    }

    angular.module('app.service', []).factory('AppService', AppService);
})();