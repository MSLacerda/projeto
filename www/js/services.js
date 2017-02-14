angular.module('projeto.services', [])
  .factory('GetDisciplinas', ['$http', function ($http) {
    var baseUrl = "https://ecolaborejw.herokuapp.com/api";
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
        return $http.get('https://ecolaborejw.herokuapp.com/api/alunos/?format=json');
      }
    }
  }])

  .factory('GetDiscur', ['$http', function ($http) {
    var baseUrl = "https://ecolaborejw.herokuapp.com/api";

    return {

      data: function () {

        return $http.get(baseUrl + "/topicos");

      }
    }
  }])
  
  .factory('GetLogin', ['$http', function ($http, usuario) {
    var baseUrl = "localhost:8000/api";
    return {

      data: function () {

        return $http.get(baseUrl + "/alunos/?email=" + usuario.email);

      }

    }

  }]);


  ;
