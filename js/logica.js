var app=angular.module('programa',[]);
	app.controller('productosCrt',function($scope){
 		$scope.total=0;
 		$scope.producto1=0;
 		$scope.producto2=0;
 		$scope.producto3=0;
 		$scope.producto4=0;
 		$scope.producto5=0;

 		$scope.val1=0;
 		$scope.val2=0;
 		$scope.val3=0;
 		$scope.val4=0;
 		$scope.val5=0;


		function producto(entrada){
		var numero = entrada;
		switch (numero){
			case 1: $scope.total += 10.99;
					$scope.producto1 += 1;
					$scope.val1=1;
			         break;
			case 2: $scope.total += 19.99;
					$scope.producto2 += 1;
					$scope.val2=2;
					break;
			case 3: $scope.total += 10;
					$scope.val3=3;
					$scope.producto3 += 1;
						break;
			case 4: $scope.total += 5.99;
					$scope.producto4 += 1;
					$scope.val4=4;
						break;
			case 5: $scope.total += 39.99;
					$scope.producto5 += 1;
					$scope.val5=5;
						break;
		}

	}
 $scope.calculo=producto;
	});