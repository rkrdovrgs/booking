import React from 'react';
import { TextInput } from 'react-native';

const SearchBox = (props) => (
    <TextInput
        style={styles.input}
        autoFocus
        placeholderTextColor='white'
        placeholder={props.placeholder}
        onSubmitEditing={(event) => props.onSearch(event.nativeEvent.text)}
    />
);

const styles = {
    input: {
        color: 'white',
        margin: 10,
        height: 45,
        paddingLeft: 10,
        backgroundColor: '#238c59',
        fontSize: 18
    }
};

export default SearchBox;