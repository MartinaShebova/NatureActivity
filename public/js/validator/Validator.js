class Validator {
    static validateImageUrl(url) {

        if (url.length <= 0) {
            toastr.warning('Please, fill the image url field');
            throw new Error();
        }

        let trimUrl = $.trim(url),
            pattern = '^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$';

        if (!trimUrl.match(pattern)) {
            toastr.warning('Please, provide a valid image url --> must end with .jpg, jpeg, png, gif or bmp');
            throw new Error();
        }
    }
}
    
export { Validator };