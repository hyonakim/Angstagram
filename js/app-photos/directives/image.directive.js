let hyonaImage = function(ImageService, $timeout) {
  
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      image: '='
    },
    template: `
      <div class='gallery'>
        <img ng-src='{{image.image}}' class='image'>
        <span class='hidden'><i class="fa fa-smile-o fa-5x"></i></span>
        <p><i class="fa fa-thumbs-up">{{image.counter}}</i></p>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        console.log('you liked it');
        element.find('span').removeClass('hidden').addClass('show');
        $timeout (function () {
          element.find('span').removeClass('show').addClass('hidden');
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





