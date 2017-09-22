let request = (url, type, body, headers) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            type,
            data: body,
            headers,
            contentType: 'application/json',
            success(response) {
                resolve(response);
            },
            error(error) {
                reject(error);
            }
        });
    });
};

let requester = {

    get(url, headers) {
        return request(url, 'GET', {}, headers);
    },

    post(url, body, headers) {
        return request(url, 'POST', body, headers);
    },

    put(url, body, headers) {
        return request(url, 'PUT', body, headers);
    },

    del(url, headers) {
        return request(url, 'DELETE', {}, headers);
    }
}

export {
    requester
};