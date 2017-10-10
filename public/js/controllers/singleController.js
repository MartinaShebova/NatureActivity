import { getTemplate } from 'templates';
import { requester } from 'requester';

export function single() {

    let currentEvent = window.location.href.slice(31);
    
    Promise.all([getTemplate('single'), requester.get(`/api/getSingleEvent/${currentEvent}`, {}), requester.get(`/api/getSingleEventComments/${currentEvent}`, {})])
        .then(([templateFunction, eventData, commentsData]) => {
            
            eventData.commentsData = commentsData;

            let templateWithData = templateFunction(eventData);

            $('#dynamic-container').html(templateWithData);

            $(".common-template-wrapper").css("background-image", "url('/static/images/main-background.png')");
            

        }, (error) => {
            console.log(error);
        });

}

$("body").on('click', "#add-event-comment-btn", () => {

        let currentEvent = window.location.href.slice(31),
            username = $("#event-username").val(),
            comment = $('#event-comment-area').val(),

            userInfoObj = {
                username: username,
                comment: comment,
                eventId: currentEvent
            };
        // isValid;
        // try {
        //     isValid = new UploadImgUrlModel(userImgUrl);
        // } catch (Error) {
        //     return;
        // }
    
        requester.post('/api/postEventComment', userInfoObj, {})
            .then(() => {
                toastr.success('Comment Send Successfully');
                $("#event-username").val('');
                $('#event-comment-area').val('');
            }, (error) => {
                toastr.warning('Attention: ' + error);
            });
    
    });