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

}