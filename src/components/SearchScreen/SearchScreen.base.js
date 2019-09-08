import React, { Component } from 'react';
import config from '../../config.base';

class SearchScreenBase extends Component {
    state = {
        articles: []
    }

    handleSearch(searchTerm) {
        var query = { searchTerm },
            queryString = Object.keys(query)
                .map(p => `${p}=${encodeURIComponent(query[p])}`)
                .join('&');
        fetch(`${config.baseApiUrl}api/articles?${queryString}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    articles: data
                });
            });
    }
}

export const styles = {
    container: {
        flex: 1
    }
}

export default SearchScreenBase;