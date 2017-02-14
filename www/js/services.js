var baseUrl = "https://ecolaborejw.herokuapp.com/api"

angular.module('projeto.services', [])
  .factory('GetDisciplinas', ['$http', function ($http) {
    return {
      all: function () {
        return data;
      },
      getApi: function () {
        return $http.get(baseUrl + "/disciplinasC");
      }
    };

  }])

  .factory('GetAlunos', ['$http', function ($http) {
    return {
      data: function () {
        return $http.get(baseUrl + '/alunos/?format=json');
      }
    }
  }])

  .factory('GetDiscur', ['$http', function ($http) {
    return {

      data: function () {

        return $http.get(baseUrl + "/topicos");

      }
    }
  }])
  
  .factory('GetLogin', ['$http', function ($http) {
    return {

      data: function (usuario) {
        return $http.post(baseUrl + "/token-auth/", usuario);
      }

    }

  }]);


  ;
