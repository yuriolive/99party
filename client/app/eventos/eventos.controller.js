'use strict';
(function(){

class EventosComponent {
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/eventos').then(response => {
      this.eventos = response.data;
    });
  }
}

angular.module('99partyApp')
  .component('eventos', {
    templateUrl: 'app/eventos/eventos.html',
    controller: EventosComponent,
    controllerAs: 'vm'
  });

})();
