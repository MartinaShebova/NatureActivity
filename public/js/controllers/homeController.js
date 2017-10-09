import { getTemplate } from 'templates';
import { requester } from 'requester';

export function home() {

    Promise.all([getTemplate('home'), requester.get('/api/getMediaFile', {})])
        .then(([templateFunction, data]) => {
        
        let sliceToTen = data.slice(0, 10);
        
        let templateWithData = templateFunction(sliceToTen);

        $('#dynamic-container').html(templateWithData);

        }, (error) => {
            console.log(error);
        });
}
