/* globals Navigo */

import { home } from 'homeController';

(function routing() {

    let router = new Navigo(null, true);
        router.on('/', home)
              .resolve();
}());