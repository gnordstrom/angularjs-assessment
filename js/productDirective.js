angular.module('assessment').directive('productDirective', function() {
    return {
        restrict: 'EA',
        scope: {
            product: '='
        },
        templateUrl: '../views/product-tmpl.html'
    }
})