(function () {

    var app = angular.module('app', [
        'duScroll',
        'ui.carousel',
        'directives',
        'app.service',
        'complex.components',
        'standard.components'
    ])
    .controller('RootController', function (AppService) {
        const act = this;

        AppService.getSlides().then(response => act.slides = response.data);

        const t = [
            // 'енергоефективність',
            // 'доступність',
            // 'комфорт',
            'сервіс',
            'благоустрій',
            'архітектура та дизайн',
            'безпека'
        ]
    })
    ;

})();
