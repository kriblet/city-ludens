'use strict';

((angular)=>{
    angular.module('bank.module')
        .controller('bankTransactionsController',['$scope', '$common', function($scope, $common){
            $scope.skip = 0;
            $scope.limit = 50;
            $scope.transactions = [];

            $scope.init = init;
            $scope.balance = function(){
                var total = 0;
                $scope.transactions.forEach((t)=>{
                    if (t.sender){
                        total -= parseInt(t.coinCount);
                    }else{
                        total += parseInt(t.coinCount);
                    }
                });

                return total;
            };

            function init(){
                $common.$dataService.emit('user/transactions', {skip: $scope.skip, limit: $scope.limit})
                    .then(function(res){
                        if (res.isValid){
                            $scope.transactions = res.data;
                        }
                    })
                    .catch(function(err){
                        console.error(err);
                    })
            }
        }])
})(angular);