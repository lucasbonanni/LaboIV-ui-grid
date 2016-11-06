angular
	.module('app')
	.factory('gridBandera',function(){
		var grid = {};

		grid.paginationPageSizes = [25, 50, 75];
		grid.paginationPageSize = 25;
		grid.enableFiltering = true;
		



		function columnDefs () {
	      return [
	         { field: 'Nombre', name: 'Nombre', width: 120
	          ,enableFiltering: false
	        },
	        { field: 'Bandera',  name: 'Bandera', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 120
	          ,type: 'text'
	          ,enableFiltering: false
	        },
	        { field: 'BanderaChica',  name: 'BanderaChica', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 140
	          ,type: 'text'
	          ,enableFiltering: false
	        }  
	      ];
	  	}

	  	grid.columnDefs = columnDefs();

	  	return grid;

	})