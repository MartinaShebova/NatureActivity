import { getTemplate } from 'templates';
import { requester } from 'requester';

export function earthquakes() {

    Promise.all([getTemplate('earthquakes'), requester.get('/api/getEarthquakes', {})])
        .then(([templateFunction, data]) => {
            console.log(data);
            
            let templateWithData = templateFunction(data);

            $('#dynamic-container').html(templateWithData);

        }, (error) => {
            console.log(error);
        });

}