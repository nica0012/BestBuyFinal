angular.module('finalProjectIOS')

.factory('StoreService', function ($http) {
    var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
    var key = '2g74e2pcnuum3fre2j6998wt';

    return {
        getStores: function (lat, long) {            
            return $http.get(bestBuyAPI + '/stores(area(' + lat + ',' + long + ',100000))?format=json&apiKey=' + key + '&show=longName,City,address,phone,hours');        
        },
                getStoresCity: function (store) {         
            return $http.get(bestBuyAPI +   '/stores(city=' + store + ')?format=json&apiKey=' + key);        
        }
    };
});