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

	}]).controller('LoginCtrl', ['$timeout','$location','$ionicScrollDelegate', function ($timeout, $location,$ionicScrollDelegate) {
		var self = this;

		self.login = 'logo';
		self.img = 'img';
		self.entrar = false;
		self.name = true;

		self.logar = function () {
			self.entrar = true;
			self.name = false;
			$timeout(
				function () {
					$location.path('/tab/home') ;
				}
			, 2000);
			}

		self.scrollMainToTop = function () {
			$ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
		};
	}]);