'use strict';

var fs = require('fs');

angular.module('packageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.home = fs.readdirSync(process.env.HOME);
  });
