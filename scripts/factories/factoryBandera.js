angular
  .module('app')
  .factory('factoryBandera', function ($http) {
    this.Nombre = "servicio bandera";

    var objeto = {};
    objeto.Nombre = "factory de bandera";

    return objeto;

    var url = "http://www.egos27.somee.com/api/bandera";

    function traerUrl(parametro){
      if(!parametro)
      {
        return url;
      }
      else{
        return url + '/' + parametro;
      }

    };  


    function traerTodos(){
      //console.info("funcion privada",traerUrl("zaraza"));
      return $http.get(traerUrl()).then(function (respuesta) {
        // body...
        console.info("respuesta servicio",respuesta);
        return respuesta;
      },function (error) {
         return error;
      });
    };
  })
