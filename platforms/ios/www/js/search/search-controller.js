angular.module('finalProjectIOS')

.controller('SearchCtrl', function ($scope, $log, BestBuyService) {

    $scope.data = {

        search: ''
    }

    $scope.products = [];

    $scope.search = function (term) {
        if (term) {

            BestBuyService.search(term)
                .success(function (data) {

                    $scope.products = data.products;

                    $log.info(data);
                })
                .error(function (error) {
                    $log.error('Best Buy API Search Error..!');

                });
        } else {
            $log.error('Search Term is empty..!');

        }
    };
});