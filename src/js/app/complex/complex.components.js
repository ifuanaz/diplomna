(function () {
    'use strict';

    const complexList = {
        bindings: {
            house: '=?'
        },
        templateUrl: './src/js/app/complex/templates/complex-list.html',
        controller: function (ComplexService) {
            let vm = this;

            vm.getHouse = getHouse;

            ComplexService.getComplexes().then(response => vm.complexes = response.data);

            function getHouse(id) {
                ComplexService.getHouseById(id).then(result => vm.house = result);
            }

        }
    };


    const complexDetails = {
        bindings: {
            house: '<?'
        },
        templateUrl: './src/js/app/complex/templates/complex-details.html',
        controller: function ($scope, ComplexService, ngDialog) {
            let vm = this;
            vm.model = {
                isBalcon: false
            };

            vm.contactManager = function() {
                ngDialog.open({
                    template: 'src/js/app/complex/templates/popup.html',
                    width: '800px',
                    controllerAs: 'ctrlDialog',
                    controller: function () {
                        let self = this;
                        self.model = Object.assign(vm.model, {title: vm.house.title});
                    }
                })
            }

        }
    };


    angular.module('complex.components', [
        'ngDialog',
        'complex.services'
    ])
    .component('complexList', complexList)
    .component('complexDetails', complexDetails)
    ;

})();
