'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
    function Validator() {
        _classCallCheck(this, Validator);
    }

    _createClass(Validator, null, [{
        key: 'validateImageUrl',
        value: function validateImageUrl(url) {

            if (url.length <= 0) {
                toastr.warning('Please, fill the image url field');
                throw new Error();
            }

            var trimUrl = $.trim(url),
                pattern = '^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$';

            if (!trimUrl.match(pattern)) {
                toastr.warning('Please, provide a valid image url --> must end with .jpg, jpeg, png, gif or bmp');
                throw new Error();
            }
        }
    }]);

    return Validator;
}();

exports.Validator = Validator;