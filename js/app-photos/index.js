import angular from 'angular';
import '../app-core/index';

// Controllers
import AddController from './controllers/add.controller';

// Services
import ImageService from './services/images.service';

// Directives
import addItem from './directives/add.directive';

angular
  .module('app.photos', ['app.core'])
  .controller('AddController', AddController)
  .service('ImageService', ImageService)
  .directive('addItem', addItem)
  ;