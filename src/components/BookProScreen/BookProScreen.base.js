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
        this.prosService.getProByFriendlyId(this.proFriendlyId)
            .then(data => {
                let avail = data.avail.filter(avail => avail.days.includes(new Date().getDay()));
                this.setState({
                    pro: data,
                    avail,
                    spots: this.getAvailableSpots(avail)
                });
            });
    }

    getAvailableSpots(avail) {
        let spots = [];
        avail.forEach(a => {
            a.ranges.forEach(range => {
                let targetDate = moment(range.from, AvailFormat),
                    toDate = moment(range.to, AvailFormat);
                while (targetDate.toDate() < toDate.toDate()) {
                    spots.push({
                        fromUnix: targetDate.unix(),
                        from: targetDate.format(AvailFormat),
                        to: targetDate.add(1, "hour").format(AvailFormat)
                    });
                }
            });
        });

        return spots;
    }

}

export default BookProScreenBase;
