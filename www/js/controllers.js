angular.module('projeto.controller', [])

	.controller('DiscCtrl', ['GetDisciplinas', function (GetDisciplinas) {
		var self = this;
		GetDisciplinas.getApi().success(function (resp) {
			self.a = resp.results;
		});

	}])

	.controller('AlunoCtrl', ['GetAlunos', function (GetAlunos) {
		var self = this;
		GetAlunos.data().success(function (resp) {
			return self.b = resp.results;
		});
	}])
	.controller('HomeCtrl', ['GetDiscur', function (GetDiscur) {
		var self = this;
		GetDiscur.data().success(function (resp) {
			self.c = resp.results;
		});

	}]).controller('LoginCtrl', ['$timeout','$location','$ionicScrollDelegate','GetLogin', function ($timeout, $location,$ionicScrollDelegate, GetLogin) {
		var self = this;

		self.login = 'logo';
		self.img = 'img';
		self.entrar = false;
		self.name = true;

		self.usuario = {};

		self.logar = function () {
			
		}

		self.scrollMainToTop = function () {
			$ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
		};
	}]);