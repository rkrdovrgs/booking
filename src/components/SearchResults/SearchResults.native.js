import React from 'react';
import { ScrollView, Text } from 'react-native';
import ProResult from '../ProResult/ProResult.native';

const SearchResults = (props) => (
    <ScrollView>
        {props.pros.map(pro => (
            <ProResult key={pro._id} pro={pro} navigation={props.navigation} />
        ))}
    </ScrollView>
);

export default SearchResults;