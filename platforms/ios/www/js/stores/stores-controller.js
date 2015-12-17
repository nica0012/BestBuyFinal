angular.module('finalProjectIOS')
.controller('StoresCtrl', function ($scope, $log, BestBuyService, $cordovaGeolocation, $ionicPopup) {

    $scope.getStores;

    var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
    };

    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            var lat = position.coords.latitude
            var long = position.coords.longitude
        }, function (err) {
            console.log('Error getting current position');
        });

    $scope.getStores = function (store) {
        console.log(store);
        if (!store) {
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var lat = position.coords.latitude
                    var long = position.coords.longitude
                    BestBuyService.getStores(lat, long)
                        .success(function (data) {
                            $scope.stores = data.stores;
                            $log.info(data);
                            if (data.stores == 0) {
                                $ionicPopup.alert({
                                    title: 'Error',
                                    content: 'No Stores Found!'
                                });
                            }
                        })
                        .error(function (error) {
                            $log.error('Best Buy API Search Error!');
                            //LocalStorageService.add("Best Buy API Search Error!");
                        });
                }, function (err) {
                    console.log('geoError');
                    //LocalStorageService.add("Geolocation Error!");
                });
        } else {
            BestBuyService.getStoresCity(store)
                .success(function (data) {
                    $scope.stores = data.stores;
                    $log.info(data);
                    if (data.stores == 0) {
                        $ionicPopup.alert({
                            title: 'Error',
                            content: 'No Stores Found!'
                        });
                    }

                })
                .error(function (error) {
                    $log.error('Best Buy API Search Error!');
                    //LocalStorageService.add("Best Buy API Search Error!");
                });
        }
    }
})