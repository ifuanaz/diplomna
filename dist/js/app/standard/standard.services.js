'use strict';

(function () {
    'use strict';

    function StandardService($http) {
        var URLS = {
            FETCH: './json/standard.json'
        };
        var service = {
            getStandarts: getStandarts
        };

        return service;

        function getStandarts() {
            return $http.get(URLS.FETCH);
        }
    }

    angular.module('standard.services', []).factory('StandardService', StandardService);
})();