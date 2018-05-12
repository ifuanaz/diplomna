(function () {

    angular.module('directives', [])
    .directive('ngMask', function() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).mask("(099) 999-99-99");
            }
        }
    })
    .directive('ngUp', function () {
        return {
            restrict: 'EA',
            scope: {
                showTarget: '@'
            },
            link: function (scope, element, attrs) {
                const target = document.getElementById(scope.showTarget);

                $(window).scroll(function () {
                    if ( $(this).scrollTop() >= target.offsetTop ) {
                        $(element).fadeIn();
                    }
                    else {
                        $(element).fadeOut();
                    }
                });

                $(element).click(function () {
                    $('body, html').animate({
                        scrollTop: 0
                    }, 500);
                    return false;
                });
            }
        }
    })
    .directive('ngLoader', function ($timeout) {
        return {
            restrict: 'A',
            scope: {
                time: '<'
            },
            link: function (scope, element, attrs) {
                $timeout(function () {
                    $(element).removeClass('load');
                    $('body').css('overflow', 'auto');
                }, scope.time);
            }
        }
    })
    ;

})();
