'use strict';

((angular)=>{
    angular.module('bank.module')
        .controller('bankTransferController',['$scope', '$common', function($scope, $common){
            $scope.quantityCoins = 0;

            $scope.transferCoins = transferCoins;
            $scope.refreshTargets = refreshTargets;
            $scope.init = init;

            $scope.getTargetName = function(target){
                if (!target.selected){
                    return target.placeholder;
                }
                let name = 'Target';
                if (target.selected.local && target.selected.local.email){
                    name = target.selected.local.email;
                }else if(target.selected.facebook && target.selected.facebook.email){
                    name = target.selected.facebook.email;
                }else if(target.selected.google && target.selected.google.email){
                    name = target.selected.google.email;
                }else if(target.selected.twitter && target.selected.twitter.email){
                    name = target.selected.twitter.email;
                }
                return name;
            };

            $scope.setCurrentTargetType = function(currentTargetType){
                $scope.currentTargetType = currentTargetType
            };

            $scope.setCurrentTarget = function(currentTarget){
                $scope.currentTarget = currentTarget
            };

            function refreshTargets(query){
                if (!query){
                    return;
                }
                let filter = {};
                let select = {};
                if ($scope.currentTargetType === 'user'){
                    filter = {
                        '$or':[
                            {'local.email': query},
                            {'facebook.email': query},
                            {'google.email': query},
                            {'twitter.email': query}
                        ]
                    };

                    select = {
                     'local.email': 1,
                     'facebook.email': 1,
                     'google.email': 1,
                     'twitter.email': 1
                    }
                }else{
                    filter = {
                        '$or':[
                            {'name': query},
                            {'information': query}
                        ]
                    }
                }
                $common.$dataService.emit('find/regex', {
                    model: $scope.currentTargetType,
                    query: filter,
                    select: select,
                    skip: 0,
                    limit: 50
                })
                    .then(function(res){
                        if (res.isValid){
                            $scope.targets = res.data;
                            if(!$scope.$$phase) {
                                $scope.$apply();
                            }
                        }
                    })
                    .catch(function(err){
                        console.log("ERROR", err);
                    })
            }

            function transferCoins(){
                swal({
                    title: 'Wanna transfer '+$scope.quantityCoins+' City Coins?',
                    text: "You are about to Transfer " + $scope.quantityCoins+ ' City Coins' ,
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, I Want to Transfer'
                }).then(function () {
                    swal(
                        'Great',
                        'Transfered ' + $scope.quantityCoins + ' Coins',
                        'success'
                    )
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