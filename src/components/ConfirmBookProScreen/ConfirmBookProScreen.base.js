import React, { Component } from 'react';
import { ProsService } from '../../dataservices/pros';
import moment from "moment";

class ConfirmBookProScreen extends Component {
    state = {
        contact: {
            fullName: "",
            phone: ""
        }
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

    confirmBooking(event) {
        event.preventDefault();
        this.prosService.confirmBooking(this.proFriendlyId, this.fromUnix, this.state.contact)
            .then(booking => {
                this.navigateToSuccessBookingScreen(booking);
            });
    }

    updateContactInfo(contact) {
        this.setState({
            contact: {
                ...this.state.contact,
                ...contact
            }
        });
    }

}

export default ConfirmBookProScreen;
