'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var request = function request(url, type, body, headers) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: type,
            data: body,
            headers: headers,
            success: function success(response) {
                resolve(response);
            },
            error: function error(_error) {
                reject(_error);
            }
        });
    });
};

var requester = {
    get: function get(url, headers) {
        return request(url, 'GET', {}, headers);
    },
    post: function post(url, body, headers) {
        return request(url, 'POST', body, headers);
    },
    put: function put(url, body, headers) {
        return request(url, 'PUT', body, headers);
    },
    del: function del(url, headers) {
        return request(url, 'DELETE', {}, headers);
    }
};

exports.requester = requester;