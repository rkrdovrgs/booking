import config from '../config.base';

export class ProsService {
    searchPros(searchTerm) {
        var query = { searchTerm },
            queryString = Object.keys(query)
                .map(p => `${p}=${encodeURIComponent(query[p])}`)
                .join('&');

        return fetch(`${config.baseApiUrl}api/pros?${queryString}`)
            .then(response => response.json());
    }

    getProByFriendlyId(proFriendlyId) {
        return fetch(`${config.baseApiUrl}api/pros/${proFriendlyId}`)
            .then(response => response.json());
    }

    confirmBooking(proFriendlyId, fromUnix, contact) {
        return fetch(`${config.baseApiUrl}api/pros/${proFriendlyId}/book`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fromUnix,
                contact
            })
        }).then(response => response.json());
    }

    getBookingConfirmation(bookingId) {
        return fetch(`${config.baseApiUrl}api/booking/${bookingId}`)
            .then(response => response.json());
    }

}