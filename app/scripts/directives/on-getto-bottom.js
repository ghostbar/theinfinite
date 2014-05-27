'use strict';

angular.module('theinfiniteApp')
  .directive('onGettoBottom', function () {
    return function postLink(scope, element, attrs) {
      var theE = element[0];

      element.bind('scroll', function () {
        if (theE.scrollTop + theE.offsetHeight >= theE.scrollHeight) {
          scope.$apply(attrs.onGettoBottom);
        }
      });
    };
  });
