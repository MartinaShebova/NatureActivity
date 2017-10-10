'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.single = single;

var _templates = require('templates');

var _requester = require('requester');

function single() {

    var currentEvent = window.location.href.slice(31);

    Promise.all([(0, _templates.getTemplate)('single'), _requester.requester.get('/api/getSingleEvent/' + currentEvent, {}), _requester.requester.get('/api/getSingleEventComments/' + currentEvent, {})]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            templateFunction = _ref2[0],
            eventData = _ref2[1],
            commentsData = _ref2[2];

        eventData.commentsData = commentsData;

        var templateWithData = templateFunction(eventData);

        $('#dynamic-container').html(templateWithData);

        $(".common-template-wrapper").css("background-image", "url('/static/images/main-background.png')");
    }, function (error) {
        console.log(error);
    });
}

$("body").on('click', "#add-event-comment-btn", function () {

    var currentEvent = window.location.href.slice(31),
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

    _requester.requester.post('/api/postEventComment', userInfoObj, {}).then(function () {
        toastr.success('Comment Send Successfully');
        $("#event-username").val('');
        $('#event-comment-area').val('');
    }, function (error) {
        toastr.warning('Attention: ' + error);
    });
});