'use strict';

angular.module('eventos')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventos', {
        url: '/eventos',
        template: '<eventos></eventos>'
      });
  });
