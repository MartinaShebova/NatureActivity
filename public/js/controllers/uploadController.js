import { getTemplate } from 'templates';
import { requester } from 'requester';
export function upload() {

    getTemplate('upload')
        .then((templateFunc) => {
            //Render template
            let html = templateFunc();

            $('#dynamic-container').html(html);


        });

    $("body").on('click', ".upload-btn", () => {

        let userImgUrl = $("#user-img-url").val();

        requester.post('/api/postMediaFile',  { userImgUrl: userImgUrl }, {})
            .then(() => {
                toastr.success('Url successfully uploaded');
            }, (error) =>{
                toastr.warning('Attention: ' + error);
            });

    });


}

// Promise.all([getTemplate('home'), data.getAds()])
// .then(([templateFunc, adsData]) => {


//     let getOnlyFourAds = adsData.slice(0, 4);

//     let adsInfoObject = templateFunc(getOnlyFourAds);

//     $('#dinamic-container').html(adsInfoObject);
//         $('.flexslider').flexslider({
//             animation: "slide"
//         });
// });