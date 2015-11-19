let hyonaImage = function() {
  
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      image: '='
    },
    template: `
      <img src='{{image.image}}' ng-dblclick='count = count + 1' ng-init='count=0'>
      count: {{ count }}
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        count = count + 1;
      });
    }
  };

};

hyonaImage.$inject = [];

export default hyonaImage;