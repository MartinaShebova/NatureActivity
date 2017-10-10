import { getTemplate } from 'templates';
import { requester } from 'requester';

export function earthquakes() {

    Promise.all([getTemplate('earthquakes'), requester.get('/api/getEarthquakes', {})])
        .then(([templateFunction, data]) => {

            
            let templateWithData = templateFunction(data);

            $('#dynamic-container').html(templateWithData);

            $(".common-template-wrapper").css("background-image", "url('/static/images/main-background.png')");
            
        }, (error) => {
            console.log(error);
        });

}