'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.earthquakes = earthquakes;

var _templates = require('templates');

var _requester = require('requester');

function earthquakes() {

            Promise.all([(0, _templates.getTemplate)('earthquakes'), _requester.requester.get('/api/getEarthquakes', {})]).then(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            templateFunction = _ref2[0],
                            data = _ref2[1];

                        var templateWithData = templateFunction(data);

                        $('#dynamic-container').html(templateWithData);

                        $(".common-template-wrapper").css("background-image", "url('/static/images/main-background.png')");
            }, function (error) {
                        console.log(error);
            });
}