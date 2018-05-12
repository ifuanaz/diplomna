(function () {

    function AppService($http) {
        const URLS = {
            FETCH_SLIDES: "./json/slides.json"
        }
        const service = {
            getSlides: getSlides
        }

        return service;

        function getSlides() {
            return $http.get(URLS.FETCH_SLIDES);
        }
    }

    angular.module('app.service', [])
    .factory('AppService', AppService)
    ;

})()
