import React from 'react';
import { Link } from 'react-router-dom';

const ProResult = (props) => (
    <div style={styles.item}>
        <Link to={`/pro/${props.pro.friendlyId}`} style={Object.assign({}, styles.txt, { fontWeight: 'bold' })}>
            {props.pro.name}
        </Link>
        <address style={styles.txt}>{props.pro.address}</address>
        {props.pro.avail.map(avail => avail.days.includes(new Date().getDay()) ?
            (
                avail.ranges.map(range => (
                    <div>
                        {range.from} - {range.to}
                    </div>
                ))
            ) :
            (
                <div>Closed</div>
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