let HomeController = function($scope, ImageService) {
  
  let vm = this;

  vm.getAll = getAll();

  function getAll() {
    ImageService.getAllImages().then( (res) => {
      vm.allImages = res.data.results;
      console.log(vm.allImages);
    });
  }


};

HomeController.$inject = ['$scope', 'ImageService'];

export default HomeController;