(function () {
    'use strict';

    var controllerId = 'topnav';
    angular.module('app').controller(controllerId,
        ['$scope', topnav]);

    function topnav($scope) {
        $('.mainbar').css("margin-left", "0px");

        $scope.toggleDrawer = function () {
            if ($('.sidebar').hasClass('hide-drawer')) {
                $('.sidebar').removeClass('hide-drawer');
                $('.mainbar').css("margin-left", "230px");
            } else {
                $('.sidebar').addClass('hide-drawer');
                $('.mainbar').css("margin-left", "0px");
            }
        }
    };
})();
