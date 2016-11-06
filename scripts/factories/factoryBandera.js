angular
  .module('app')
  .value('version','0.1')
  .constant('bandera_url','http://www.egos27.somee.com/api/bandera')
  .factory('factoryBandera', function ($http,bandera_url) {
    this.Nombre = "servicio bandera";

    var objeto = {};
    objeto.Nombre = "factory de bandera";

    return objeto;

    var url = "http://www.egos27.somee.com/api/bandera";

    function traerUrl(parametro){
      if(!parametro)
      {
        return bandera_url;
      }
      else{
        return bandera_url3883 + '/' + parametro;
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
