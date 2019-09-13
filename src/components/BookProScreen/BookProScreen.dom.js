import React from 'react';
import BookProScreenBase from './BookProScreen.base'

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.match.params.friendlyId;

    render() {
        return (
            <div>
                <label>{this.state.pro.name}</label>
            </div>
        );
    }
}

export default BookProScreen;
