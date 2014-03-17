'use strict';

var fs = require('fs');
var _ = require('underscore');
var random = require('./lib/random')

angular.module('packageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.home = fs.readdirSync(process.env.HOME);

    $scope.shuffle = _.shuffle([1, 2, 3, 4, 5, 6]);

    $scope.rand = random();
  });
