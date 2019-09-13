import React from 'react';
import BookingConfirmedScreenBase from './BookingConfirmedScreen.base';
import { Link } from 'react-router-dom';
import { appStyles } from '../../../App.styles.dom';

class BookingConfirmedScreen extends BookingConfirmedScreenBase {
    proFriendlyId = this.props.match.params.proFriendlyId;
    bookingId = this.props.match.params.bookingId;

    render() {
        if (!this.state.booking || !this.state.pro) {
            return <div />
        }

        return (
            <div>
                <h2>Thanks {this.state.booking.contact.fullName}!</h2>
                <h1>You are confirmed at {this.state.pro.name}</h1>
                <address>{this.state.pro.address}</address>
                <h3>{this.state.fromDisplay}</h3>
                <p>
                    Your confirmation number is {this.state.booking._id}
                </p>
                <Link to="/">Back to search</Link>
            </div>
        );
    }
}

export default BookingConfirmedScreen;
