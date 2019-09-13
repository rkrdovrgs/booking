import React from 'react';
import { Link } from 'react-router-dom';
import { appStyles } from '../../../App.styles';

const ProResult = (props) => (
    <div style={appStyles.item}>
        <Link to={`/book/${props.pro.friendlyId}`} style={Object.assign({}, appStyles.txt, { fontWeight: 'bold' })}>
            {props.pro.name}
        </Link>
        <address style={appStyles.txt}>{props.pro.address}</address>
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

export default ProResult;