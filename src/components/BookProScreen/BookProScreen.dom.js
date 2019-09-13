import React from 'react';
import BookProScreenBase from './BookProScreen.base'

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.match.params.friendlyId;

    render() {
        if (!this.state.pro) {
            return <div />
        }

        return (
            <div>
                <label>{this.state.pro.name}</label>
                <address>{this.state.pro.address}</address>
                {this.state.pro.avail.map((avail, i) => avail.days.includes(new Date().getDay()) ?
                    (
                        avail.ranges.map((range, r) => (
                            <div key={`range-${i}-${r}`}>
                                {range.from} - {range.to}
                            </div>
                        ))
                    ) :
                    (
                        <div key={`range-${i}`}>Closed</div>
                    )
                )}
            </div>
        );
    }
}

export default BookProScreen;
