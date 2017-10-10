'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTemplate = getTemplate;

var _requester = require('requester');

function getTemplate(templateName) {

    HandlebarsIntl.registerWith(Handlebars);

    return _requester.requester.get('/static/views/' + templateName + '.hbs').then(function (template) {

        var compileToHandlebars = Handlebars.compile(template);

        return Promise.resolve(compileToHandlebars);
    }, function (reject) {
        console.log(reject);
    });
}