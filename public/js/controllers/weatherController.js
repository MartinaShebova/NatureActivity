import { getTemplate } from 'templates';
import { requester } from 'requester';

export function weather() {

    let apiUrl = 'https://api.apixu.com/v1/forecast.json?key=c2878ace8bde4c918d6134557170910&q=',
        cities = {
            Sofia: 'Sofia',
            London: 'London',
            Paris: 'Paris',
            Madrid: 'Madrid',
            Rome: 'Rome'
        },
        city;

    if (window.location.href.indexOf('/weather/qwertyuiop1') !== -1) {
        city = cities.Sofia;
    } else if (window.location.href.indexOf('/weather/poiuytrewq2') !== -1) {
        city = cities.London;
    } else if (window.location.href.indexOf('/weather/asdfghj3') !== -1) {
        city = cities.Paris;
    } else if (window.location.href.indexOf('/weather/lkjhgf4') !== -1) {
        city = cities.Madrid;
    } else if (window.location.href.indexOf('/weather/iujyhgt5') !== -1) {
        city = cities.Rome;
    }

    Promise.all([getTemplate('weather'), requester.get(apiUrl + city, {}), requester.get(`/api/getComments/${city}`, {})])
        .then(([templateFunction, data, data2]) => {

            data.comments = data2;

            let templateWithData = templateFunction(data);

            $('#dynamic-container').html(templateWithData);

            $(".common-template-wrapper").css("background-image", "url('/static/images/main-background.png')");
            
        }, (error) => {
            console.log(error);
        });
}

$("body").on('click', "#add-comment-btn", () => {

    let username = $("#username").val(),
        comment = $('#comment-area').val(),
        eventId = $('#heading').attr('value'),
        userInfoObj = {
            username: username,
            comment: comment,
            eventId: eventId
        };
    // isValid;
    // try {
    //     isValid = new UploadImgUrlModel(userImgUrl);
    // } catch (Error) {
    //     return;
    // }

    requester.post('/api/postWeatherComment', userInfoObj, {})
        .then(() => {
            toastr.success('Comment Send Successfully');
            $("#username").val('');
            $('#comment-area').val('');
        }, (error) => {
            toastr.warning('Attention: ' + error);
        });

});