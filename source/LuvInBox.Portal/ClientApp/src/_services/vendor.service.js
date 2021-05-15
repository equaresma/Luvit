import moment from 'moment';

const url = 'api/Vendors';

export const vendorService = {
    create
};

async function create(VendorDTO) {
    if (!moment(VendorDTO.FoundedIn, moment.ISO_8601).isValid())
        VendorDTO.FoundedIn = moment(VendorDTO.FoundedIn, "DD/MM/YYYY").toISOString();

     const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(VendorDTO)
     };

    return fetch(url, requestOptions)
         .then(handleResponse)
         .then(vendor => {
             return vendor;
         });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (Array.isArray(data.errors)) {
                return Promise.reject("Errors: " + data.errors.toString());
            } else if (typeof data.errors === 'object') {
                let txt = '';
                for (let x in data.errors) {
                    txt += data.errors[x];
                }
                return Promise.reject("Error: " + txt);
            }else {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        }
        return data;
    });
}
