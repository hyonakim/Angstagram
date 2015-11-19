let AddController = function(ImageService, $state) {
  
  let vm = this;

  vm.addImage = addImage;

  function addImage(imgObj) {
    ImageService.addImage(imgObj).then ( (res) => {
      console.log(res);
    });
    $state.go('root.home');
  }
  

};

AddController.$inject = ['ImageService', '$state'];

export default AddController;