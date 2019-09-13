import React from 'react';
import { TextInput } from 'react-native';
import { appStyles } from "../../../App.styles.native";

const SearchBox = (props) => (
    <TextInput
        style={appStyles.textInput}
        autoFocus
        placeholderTextColor='white'
        placeholder={props.placeholder}
        onChangeText={(text) => props.onSearch(text)}
    />
);

export default SearchBox;