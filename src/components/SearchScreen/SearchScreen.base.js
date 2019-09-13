import React, { Component } from 'react';
import { ProsService } from '../../dataservices/pros';

class SearchScreenBase extends Component {
    state = {
        pros: []
    }

    constructor(...args) {
        super(...args);
        this.prosService = new ProsService();
    }

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch(searchTerm = "") {
        this.prosService.searchPros(searchTerm)
            .then(data => {
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