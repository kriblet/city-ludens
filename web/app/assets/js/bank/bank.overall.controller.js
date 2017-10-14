'use strict';

((angular)=>{
    angular.module('bank.module')
        .controller('bankOverallController',['$scope', '$common', function($scope, $common){

            $scope.init = init;

            function init(){
                $common.$dataService.emit('user/overall')
                    .then(function(res){
                        console.log(res);
                        if (res.isValid){
                            $scope.overall = res.data;
                        }
                    })
                    .catch(function(err){
                        console.error(err);
                    })
            }
        }])
})(angular);