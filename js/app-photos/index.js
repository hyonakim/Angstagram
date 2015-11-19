import angular from 'angular';
import '../app-core/index';

// Controllers
import AddController from './controllers/add.controller';

// Services
import ImageService from './services/images.service';

// Directives
import hyonaImage from './directives/image.directive';

angular
  .module('app.photos', ['app.core'])
  .controller('AddController', AddController)
  .service('ImageService', ImageService)
  .directive('hyonaImage', hyonaImage)
  ;