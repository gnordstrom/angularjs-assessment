angular.module('assessment').controller('shopCtrl', function($scope, shopService, $stateParams) {
    
    shopService.getProducts().then(function(response) {
        $scope.products = response;
        console.log($scope.products)
    })

    shopService.getSpecificProduct($stateParams.id).then(function(response) {
        $scope.specific = response;
    })
});