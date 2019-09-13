import React, { Component } from 'react';
import config from '../../config.base';

class BookProScreenBase extends Component {
    state = {};

    componentDidMount() {
        fetch(`${config.baseApiUrl}api/pros/${this.proFriendlyId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pro: data
                });
            });
    }
}

export default BookProScreenBase;
