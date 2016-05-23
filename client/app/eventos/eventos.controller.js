'use strict';
(function(){

class EventosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('99partyApp')
  .component('eventos', {
    templateUrl: 'app/eventos/eventos.html',
    controller: EventosComponent
  });

})();
