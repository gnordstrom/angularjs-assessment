angular.module('assessment').service('shopService', function($http) {
    
    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        }).then(function(response) {
            console.log(response.data)
            return response.data;
        })
    }

    this.getSpecificProduct = function(id) {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/' + id
        }).then(function(response) {
            console.log(response.data);
            return response.data;
        })
    }
});