import React, { Component } from 'react';
import config from '../../config.base';

class SearchScreenBase extends Component {
    state = {
        pros: []
    }

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch(searchTerm = "") {
        var query = { searchTerm },
            queryString = Object.keys(query)
                .map(p => `${p}=${encodeURIComponent(query[p])}`)
                .join('&');
        fetch(`${config.baseApiUrl}api/pros?${queryString}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    pros: data
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