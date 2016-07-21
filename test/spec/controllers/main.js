'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Al comenzar existen 3 tareas al comenzar', function () {
    expect(scope.tareas.length).toBe(3);
  });

it('Probar que al agregar un elemento, el array tareas tenga length 4', function() {
     scope.tarea = 'tarea 1';
     scope.addTask();
      expect(scope.tareas.length).toBe(4);
  }      
);

it('Probar que se elimino un elemento 2, el array tareas tenga length 2', function() {
     scope.deleteTask(1);
      expect(scope.tareas.length).toBe(2);
  }      
);


});
