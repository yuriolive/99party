'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Eventos',
    'state': 'eventos'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('99partyApp')
  .controller('NavbarController', NavbarController);
