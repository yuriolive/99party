'use strict';

var app = require('../..');
import request from 'supertest';

var newCurso;

describe('Curso API:', function() {

  describe('GET /api/cursos', function() {
    var cursos;

    beforeEach(function(done) {
      request(app)
        .get('/api/cursos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cursos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cursos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/cursos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cursos')
        .send({
          name: 'New Curso',
          info: 'This is the brand new curso!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCurso = res.body;
          done();
        });
    });

    it('should respond with the newly created curso', function() {
      newCurso.name.should.equal('New Curso');
      newCurso.info.should.equal('This is the brand new curso!!!');
    });

  });

  describe('GET /api/cursos/:id', function() {
    var curso;

    beforeEach(function(done) {
      request(app)
        .get('/api/cursos/' + newCurso._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          curso = res.body;
          done();
        });
    });

    afterEach(function() {
      curso = {};
    });

    it('should respond with the requested curso', function() {
      curso.name.should.equal('New Curso');
      curso.info.should.equal('This is the brand new curso!!!');
    });

  });

  describe('PUT /api/cursos/:id', function() {
    var updatedCurso;

    beforeEach(function(done) {
      request(app)
        .put('/api/cursos/' + newCurso._id)
        .send({
          name: 'Updated Curso',
          info: 'This is the updated curso!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCurso = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCurso = {};
    });

    it('should respond with the updated curso', function() {
      updatedCurso.name.should.equal('Updated Curso');
      updatedCurso.info.should.equal('This is the updated curso!!!');
    });

  });

  describe('DELETE /api/cursos/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/cursos/' + newCurso._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when curso does not exist', function(done) {
      request(app)
        .delete('/api/cursos/' + newCurso._id)
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
