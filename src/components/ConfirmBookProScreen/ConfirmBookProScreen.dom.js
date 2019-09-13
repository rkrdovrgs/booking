import React from 'react';
import ConfirmBookProScreenBase from './ConfirmBookProScreen.base';
import { Link } from 'react-router-dom';
import { appStyles } from '../../../App.styles.dom';

class ConfirmBookProScreen extends ConfirmBookProScreenBase {
    proFriendlyId = this.props.match.params.friendlyId;
    fromUnix = this.props.match.params.fromUnix;
    history = this.props.history;

    navigateToSuccessBookingScreen(booking) {
        this.history.push({ pathname: `/booking/${booking._id}/at/${booking.proFriendlyId}/confirmed` });
    }

    render() {
        if (!this.state.pro) {
            return <div />
        }

        return (
            <div>
                <h2>Confirm Appointment at {this.state.pro.name}</h2>
                <address>{this.state.pro.address}</address>
                <h3>{this.state.fromDisplay}</h3>
                <form>
                    Name:
                    <input style={appStyles.textInput} type="text" value={this.state.contact.fullName}
                        onChange={e => this.updateContactInfo({ fullName: e.target.value })} />
                    <br />

                    Phone:
                    <input style={appStyles.textInput} type="text" value={this.state.contact.phone}
                        onChange={e => this.updateContactInfo({ phone: e.target.value })} />
                    <br />

                    <button style={appStyles.submitButton} type="submit" onClick={e => this.confirmBooking(e)}>Confirm</button>
                </form>
            </div>
        );
    }
}

export default ConfirmBookProScreen;
