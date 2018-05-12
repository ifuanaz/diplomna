'use strict';

(function () {

    var standards = {
        templateUrl: './src/js/app/standard/templates/standards.html',
        controller: function controller(StandardService) {
            var vm = this;

            StandardService.getStandarts().then(function (response) {
                return vm.standards = response.data;
            });
        }
    };

    angular.module('standard.components', ['standard.services']).component('standards', standards);
})();