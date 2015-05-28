'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('products', {
                url: '/products',
                templateUrl: 'templates/dashboard.html'
            })
            .state('analytics', {
                url: '/analytics',
                templateUrl: 'templates/tables.html'
            });
    }
]);