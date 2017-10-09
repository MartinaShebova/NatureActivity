import { Validator } from 'Validator';

class UploadImgUrlModel{

    constructor(imageUrl) {
        this.imageUrl = imageUrl;        
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(filteredImgUrl) {

        Validator.validateImageUrl(filteredImgUrl);        
        this._imageUrl = filteredImgUrl;
        
    }

}

export { UploadImgUrlModel };