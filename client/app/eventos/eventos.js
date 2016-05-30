'use strict';

angular.module('99partyApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('eventos', {
        url: '/eventos',
        template: '<eventos></eventos>'
      });
  });
