/**
 * Curso model events
 */

'use strict';

import {EventEmitter} from 'events';
import Curso from './curso.model';
var CursoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CursoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Curso.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CursoEvents.emit(event + ':' + doc._id, doc);
    CursoEvents.emit(event, doc);
  }
}

export default CursoEvents;
