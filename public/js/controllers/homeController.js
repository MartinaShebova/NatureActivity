import { getTemplate } from 'templates';
export function home() {

    getTemplate('home')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}