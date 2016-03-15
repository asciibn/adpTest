'use strict';

/**
 * @ngdoc function
 * @name adpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adpApp
 */
var adpApp  = angular.module('adpApp');
  adpApp.controller('MainCtrl', ['$scope','$http',function ($scope,$http) {


    $http.get('scripts/MOCK_DATA.json').success(function(data){
      $scope.jsonResults = data;
      //console.log( $scope.jsonResults[0].name);
    });
  }]);
