import { getTemplate } from 'templates';
export function upload() {

    getTemplate('upload')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);
        });

}