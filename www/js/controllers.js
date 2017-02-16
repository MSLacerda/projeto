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

	}]).controller('LoginCtrl', ['$cordovaSQLite','$timeout','$location','$ionicScrollDelegate','GetLogin', function ($cordovaSQLite,$timeout, $location,$ionicScrollDelegate, GetLogin) {
		var self = this;

		self.login = 'logo';
		self.img = 'img';
		self.entrar = false;
		self.name = true;

		self.user = {};
		self.execute = function() {
   			var query = "INSERT INTO info_user (token, email) VALUES (?,?)";
    		$cordovaSQLite.execute(db, query, [token, self.user.email]).then(function(res) {
    	  		console.log("insertId: " + res.insertId);
    		}, function (err) {
      			console.error(err);
    		});
  		};


		self.logar = function (usuario) {
				GetLogin.data(usuario).then(function (res) {
					token = res.data.token;
					self.user = res.data.user;
					self.execute();
				},
				function (err) {
					console.log(err);
				});
		}

		self.scrollMainToTop = function () {
			$ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
		};
		
	}]);