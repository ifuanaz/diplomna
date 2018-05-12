'use strict';

(function () {
    'use strict';

    function ComplexService($http) {
        var URLS = {
            FETCH: './json/complex.json'
        };
        var service = {
            getComplexes: getComplexes,
            getHouseById: getHouseById
        };

        return service;

        function getComplexes() {
            return $http.get(URLS.FETCH);
        }

        function getHouseById(id) {
            return $http.get(URLS.FETCH).then(function (response) {
                return _.find(response.data, { id: id });
            });
        }
    }

    angular.module('complex.services', []).factory('ComplexService', ComplexService);
})();