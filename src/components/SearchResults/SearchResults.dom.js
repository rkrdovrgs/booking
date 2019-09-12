import React from 'react';
import ProResult from '../ProResult/ProResult.dom';

const SearchResults = (props) => (
    <div>
        {props.pros.map(pro => (
            <ProResult key={pro._id} pro={pro} />
        ))}
    </div>
);

export default SearchResults;