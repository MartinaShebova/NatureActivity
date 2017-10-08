import { home } from 'homeController';
import { gallery } from 'galleryController';
import { earthquakes } from 'earthquakesController';
import { weather } from 'weatherController';
import { initial } from 'initialController';
import { upload } from 'uploadController';
import { single } from 'singleController';

(function routing() {

    let router = new Navigo(null, true);
        router.on('/', initial)
        .on('/home', home)
        .on('/gallery', gallery)
        .on('/earthquakes', earthquakes)
        .on('/weather', weather)
        .on('/upload', upload)
        .on('/single', single)   
        //TO DO single has to be with id     
        .resolve();
}()); 
