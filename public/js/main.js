import { home } from 'homeController';
import { gallery } from 'galleryController';
(function routing() {

    let router = new Navigo(null, true);
        router.on('/', () => {
            console.log(4);
        })
        .on('/home', home)
        .on('/gallery', gallery)
        .resolve();
}()); 
