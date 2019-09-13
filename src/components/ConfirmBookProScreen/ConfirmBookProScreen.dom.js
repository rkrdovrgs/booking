import React from 'react';
import ConfirmBookProScreenBase from './ConfirmBookProScreen.base';
import { Link } from 'react-router-dom';
import { appStyles } from '../../../App.styles';

class ConfirmBookProScreen extends ConfirmBookProScreenBase {
    proFriendlyId = this.props.match.params.friendlyId;
    fromUnix = this.props.match.params.fromUnix;

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
                    <input style={appStyles.textBox} required type="text" value={this.state.contact.fullName} />
                    <br />

                    Phone:
                    <input style={appStyles.textBox} required type="text" value={this.state.contact.phone} />
                    <br />

                    <button type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

export default ConfirmBookProScreen;
