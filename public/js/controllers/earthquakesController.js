import { getTemplate } from 'templates';
export function earthquakes() {

    getTemplate('earthquakes')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}