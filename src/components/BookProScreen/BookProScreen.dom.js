import React from 'react';
import BookProScreenBase from './BookProScreen.base';
import { Link } from 'react-router-dom';
import { appStyles } from '../../../App.styles';

class BookProScreen extends BookProScreenBase {
    proFriendlyId = this.props.match.params.friendlyId;

    render() {
        if (!this.state.pro) {
            return <div />
        }

        return (
            <div>
                <h1>{this.state.pro.name}</h1>
                <address>{this.state.pro.address}</address>
                {this.state.avail.map((avail, i) => (
                    avail.ranges.map((range, r) => (
                        <div key={`range-${i}-${r}`}>
                            {range.from} - {range.to}
                        </div>
                    ))
                ))}

                <h2>Available spots</h2>

                {this.state.spots.map((spot, i) => (
                    <Link style={{ ...appStyles.item, display: "block", color: "#fff" }} key={spot.fromUnix} to={`/book/${this.proFriendlyId}/at/${spot.fromUnix}/confirm`}>
                        {spot.from} - {spot.to}
                    </Link>
                ))}
            </div>
        );
    }
}

export default BookProScreen;
