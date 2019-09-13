import React, { Component } from 'react';
import { ProsService } from '../../dataservices/pros';
import moment from "moment";

class BookingConfirmedScreenBase extends Component {
    state = {};

    constructor(...args) {
        super(...args);
        this.prosService = new ProsService();
    }

    componentDidMount() {
        Promise.all([
            this.prosService.getProByFriendlyId(this.proFriendlyId),
            this.prosService.getBookingConfirmation(this.bookingId)
        ]).then((data) => {
            this.setState({
                pro: data[0],
                booking: data[1],
                fromDisplay: moment.unix(data[1].fromUnix).format("dddd, MMMM Do YYYY, h:mm a")
            });
        });
    }
}

export default BookingConfirmedScreenBase;
