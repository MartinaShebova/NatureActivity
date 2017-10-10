'use strict';

System.config({
        'transpiler': 'plugin-babel',
        map: {
                'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
                'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

                // App files
                'main': '/build/js/transpiled/main.js',
                'requester': '/build/js/transpiled/requester.js',
                'templates': '/build/js/transpiled/templates.js',

                //Controllers
                'homeController': '/build/js/transpiled/controllers/homeController.js',
                'galleryController': '/build/js/transpiled/controllers/galleryController.js',
                'earthquakesController': '/build/js/transpiled/controllers/earthquakesController.js',
                'weatherController': '/build/js/transpiled/controllers/weatherController.js',
                'uploadController': '/build/js/transpiled/controllers/uploadController.js',
                'singleController': '/build/js/transpiled/controllers/singleController.js',

                //Validator
                'Validator': '/build/js/transpiled/validator/Validator.js',

                //Models
                'UploadImgUrlModel': '/build/js/transpiled/models/UploadImgUrlModel.js'

                //API helpers

        }
});