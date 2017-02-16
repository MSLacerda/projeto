// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db = null
angular.module('projeto', ['projeto.controller','projeto.services','ionic','ngCordova'])

.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'  
  });

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.alunos', {
    url: '/alunos',
    views: {
      'tab-alunos': {
        templateUrl: 'templates/aluno.html',
        controller: 'AlunoCtrl'
      }
    }
  }).state('tab.turmas', {
    url: '/turmas',
    views: {
      'tab-alunos': {
        templateUrl: 'templates/turmas.html'
      }
    }
  })
  .state('tab.disciplinas', {
    url: '/disciplinas',
    views: {
      'tab-disciplinas': {
        templateUrl: 'templates/disciplinas.html',
        controller: 'DiscCtrl'
      }
    }
  })
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

})



.run(function($ionicPlatform, $cordovaSQLite) {
  
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(window.cordova) {
      db = $cordovaSQLite.openDB({name: "usuario.db"});
    }else{
      db = window.openDatabase('usuario.db', '1', 'Usuario DB', 200000);
      console.log('db criado no navegador');
    }

    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS info_user (id integer auto_increment primary key, token text, email text)').then(function () {
      console.log("tabela criada");
    });

  });
});


