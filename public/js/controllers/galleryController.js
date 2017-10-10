import { getTemplate } from 'templates';
import { requester } from 'requester';

export function gallery() {

    Promise.all([getTemplate('gallery'), requester.get('/api/getMediaFile', {})])
        .then(([templateFunction, data]) => {
    
        let templateWithData = templateFunction(data);

        $('#dynamic-container').html(templateWithData);

        $("#gallery-wrapper").css("background-image", "url('/static/images/main-background.png')");
        

        }, (error) => {
            console.log(error);
        });

}