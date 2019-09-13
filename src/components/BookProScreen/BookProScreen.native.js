import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BookProScreenBase from './BookProScreen.base';
import { appStyles } from '../../../App.styles';

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.navigation.state.params.friendlyId;

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
                    <TouchableOpacity style={appStyles.item} key={spot.fromUnix} onPress={() => props.navigation.navigate('ConfirmBookPro', { friendlyId: props.pro.friendlyId, fromUnix: spot.fromUnix })}>
                        <Text style={appStyles.txt}>{spot.from} - {spot.to}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

export default BookProScreen;

