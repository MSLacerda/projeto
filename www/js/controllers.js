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

	}]).controller('LoginCtrl', ['$timeout','$location','$ionicScrollDelegate','GetLogin','$ionicPopup', function ($timeout, $location,$ionicScrollDelegate, GetLogin, $ionicPopup) {
		var self = this;

		self.login = 'logo';
		self.img = 'img';
		self.entrar = false;
		self.name = true;


		self.logar = function (usuario) {
			console.log(usuario);
			self.dados = GetLogin.data;
			self.dados(usuario).success(function (resp) {
			console.log(resp);
			token = resp.token;		
							}).error(function (data, status) {
							console.log(data);
							console.log(status);
								if (status == 400){
									$ionicPopup.alert({
										title: 'Erro!',
										template: 'Login ou senha inválidos!'
									});
								}
							});
		}

		self.scrollMainToTop = function () {
			$ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
		};
	}]);