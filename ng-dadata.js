/* global angular, $ */
;(function () {
  'use strict';
  angular
    .module('dadata', [])
    .directive('dadata', [function () {
      function link (scope, element) {
        $(element).suggestions({
          token: '<your-api-key>',
          type: scope.type.toUpperCase(),
          onSelect: function(suggestion) {
            scope.data = suggestion.data;
            scope.$apply();
          }
        });
      }
      return {
        restrict: 'A',
        link: link,
        scope: {
          type: '@ddtType',
          data: '=ddtModel'
        }
      };
    }]);
})();
