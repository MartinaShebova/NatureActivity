'use strict';

/*globals $, typeahead, toastr, getUserName */
$('.addToFavorites').on('click', function (e) {
    var target = $(e.target);
    console.log(target);

    if (target.prop('nodeName') === 'SPAN') {
        target = target.parent();
    }

    var prodID = target.attr('prodID');

    console.log(target);
    if (!prodID) {
        toastr.error('Неуспешно добавяне, моля опитайте отново');
        return;
    }

    $.ajax({
        type: "POST",
        url: "/api/favorites",
        data: { prodID: prodID },
        success: function success(data) {
            if (data.message === 'already added') {
                toastr.info('Вече сте добавили този продукт в любими');
            } else {
                toastr.success('Успешно добавихте продукта в любими');
            }
        },
        error: function error(_error) {
            toastr.error('Неуспешно добавяне, моля опитайте отново');
        }
    });
});

$('.autocompleteInput').on('keyup', function () {
    var currentValue = $(".autocompleteInput").val();

    if (!currentValue) {
        return;
    }

    $.ajax({
        type: "GET",
        url: "/api/autocomplete",
        data: { name: currentValue },
        success: function success(data) {
            $('#autocomplete').autocomplete({ source: data });
            // .typeahead({ source: data });
        },
        error: function error(_error2) {
            toastr.warning('Моля опитайте отново');
        }
    });
});

$('#sendSubscribeEmail').on('click', function () {
    var subscriberEmail = $("#subscriptionEmail").val(),
        errorMessages = {
        existingEmail: 'E-mail адресът, който сте въвели вече съществува! Моля, опитайте отново'
    },
        hasError = false;

    function validate(email) {
        var pattern = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
        if (!email.match(pattern)) {
            toastr.error("Моля, въведете валиден e-mail адрес");
            $('#subscriptionEmail').val('');
            hasError = true;
        }
    }

    validate(subscriberEmail);

    if (hasError) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "/api/subscribe",
        data: { subscribeEmail: subscriberEmail },
        success: function success(data) {
            toastr.success("Успешно се регистрирахте за нашия бюлетин");
            $('#subscriptionEmail').val('');
        },
        error: function error(_error3) {
            if (_error3.responseJSON === 'email-exists') {
                toastr.error(errorMessages.existingEmail);
            }
        }
    });
});

// to do more work here
$('#contactFormSend').on('click', function () {

    var names = $('#cUserNames').val();
    var email = $('#cUserEmail').val();
    var text = $('#cUserText').val();

    var hasError = validate(names, email, text);

    if (hasError) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "/api/contactUs",
        data: {
            contactUserNames: names,
            contactUserEmail: email,
            contactUserText: text
        },
        success: function success(data) {
            toastr.success('Очаквайте отговор на посочения имейл адрес');
            $('#cUserNames').val('');
            $('#cUserEmail').val('');
            $('#cUserText').val('');
        },
        error: function error(_error4) {
            var len = _error4.responseJSON.length;

            for (var i = 0; i < len; i += 1) {
                if (_error4.responseJSON[i] === 'names') {
                    toastr.error('Моля, въведете валидни имена');
                } else if (_error4.responseJSON[i] === 'email') {
                    toastr.error('Моля, въведете валиден e-mail');
                } else if (_error4.responseJSON[i] === 'text') {
                    toastr.error('Използвали сте невалидни символи в текстовото поле');
                }
            }
        }
    });
});

$('body').on('click', '.delete_product', function (e) {
    var productId = $(e.target).parent().parent().find('.idCell').attr('value');

    $.ajax({
        type: "POST",
        url: "/api/delete-product",
        data: { _id: productId },
        success: function success(data) {
            $(location).attr('href', '/products/delete');
        },
        error: function error(_error5) {
            toastr.error(JSON.stringify(_error5));
        }
    });
});

function validate(names, email, text) {
    var namesPattern = /^[a-zA-Z]+/;
    var emailPattern = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    var textPattern = /^[a-zA-Z0-9 ]+$/;
    var hasError = false;

    if (!names && !email && !text) {
        toastr.error('Формата за връзка с нас е празна, моля попълнете всички полета');
        hasError = true;
        return hasError;
    }
    if (!names.match(namesPattern)) {
        toastr.error('Моля, въведете валидни имена');
        $('#cUserNames').val('');
        hasError = true;
        return hasError;
    }

    if (!email.match(emailPattern)) {
        toastr.error('Моля, въведете валиден e-mail адрес');
        $('#cUserEmail').val('');
        hasError = true;
        return hasError;
    }

    if (!text.match(textPattern)) {
        toastr.error('Текстовото поле съдържа непозволени символи или е празно');
        $('#cUserText').val('');
        hasError = true;
        return hasError;
    }
    return hasError;
}

$('#checkout-button').on('click', function () {
    var prodInfo = [];
    var productRows = $('#checkoutBody tr');

    productRows.each(function (index, rowElement) {
        var count = $(rowElement).find('.quantities').html();
        var id = $(rowElement).find('.invert.productName').attr('value');
        prodInfo.push({
            _id: id,
            count: count
        });
    });

    $.ajax({
        type: "POST",
        url: "/api/checkout",
        data: {
            sendInfo: prodInfo
        }
    }).done(function (data) {
        toastr.success('Успешно изпратена поръчка, можете да видите вашите поръчки в профила си!');

        // getUserName is a globalFunction that comes form checkout.js
        var username = getUserName();
        var storageKey = 'cart-' + username;
        localStorage.removeItem(storageKey);
        setTimeout(function () {
            document.location.reload(true);
        }, 2000);
    }).fail(function (err) {
        console.log(err);
        toastr.error('Възникна грешка по време на вашата заявка!');
    });
});

$('body').on('click', '.checkout-btn', function (e) {
    var tableCheckout = $('#checkoutBody');
    var rows = tableCheckout.find('tr');
    if (tableCheckout.html().indexOf('Вашата количка е празна') !== -1 || rows.length === 0) {
        toastr.warning('Моля добавете продукти в количката');
        e.preventDefault();
        e.stopPropagation();
    }
});

$('.set-admin').on('click', function (e) {

    var userId = $(e.target).parent().parent().find('.userIdCell').attr('value');

    $.ajax({
        type: "POST",
        url: "/api/create-admin",
        data: {
            userId: userId
        },
        success: function success(data) {
            $(location).attr('href', '/userslist');
        },
        error: function error(_error6) {
            toastr.error(_error6);
        }
    });
});