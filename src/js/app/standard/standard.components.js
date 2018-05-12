(function () {

    const standards = {
        templateUrl: './src/js/app/standard/templates/standards.html',
        controller: function (StandardService) {
            let vm = this;

            StandardService.getStandarts().then(response => vm.standards = response.data);
        }
    }

    angular.module('standard.components', [
        'standard.services'
    ])
    .component('standards', standards)
    ;

})();
