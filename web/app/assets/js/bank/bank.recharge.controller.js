'use strict';

((angular)=>{
    angular.module('bank.module')
        .controller('bankRechargeController',['$scope', '$common', function($scope, $common){
            $scope.quantityCoins = 50;

            $scope.rechargeCoins = rechargeCoins;
            $scope.init = init;

            function rechargeCoins(){
                swal({
                    title: 'Wanna buy '+$scope.quantityCoins+' City Coins?',
                    text: "You are about to buy " + $scope.quantityCoins + ' City Coins' ,
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, I Want those coins'
                }).then(function () {
                    $common.$dataService.emit('bank/recharge', { quantityCoins: $scope.quantityCoins })
                        .then(function(res){
                            if (res.isValid){
                                $scope.$broadcast('bank/recharge', $scope.quantityCoins);
                                $scope.$emit('bank/recharge', $scope.quantityCoins);
                                $scope.transactions.push({_id: res.data, createdAt: Date.now(), coinCount: $scope.quantityCoins, type: 'RECHARGE'});
                                swal(
                                    'Great!',
                                    $scope.quantityCoins + ' City Coins added to your account',
                                    'success'
                                )
                            }
                        })
                        .catch(function(err){
                            console.error(err);
                            swal(
                                'Oops something bad happened',
                                'Try again later',
                                'error'
                            )
                        });

                }).catch(function(){
                    swal(
                        'Cancelled',
                        'Operation has been cancelled',
                        'error'
                    )
                });

            }

            function init(){
                $common.$dataService.emit('user/transactions', {skip: 0, limit: 10})
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