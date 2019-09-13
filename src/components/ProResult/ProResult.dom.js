import React from 'react';
import { Link } from 'react-router-dom';

const ProResult = (props) => (
    <div style={styles.item}>
        <Link to={`/book/${props.pro.friendlyId}`} style={Object.assign({}, styles.txt, { fontWeight: 'bold' })}>
            {props.pro.name}
        </Link>
        <address style={styles.txt}>{props.pro.address}</address>
        {props.pro.avail.map((avail, i) => avail.days.includes(new Date().getDay()) ?
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

const styles = {
    txt: {
        fontSize: 16,
        color: 'white'
    },
    item: {
        margin: 10,
        backgroundColor: '#238c59',
        padding: 10
    }
};

export default ProResult;