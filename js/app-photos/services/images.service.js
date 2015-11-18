let ImageService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/images';

  this.getAllImages = getAllImages;
  this.addImage = addImage;

  function Image (imgObj) {
    this.image = imgObj.image;
    this.title = imgObj.title;
    this.description = imgObj.description;
  }

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (imgObj) {
    let img = new Image(imgObj);
    return $http.post(url, img, PARSE.CONFIG);
  }
  

};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;