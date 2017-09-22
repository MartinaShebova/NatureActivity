/*globals System */

System.config({
    'transpiler': 'plugin-babel',
    map: {
        'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

        // External Libraries
        'jquery': '/libs/jquery/dist/jquery.min.js',
        'bootstrap-js': '/libs/bootstrap/dist/js/bootstrap.min.js',

        // App files
        'main': '/public/js/main.js',
        'requester': '/public/js/requester.js',
        'templates': '/public/js/templates.js',

        //Controllers
        'homeController': '/public/js/controllers/homeController.js',
        'createController': '/public/js/controllers/createController.js',
        'editController': '/public/js/controllers/editController.js',

        //Helpers
        'handlebarsForLoop': '/public/js/helpers/handlebarsForLoop.js',
        'validateUserData': '/public/js/helpers/validateUserData.js',
        'search': '/public/js/helpers/search.js',
        'sorting': '/public/js/helpers/sorting.js',
        'pagination': '/public/js/helpers/pagination.js',

        //Data interaction
        'createUser': '/public/js/data/createUser.js',
        'deleteUser': '/public/js/data/deleteUser.js',
        'editUserData': '/public/js/data/editUserData.js',

    }
});