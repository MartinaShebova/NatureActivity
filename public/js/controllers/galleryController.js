import { getTemplate } from 'templates';
export function gallery() {

    getTemplate('gallery')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}