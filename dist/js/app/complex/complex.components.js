'use strict';

(function () {
    'use strict';

    var complexList = {
        bindings: {
            house: '=?'
        },
        templateUrl: './src/js/app/complex/templates/complex-list.html',
        controller: function controller(ComplexService) {
            var vm = this;

            vm.getHouse = getHouse;

            ComplexService.getComplexes().then(function (response) {
                return vm.complexes = response.data;
            });

            function getHouse(id) {
                ComplexService.getHouseById(id).then(function (result) {
                    return vm.house = result;
                });
            }
        }
    };

    var complexDetails = {
        bindings: {
            house: '<?'
        },
        templateUrl: './src/js/app/complex/templates/complex-details.html',
        controller: function controller($scope, ComplexService, ngDialog) {
            var vm = this;
            vm.model = {
                isBalcon: false
            };

            vm.contactManager = function () {
                ngDialog.open({
                    template: 'src/js/app/complex/templates/popup.html',
                    width: '800px',
                    controllerAs: 'ctrlDialog',
                    controller: function controller() {
                        var self = this;
                        self.model = Object.assign(vm.model, { title: vm.house.title });
                    }
                });
            };
        }
    };

    angular.module('complex.components', ['ngDialog', 'complex.services']).component('complexList', complexList).component('complexDetails', complexDetails);
})();