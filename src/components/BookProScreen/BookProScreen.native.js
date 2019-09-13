import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BookProScreenBase from './BookProScreen.base'

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.navigation.state.params.friendlyId;

    render() {
        if (!this.state.pro) {
            return <View />
        }

        return (
            <View>
                <Text style={styles.h1}>{this.state.pro.name}</Text>
                <Text>{this.state.pro.address}</Text>
                {this.state.avail.map((avail, i) => (
                    avail.ranges.map((range, r) => (
                        <Text key={`range-${i}-${r}`}>
                            {range.from} - {range.to}
                        </Text>
                    ))
                ))}

                <Text style={styles.h2}>Available spots</Text>

                {this.state.spots.map((spot, i) => (
                    <TouchableOpacity style={styles.item} key={spot.fromUnix} onPress={() => props.navigation.navigate('ConfirmBookPro', { friendlyId: props.pro.friendlyId, fromUnix: spot.fromUnix })}>
                        <Text style={styles.txt}>{spot.from} - {spot.to}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = {
    h1: {
        fontSize: 30,
        bold: "bolder"
    },
    h2: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10
    },
    item: {
        margin: 10,
        backgroundColor: '#238c59',
        padding: 10,
        color: "#fff"
    },
    txt: {
        fontSize: 16,
        color: 'white'
    },
};

export default BookProScreen;

