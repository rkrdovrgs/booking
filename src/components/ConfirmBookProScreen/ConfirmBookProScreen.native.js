import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ConfirmBookProScreenBase from './ConfirmBookProScreen.base';
import { appStyles } from '../../../App.styles.native';

class ConfirmBookProScreen extends ConfirmBookProScreenBase {
    proFriendlyId = this.props.navigation.state.params.friendlyId;
    fromUnix = this.props.navigation.state.params.fromUnix;

    navigateToSuccessBookingScreen(booking) {
        this.props.navigation.navigate('BookingConfirmedScreen', {
            friendlyId: booking.friendlyId,
            bookingId: booking._id
        });
    }

    render() {
        if (!this.state.pro) {
            return <View />
        }

        return (
            <View style={{ margin: 10 }}>
                <Text style={appStyles.h1}>Confirm Appointment at {this.state.pro.name}</Text>
                <Text>{this.state.pro.address}</Text>
                <Text style={appStyles.h2}>{this.state.fromDisplay}</Text>

                <Text>Name:</Text>
                <TextInput style={styles.textInput} value={this.state.contact.fullName}
                    onChangeText={(text) => this.updateContactInfo({ fullName: text })} />

                <Text>Phone:</Text>
                <TextInput style={styles.textInput} value={this.state.contact.phone}
                    onChangeText={(text) => this.updateContactInfo({ fullName: text })} />

                <TouchableOpacity style={appStyles.submitButton} onPress={() => this.confirmBooking()}>
                    <Text>Confirm</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    textInput: {
        ...appStyles.textInput,
        margin: 0
    }
}

export default ConfirmBookProScreen;

