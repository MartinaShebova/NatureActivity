'use strict';

var _homeController = require('homeController');

var _galleryController = require('galleryController');

var _earthquakesController = require('earthquakesController');

var _weatherController = require('weatherController');

var _uploadController = require('uploadController');

var _singleController = require('singleController');

(function routing() {

    var router = new Navigo(null, true);
    router.on('/', _earthquakesController.earthquakes).on('/home', _homeController.home).on('/gallery', _galleryController.gallery).on('/earthquakes', _earthquakesController.earthquakes).on('/weather/:id', _weatherController.weather).on('/upload', _uploadController.upload).on('/single/:id', _singleController.single)
    //TO DO single has to be with id     
    .resolve();
})();