angular.module('finalProjectIOS')

.factory('BestBuyService', function ($http) {
    var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
    var key = '2g74e2pcnuum3fre2j6998wt';

    return {

        search: function (term) {
            return $http.get(bestBuyAPIendPoint + '/products((search=' + term + '))?show=name,sku,salePrice,image&format=json&apiKey=' + key);
        },

            getStores: function (lat, long) {            
            return $http.get(bestBuyAPIendPoint + '/stores(area(' + lat + ',' + long + ',100000))?format=json&apiKey=' + key + '&show=longName,City,address,phone,hours');        
        },
                getStoresCity: function (store) {         
            return $http.get(bestBuyAPIendPoint +   '/stores(city=' + store + ')?format=json&apiKey=' + key);        
        }

    };

});