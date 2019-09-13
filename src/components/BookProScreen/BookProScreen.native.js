import React from 'react';
import { View, Text } from 'react-native';
import BookProScreenBase from './BookProScreen.base'

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.navigation.state.params.friendlyId;

    render() {
        return (
            <View>
                <Text>{this.state.pro.name}</Text>
            </View>
        );
    }
}

export default BookProScreen;

