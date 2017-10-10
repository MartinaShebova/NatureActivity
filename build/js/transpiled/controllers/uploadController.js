'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.upload = upload;

var _templates = require('templates');

var _requester = require('requester');

var _UploadImgUrlModel = require('UploadImgUrlModel');

function upload() {

    (0, _templates.getTemplate)('upload').then(function (templateFunc) {
        //Render template

        var html = templateFunc();

        $('#dynamic-container').html(html);

        $("#upload-wrapper").css("background-image", "url('/static/images/main-background.png')");
    });

    $("body").on('click', ".upload-btn", function () {

        var userImgUrl = $("#user-img-url").val(),
            isValid = void 0;

        try {
            isValid = new _UploadImgUrlModel.UploadImgUrlModel(userImgUrl);
        } catch (Error) {
            return;
        }

        _requester.requester.post('/api/postMediaFile', { userImgUrl: userImgUrl }, {}).then(function () {
            toastr.success('Url successfully uploaded');
        }, function (error) {
            toastr.warning('Attention: ' + error);
        });
    });
}