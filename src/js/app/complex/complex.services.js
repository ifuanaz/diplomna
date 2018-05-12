(function () {
    'use strict';

    function ComplexService($http) {
        const URLS = {
            FETCH: './json/complex.json'
        }
        const service = {
            getComplexes: getComplexes,
            getHouseById: getHouseById
        }

        return service;

        function getComplexes() {
            return $http.get(URLS.FETCH);
        }

        function getHouseById(id) {
            return $http.get(URLS.FETCH).then(response => {
                return _.find(response.data, {id: id});
            });
        }
    }

    angular.module('complex.services', [])
    .factory('ComplexService', ComplexService)
    ;

})();
