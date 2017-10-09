import { getTemplate } from 'templates';
import { requester } from 'requester';

export function single() {

    let currentEvent = window.location.href.slice(31);
    
    Promise.all([getTemplate('single'), requester.get(`/api/getSingleEvent/${currentEvent}`, {})])
    .then(([templateFunction, data]) => {
        
        let templateWithData = templateFunction(data[0]);

        $('#dynamic-container').html(templateWithData);

    }, (error) => {
        console.log(error);
    });

}