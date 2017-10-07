import { home } from 'homeController';
import { gallery } from 'galleryController';
import { earthquakes } from 'earthquakesController';
import { weather } from 'weatherController';
import { initial } from 'initialController';
import { upload } from 'uploadController';

(function routing() {

    let router = new Navigo(null, true);
        router.on('/', initial)
        .on('/home', home)
        .on('/gallery', gallery)
        .on('/earthquakes', earthquakes)
        .on('/weather', weather)
        .on('/upload', upload)        
        .resolve();
}()); 
