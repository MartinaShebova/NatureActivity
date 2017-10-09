import { getTemplate } from 'templates';
import { requester } from 'requester';

export function gallery() {

    Promise.all([getTemplate('gallery'), requester.get('/api/getMediaFile', {})])
        .then(([templateFunction, data]) => {
        
        let templateWithData = templateFunction(data);

        $('#dynamic-container').html(templateWithData);

        }, (error) => {
            console.log(error);
        });

}