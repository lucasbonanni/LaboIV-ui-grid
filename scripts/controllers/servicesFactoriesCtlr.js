angular
	.module('app')
	.controller('ServicesFactoriesCtlr', function($scope,gridBandera,i18nService, uiGridConstants,factoryServBandera){

		$scope.gridOptionsTodasBanderas = gridBandera;
		$scope.gridOptionsUnaBandera = gridBandera;
		$scope.gridOptionsSoloFotos = gridBandera;

		factoryServBandera.function_name().then(function(rta){
	      console.info("rta",rta);
	      $scope.gridOptionsTodasBanderas.data = rta.data.Paises;
	    });

	});