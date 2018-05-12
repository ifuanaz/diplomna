'use strict';

(function () {

    var app = angular.module('app', ['duScroll', 'ui.carousel', 'directives', 'app.service', 'complex.components', 'standard.components']).controller('RootController', function (AppService) {
        var act = this;

        AppService.getSlides().then(function (response) {
            return act.slides = response.data;
        });

        var t = [
        // 'енергоефективність',
        // 'доступність',
        // 'комфорт',
        'сервіс', 'благоустрій', 'архітектура та дизайн', 'безпека'];
    });
})();