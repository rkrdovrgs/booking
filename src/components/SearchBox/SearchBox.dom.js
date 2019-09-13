import React from 'react';
import { appStyles } from "../../../App.styles.dom";

const SearchBox = (props) => (
    <input
        style={appStyles.textInput}
        placeholder={props.placeholder}
        onChange={(event) => props.onSearch(event.target.value)}
    />
);

export default SearchBox;