import { requester } from "requester";
import { getTemplate } from 'templates';

export function pagination(target) {
        
        const numberOfPageElements = 3;
        let totalElements = 0;

        let pagerValue = target.attr('value');
        let offsetValue;

        if (pagerValue === '1') {
            offsetValue = 0;
        } else {
            offsetValue = (pagerValue - 1) * numberOfPageElements;
        }

        let url = `http://dev.denched.com/api/v1/learning/webdev/customer/search`;
        let data = JSON.stringify({
            globalSearch: "",
            offset: offsetValue,
            limit: numberOfPageElements,
            sortBy: null,
            sortOrder: null
        });

        Promise.all([getTemplate('home'), requester.post(url, data)])
            .then(([templateFunc, dataHolder]) => {

                let elementsReceived = parseInt(dataHolder.totalElements);
                    totalElements += elementsReceived;

                let numOfpages = totalElements / numberOfPageElements;

                if (numOfpages <= 1) {
                    numOfpages = 1;
                } else if (totalElements % numberOfPageElements === 0) {
                    numOfpages = totalElements / numberOfPageElements;
                } else if (totalElements % numberOfPageElements !== 0) {
                    numOfpages = Math.floor(parseInt(totalElements / numberOfPageElements)) + 1;
                }

                let pageCount = {
                    numOfpages: numOfpages
                }

                /*
                  Unite the object coming from Promise with additional property object for number of pages. 
                  This is used to dynamically add new page buttons.
                */
                let commonObjectData = $.extend({}, dataHolder, pageCount);

                let receivedData = templateFunc(commonObjectData);

                $('#dynamic-container').html(receivedData);

            }), (reject) => {
                console.log(reject);
            };
}