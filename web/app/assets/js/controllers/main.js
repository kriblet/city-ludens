app.controller('MainController',
  ['$scope', '$animate', 'localStorageService', 'todoService', '$alert', '$timeout', '$common',
  function($scope, $animate, localStorageService, todoService, $alert, $timeout, $common){

  if (typeof(browser_old) == "undefined"){
    initRipplesWithArrive();

    $(document).arrive('.navbar-toggle', function() {
      $(this).sideNav({menuWidth: 260, closeOnClick: true});
    });
  }

  $scope.theme_colors = [
    'pink','red','purple','indigo','blue',
    'light-blue','cyan','teal','green','light-green',
    'lime','yellow','amber','orange','deep-orange'
  ];

  // Add todoService to scope
  service = new todoService($scope);
  $scope.todosCount = service.count();
  $scope.$on('todos:count', function(event, count) {
    $scope.todosCount = count;
    element = angular.element('#todosCount');

    if ( !element.hasClass('animated') ){
      $animate.addClass(element, 'animated bounce', function() {
        $animate.removeClass(element, 'animated bounce');
      });
    }
  });

  $scope.fillinContent = function(){
    $scope.htmlContent = 'content content';
  };

  // theme changing
  $scope.changeColorTheme = function(cls){
    $scope.theme.color = cls;
  };

  $scope.changeTemplateTheme = function(cls){
    $scope.theme.template = cls;
  };

  if ( !localStorageService.get('theme') ) {
    theme = {
      color: 'theme-pink',
      template: 'theme-template-dark'
    };
    localStorageService.set('theme', theme);
  }
  localStorageService.bind($scope, 'theme');

  var introductionAlert = $alert({
    title: 'Welcome to Materialism',
    content: 'Stay a while and listen',
    placement: 'top',
    type: 'theme',
    show: false,
    template: '/tpl/partials/alert-introduction',
    animation: 'mat-grow-top-right'
  });

  if(!localStorageService.get('alert-introduction')) {
    $timeout(function(){
      $scope.showIntroduction();
      localStorageService.set('alert-introduction', 1);
    }, 1750);
  }

  $scope.showIntroduction = function(){
    introductionAlert.show();
  };

      $common.$dataService.emit('user/data')
          .then(function(res){
            console.log('USER DATA', res);
              if (res.isValid){
                  $scope.user = res.data;
                  $common.$rootScope.user = $scope.user;

                  $scope.user.coinCount = parseInt($scope.user.coinCount);
                  if(!$scope.$$phase) {
                      $scope.$apply();
                  }
              }
          })
          .catch(function(err){
              console.error(err);
          });


      $scope.$on("bank/recharge", function(sender, args){
        $scope.user.coinCount += parseInt(args);
        if(!$scope.$$phase) {
            $scope.$apply();
        }
      });
}]);
