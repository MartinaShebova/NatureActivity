import { getTemplate } from 'templates';
import { requester } from 'requester';
import { UploadImgUrlModel } from 'UploadImgUrlModel';
export function upload() {

    getTemplate('upload')
        .then((templateFunc) => {
            //Render template
            
            let html = templateFunc();

            $('#dynamic-container').html(html);

            $("#upload-wrapper").css("background-image", "url('/static/images/main-background.png')");
            
        });

    $("body").on('click', ".upload-btn", () => {

        let userImgUrl = $("#user-img-url").val(),
            isValid;

        try{
            isValid = new UploadImgUrlModel(userImgUrl);            
        }catch(Error){
            return;
        }

        requester.post('/api/postMediaFile',  { userImgUrl: userImgUrl }, {})
            .then(() => {
                toastr.success('Url successfully uploaded');
            }, (error) =>{
                toastr.warning('Attention: ' + error);
            });

    });
}