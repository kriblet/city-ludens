(function(angular){
    angular.module('common.module')
        .service('$common',
            [ '$rootScope', '$sce', '$timeout', '$interval', '$location', '$window', '$dataService',
                function($rootScope, $sce, $timeout, $interval, $location, $window, $dataService){

            return {
                $rootScope: $rootScope,
                $sce: $sce,
                $timeout: $timeout,
                $interval: $interval,
                $location: $location,
                $window: $window,
                $dataService: $dataService
            }

        }])
})(angular);