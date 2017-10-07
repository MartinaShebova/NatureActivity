
System.config({
    'transpiler': 'plugin-babel',
    map: {
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files
        'main': '/static/js/main.js',
        'requester': '/static/js/requester.js',
        'templates': '/static/js/templates.js',

        //Controllers
        'homeController': '/static/js/controllers/homeController.js',
        'galleryController': '/static/js/controllers/galleryController.js',
        'earthquakesController': '/static/js/controllers/earthquakesController.js',
        'weatherController': '/static/js/controllers/weatherController.js',
        'initialController': '/static/js/controllers/initialController.js',
        
        
    }
});