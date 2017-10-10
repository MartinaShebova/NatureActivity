import { getTemplate } from 'templates';
import { requester } from 'requester';

export function home() {

    Promise.all([getTemplate('home'), requester.get('/api/getMediaFile', {})])
        .then(([templateFunction, data]) => {

        let sliceToTen = data.slice(0, 10);
        
        let templateWithData = templateFunction(sliceToTen);

        $('#dynamic-container').html(templateWithData);

        $("#features").css("background-image", "url('/static/images/main-background.png')");
        $("#info").css("background-image", "url('/static/images/quote-box.png')");
        

        }, (error) => {
            console.log(error);
        });
}
