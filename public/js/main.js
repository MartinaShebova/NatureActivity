import { home } from 'homeController';
(function routing() {

    let router = new Navigo(null, true);
        router.on('/', () => {
            console.log(4);
        })
        .on('/home', home)
        .resolve();
}()); 
