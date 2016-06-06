'use strict';

var app = require('../..');
import request from 'supertest';

var newEvento;

describe('Evento API:', function() {

  describe('GET /api/eventos', function() {
    var eventos;

    beforeEach(function(done) {
      request(app)
        .get('/api/eventos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          eventos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      eventos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/eventos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/eventos')
        .send({
          name: 'New Evento',
          info: 'This is the brand new evento!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEvento = res.body;
          done();
        });
    });

    it('should respond with the newly created evento', function() {
      newEvento.name.should.equal('New Evento');
      newEvento.info.should.equal('This is the brand new evento!!!');
    });

  });

  describe('GET /api/eventos/:id', function() {
    var evento;

    beforeEach(function(done) {
      request(app)
        .get('/api/eventos/' + newEvento._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          evento = res.body;
          done();
        });
    });

    afterEach(function() {
      evento = {};
    });

    it('should respond with the requested evento', function() {
      evento.name.should.equal('New Evento');
      evento.info.should.equal('This is the brand new evento!!!');
    });

  });

  describe('PUT /api/eventos/:id', function() {
    var updatedEvento;

    beforeEach(function(done) {
      request(app)
        .put('/api/eventos/' + newEvento._id)
        .send({
          name: 'Updated Evento',
          info: 'This is the updated evento!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEvento = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEvento = {};
    });

    it('should respond with the updated evento', function() {
      updatedEvento.name.should.equal('Updated Evento');
      updatedEvento.info.should.equal('This is the updated evento!!!');
    });

  });

  describe('DELETE /api/eventos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/eventos/' + newEvento._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when evento does not exist', function(done) {
      request(app)
        .delete('/api/eventos/' + newEvento._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
