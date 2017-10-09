import { home } from 'homeController';
import { gallery } from 'galleryController';
import { earthquakes } from 'earthquakesController';
import { weather } from 'weatherController';
import { upload } from 'uploadController';
import { single } from 'singleController';

(function routing() {

    let router = new Navigo(null, true);
        router.on('/', earthquakes)
        .on('/home', home)
        .on('/gallery', gallery)
        .on('/earthquakes', earthquakes)
        .on('/weather/:id', weather)
        .on('/upload', upload)
        .on('/single/:id', single)   
        //TO DO single has to be with id     
        .resolve();
}()); 
