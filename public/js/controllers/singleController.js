import { getTemplate } from 'templates';
export function single() {

    getTemplate('single')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}