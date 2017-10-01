/* globals toastr */

export function validateUserData(email, firstName, lastName) {

    let hasError = false;

    let validEmailPattern = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;

    if ((!email || !firstName || !lastName)) {
        toastr.error('Моля, попълнете задължителните полета обозначени с *');
        hasError = true;
        return hasError;
    }

    if (!email.match(validEmailPattern)) {
        toastr.error("Моля, въведете валиден e-mail адрес");
        hasError = true;
        return hasError;
    }

    return hasError;
}