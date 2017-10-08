import { getTemplate } from 'templates';
export function initial() {

    getTemplate('initial')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}