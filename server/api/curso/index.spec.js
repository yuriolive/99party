'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cursoCtrlStub = {
  index: 'cursoCtrl.index',
  show: 'cursoCtrl.show',
  create: 'cursoCtrl.create',
  update: 'cursoCtrl.update',
  destroy: 'cursoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cursoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './curso.controller': cursoCtrlStub
});

describe('Curso API Router:', function() {

  it('should return an express router instance', function() {
    cursoIndex.should.equal(routerStub);
  });

  describe('GET /api/cursos', function() {

    it('should route to curso.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cursoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cursos/:id', function() {

    it('should route to curso.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cursoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cursos', function() {

    it('should route to curso.controller.create', function() {
      routerStub.post
        .withArgs('/', 'cursoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cursos/:id', function() {

    it('should route to curso.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'cursoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cursos/:id', function() {

    it('should route to curso.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'cursoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cursos/:id', function() {

    it('should route to curso.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'cursoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
