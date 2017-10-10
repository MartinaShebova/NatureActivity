'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.weather = weather;

var _templates = require('templates');

var _requester = require('requester');

function weather() {

    var apiUrl = 'https://api.apixu.com/v1/forecast.json?key=c2878ace8bde4c918d6134557170910&q=',
        cities = {
        Sofia: 'Sofia',
        London: 'London',
        Paris: 'Paris',
        Madrid: 'Madrid',
        Rome: 'Rome'
    },
        city = void 0;

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

    Promise.all([(0, _templates.getTemplate)('weather'), _requester.requester.get(apiUrl + city, {}), _requester.requester.get('/api/getComments/' + city, {})]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 3),
            templateFunction = _ref2[0],
            data = _ref2[1],
            data2 = _ref2[2];

        data.comments = data2;

        var templateWithData = templateFunction(data);

        $('#dynamic-container').html(templateWithData);

        $(".common-template-wrapper").css("background-image", "url('/static/images/main-background.png')");
    }, function (error) {
        console.log(error);
    });
}

$("body").on('click', "#add-comment-btn", function () {

    var username = $("#username").val(),
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

    _requester.requester.post('/api/postWeatherComment', userInfoObj, {}).then(function () {
        toastr.success('Comment Send Successfully');
        $("#username").val('');
        $('#comment-area').val('');
    }, function (error) {
        toastr.warning('Attention: ' + error);
    });
});