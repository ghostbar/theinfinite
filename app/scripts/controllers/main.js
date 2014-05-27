'use strict';

angular.module('theinfiniteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.list = [];

    $scope.load = function (init, howMuch) {
      console.log('calling load');
      $scope.getFakeData(init, howMuch, function (err, data) {
        if (err) {
          return console.log(err);
        }

        $scope.list = $scope.list.concat(data);
      });
    };

    $scope.getFakeData = function (offset, limit, callback) {
      var data = [];
      for (var i=0; i<limit; i++) {
        var id = offset + i;
        data.push({
          id: id,
          name: 'Name ' + id,
          description: 'Description ' + id
        });
      }
      callback(null, data);
    };

    $scope.load(0, 20);

    $scope.reload = function () {
      $scope.load($scope.list.length - 1, 10);
    };
  });
