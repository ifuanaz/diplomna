(function () {
    'use strict';

    function StandardService($http) {
        const URLS = {
            FETCH: './json/standard.json'
        }
        const service = {
            getStandarts: getStandarts
        }

        return service;

        function getStandarts() {
            return $http.get(URLS.FETCH);
        }
    }

    angular.module('standard.services', [])
    .factory('StandardService', StandardService)
    ;

})();
