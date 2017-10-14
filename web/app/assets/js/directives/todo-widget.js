app.directive('todoWidget', ['todoService', function(todoService) {
  return {
    restrict: 'EA',
    templateUrl: '/tpl/directives/todo-widget',
    replace: true,
    link: function($scope, $element) {
      $scope.todoService = new todoService($scope);
    }
  };
}]);
