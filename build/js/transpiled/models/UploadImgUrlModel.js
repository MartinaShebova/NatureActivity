'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UploadImgUrlModel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Validator = require('Validator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UploadImgUrlModel = function () {
    function UploadImgUrlModel(imageUrl) {
        _classCallCheck(this, UploadImgUrlModel);

        this.imageUrl = imageUrl;
    }

    _createClass(UploadImgUrlModel, [{
        key: 'imageUrl',
        get: function get() {
            return this._imageUrl;
        },
        set: function set(filteredImgUrl) {

            _Validator.Validator.validateImageUrl(filteredImgUrl);
            this._imageUrl = filteredImgUrl;
        }
    }]);

    return UploadImgUrlModel;
}();

exports.UploadImgUrlModel = UploadImgUrlModel;