import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BookingConfirmedScreenBase from './BookingConfirmedScreen.base';
import { appStyles } from '../../../App.styles.native';

class BookingConfirmedScreen extends BookingConfirmedScreenBase {
    proFriendlyId = this.props.navigation.state.params.proFriendlyId;
    bookingId = this.props.navigation.state.params.bookingId;

    render() {
        if (!this.state.booking || !this.state.pro) {
            return <View />
        }

        return (
            <View>
                <Text style={appStyles.h2}>Thanks {this.state.booking.contact.fullName}!</Text>
                <Text style={appStyles.h1}>You are confirmed at {this.state.pro.name}</Text>
                <Text>{this.state.pro.address}</Text>
                <Text style={appStyles.h3}>{this.state.fromDisplay}</Text>
                <Text>
                    Your confirmation number is {this.state.booking._id}
                </Text>
                <TouchableOpacity style={appStyles.submitButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={appStyles.link}>Back to search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BookingConfirmedScreen;

