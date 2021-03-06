angular
  .module('app', [
    'ui.router',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit',
    'ngMap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('simple');
    $stateProvider

    .state('simple', {
      url: '/simple',
      templateUrl: 'views/simple.html',
      controller:'SimpleCtrl'
    })
    .state('paginada', {
      url: '/paginada',
      templateUrl: 'views/paginada.html',
      controller:'PaginadaCtrl'
    })
    .state('conf', {
      url: '/conf',
      templateUrl: 'views/config.html',
      controller:'ConfCtrl'
    })
    .state('exportar', {
      url: '/exportar',
      templateUrl: 'views/exportar.html',
      controller:'ExportarCtrl'
    })
    .state('modificar', {
      url: '/modificar',
      templateUrl: 'views/modificar.html',
      controller:'ModificarCtrl'
    })
    .state('configurado', {
      url: '/configurado',
      templateUrl: 'views/simpleTP.html',
      controller:'configuradoTP'
    })
    .state('servicios', {
      url: '/servicios',
      templateUrl: 'views/simpleServicios.html',
      controller:'configuradoServicios'
    })
    .state('factories', {
      url: '/factories',
      templateUrl: 'views/simpleFactories.html',
      controller:'configuradoFactories'
    })

    .state('completo', {
      url: '/completo',
      templateUrl: 'views/bandera.html',
      controller:'ServicesFactoriesCtlr'
    })
    .state('directiva', {
      url: '/directiva',
      templateUrl: 'views/directiva.html',
      controller:'directivaCtrl'
    })

  });
