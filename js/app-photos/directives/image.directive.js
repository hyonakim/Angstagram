let hyonaImage = function(ImageService, $timeout) {
  
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      image: '='
    },
    template: `
      <section class='gallery'>
        <img ng-src='{{image.image}}'>
        <div class='hidden'><i class="fa fa-smile-o fa-5x"></i></div>
        <small><i class="fa fa-thumbs-up fa-3x"></i>:{{image.counter}}</small>
      </section>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        console.log('you liked it');
        element.find('div').removeClass('hidden').addClass('show');
        $timeout (function () {
          element.find('div').removeClass('show').addClass('hidden');
        }, 1000);
        ImageService.addLike(scope.image).then ( (res) => {
          console.log(res);
        });
      });
    }
  };
};

hyonaImage.$inject = ['ImageService', '$timeout'];

export default hyonaImage;





