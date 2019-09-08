import React from 'react';

const SearchBox = (props) => (
    <input
        style={styles.input}
        placeholder={props.placeholder}
        onChange={(event) => props.onSearch(event.target.value)}
    />
);

const styles = {
    input: {
        margin: 10,
        height: 45,
        paddingLeft: 10,
        fontSize: 18,
        width: '100%',
        margin: 0,
        paddingLeft: 0
    }
};

export default SearchBox;