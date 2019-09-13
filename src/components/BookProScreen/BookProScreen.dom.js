import React from 'react';
import BookProScreenBase from './BookProScreen.base';
import { Link } from 'react-router-dom';

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
                {this.state.avail.map((avail, i) => (
                    avail.ranges.map((range, r) => (
                        <div key={`range-${i}-${r}`}>
                            {range.from} - {range.to}
                        </div>
                    ))
                ))}

                <h2>Available spots</h2>
                <ul>
                    {this.state.spots.map((spot, i) => (
                        <li key={spot.fromUnix}>
                            <Link to={`/book/${this.proFriendlyId}/at/${spot.fromUnix}/confirm`}>
                                {spot.from} - {spot.to}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default BookProScreen;
