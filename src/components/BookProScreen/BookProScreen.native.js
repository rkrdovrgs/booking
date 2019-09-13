import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BookProScreenBase from './BookProScreen.base';
import { appStyles } from '../../../App.styles.native';

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.navigation.state.params.proFriendlyId;

    navigateToConfirmationScreen(spot) {
        this.props.navigation.navigate('ConfirmBookPro', {
            proFriendlyId: this.state.pro.friendlyId,
            fromUnix: spot.fromUnix
        });
    }

    render() {
        if (!this.state.pro) {
            return <View />
        }

        return (
            <View>
                <Text style={appStyles.h1}>{this.state.pro.name}</Text>
                <Text>{this.state.pro.address}</Text>
                {this.state.avail.map((avail, i) => (
                    avail.ranges.map((range, r) => (
                        <Text key={`range-${i}-${r}`}>
                            {range.from} - {range.to}
                        </Text>
                    ))
                ))}

                <Text style={appStyles.h2}>Available spots</Text>

                {this.state.spots.map((spot, i) => (
                    <TouchableOpacity style={appStyles.listItem} key={spot.fromUnix} onPress={() => this.navigateToConfirmationScreen(spot)}>
                        <Text style={appStyles.text}>{spot.from} - {spot.to}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export default BookProScreen;

