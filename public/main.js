/* globals Navigo */


(function routing() {

    let router = new Navigo(null, true);
        router.on('/', () => {
            console.log(4);
        })
        .resolve();
}());