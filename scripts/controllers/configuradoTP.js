angular
  .module('app')
  .controller('configuradoTP', function($scope, data, i18nService, uiGridConstants,NgMap) {

    //$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYhrLDYgU8ClRKO58_sPLO9e-Je1fYSbs";
    $scope.mapaLatitud = 0;
    $scope.mapaLongitud = 0;
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};

    $scope.gridAmigos = {};
    $scope.gridAmigos.columnDefs = columnDefs();

    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    data.dataTP().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
      console.info(rta);
    });


    

    $scope.mostrarPos = function (latitud, longitud, amigos){
      //alert("latitud: " + latitud + " longitud " + longitud);
      $scope.mapaLatitud = Number(latitud);
      $scope.mapaLongitud = Number(longitud);
      $scope.gridAmigos.data = amigos;
    };

    //console.log(uiGridConstants);

    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 45},
        { field: 'avatar', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
        { field: 'titulo', name: 'ocupacion'
          /*,filter:{
            condition: uiGridConstants.filter.STARTS_WITH,
            placeholder: 'comienza con...'
          }*/
        },
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
        { field: 'email', name: 'mail'},
        { field: 'sexo', name: 'sexo'
        // filtro de busqueda.
          /*,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: '1', label: 'Masculino'},
              {value: '2', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexo'*/
        },
        { field: 'fechaNacimiento', name: 'fechaNacimiento'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { field: 'latitud', cellTemplate:"<button type=\"button\" ng-click=\"grid.appScope.mostrarPos(row.entity.latitud,row.entity.logitud,row.entity.amigos)\">posision</button>"},
      ];
    }
  })
