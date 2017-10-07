import { getTemplate } from 'templates';
export function weather() {

    getTemplate('weather')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}