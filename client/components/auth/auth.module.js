'use strict';

angular.module('99partyApp.auth', [
  '99partyApp.constants',
  '99partyApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
