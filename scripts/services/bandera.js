angular
  .module('app')
  .constant('bandera_url','http://www.egos27.somee.com/api/bandera')
  .service('bandera', function ($http,bandera_url) {
    this.Nombre = "servicio bandera";

    //esta funcion es privada
    function traerUrl(parametro){
      if(!parametro)
      {
        return bandera_url;
      }
      else{
        return bandera_url + '/' + parametro;
      }

    };  


    this.traerTodos = function(){
      //console.info("funcion privada",traerUrl("zaraza"));
      return $http.get(traerUrl()).then(function (respuesta) {
        // body...
        console.info("bandera url",bandera_url);
        console.info("respuesta servicio",respuesta);
        return respuesta;
      },function (error) {
         return error;
      });
    };

    function traerSoloImagen(){
      //console.info("funcion privada",traerUrl("zaraza"));
      return $http.get(traerUrl()).then(function (respuesta) {
        // body...
        console.info("servicio traerSoloImagen",respuesta);

        var numeros = [1,2,3,4];
        
        numeros.forEach(function (value) {
          //console.log(value);
        })

        var imagenes = [];
        respuesta.data.Paises.forEach(function (pais) {
          // body...
          imagenes.push(pais.Bandera);
        })

        console.info("imagenes banderas", numeros);

        return imagenes;
      },function (error) {
         return error;
      });

    };

    

    function traerPais(pais){
       return $http.get(traerUrl(pais)).then(function (respuesta) {
        // body...
        console.info("respuesta pais",respuesta);
        return respuesta.data[0];
      },function (error) {
         return error;
      });
    };
    
    this.traerPais = traerPais;

    this.traerSoloImagen = traerSoloImagen;

  })
