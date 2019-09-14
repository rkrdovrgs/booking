import React, { Component } from 'react';
import { ProsService } from '../../dataservices/pros';
import moment from "moment";

const AvailFormat = "h:mm A";
class BookProScreenBase extends Component {
    state = {};

    constructor(...args) {
        super(...args);
        this.prosService = new ProsService();
    }

    componentDidMount() {
        Promise.all([
            this.prosService.getProExistingBookings(this.proFriendlyId),
            this.prosService.getProByFriendlyId(this.proFriendlyId)
        ]).then(data => {
            let avail = data[1].avail.filter(avail => avail.days.includes(new Date().getDay()));
            this.setState({
                pro: data[1],
                avail,
                spots: this.getAvailableSpots(avail, data[0])
            });
        });
    }

    getAvailableSpots(avail, existingBookings) {
        let spots = [];
        avail.forEach(a => {
            a.ranges.forEach(range => {
                let targetDate = moment(range.from, AvailFormat),
                    toDate = moment(range.to, AvailFormat);
                while (targetDate.toDate() < toDate.toDate()) {
                    if (!existingBookings.some(b => b.fromUnix.toString() === targetDate.unix().toString())) {
                        spots.push({
                            fromUnix: targetDate.unix(),
                            from: targetDate.format(AvailFormat),
                            to: targetDate.add(1, "hour").format(AvailFormat)
                        });
                    } else {
                        targetDate.add(1, "hour");
                    }
                }
            });
        });

        return spots;
    }

}

export default BookProScreenBase;
