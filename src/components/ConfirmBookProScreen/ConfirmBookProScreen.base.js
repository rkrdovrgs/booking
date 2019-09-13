import React, { Component } from 'react';
import { ProsService } from '../../dataservices/pros';
import moment from "moment";

class ConfirmBookProScreen extends Component {
    state = {
        contact: {}
    };

    constructor(...args) {
        super(...args);
        this.prosService = new ProsService();
    }

    componentDidMount() {
        this.prosService.getProByFriendlyId(this.proFriendlyId)
            .then(data => {
                this.setState({
                    pro: data,
                    fromDisplay: moment.unix(this.fromUnix).format("dddd, MMMM Do YYYY, h:mm a")
                });
            });
    }

}

export default ConfirmBookProScreen;
