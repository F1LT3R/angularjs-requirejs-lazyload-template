define(['app', 'app-config'], function (app) {

  app.controller('AppMainCtrl', ['$scope', 'appconfig',
  function ($scope, appconfig) {
      $scope.title = appconfig.title;
  }]);

});