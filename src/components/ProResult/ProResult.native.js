import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { appStyles } from '../../../App.styles';

const ProResult = (props) => (
    <TouchableOpacity style={appStyles.item} onPress={() => props.navigation.navigate('BookPro', { friendlyId: props.pro.friendlyId })}>
        <Text style={[appStyles.txt, { fontWeight: 'bold' }]}>{props.pro.name}</Text>
        <Text style={appStyles.txt}>{props.pro.address}</Text>
        {props.pro.avail.map((avail, i) => avail.days.includes(new Date().getDay()) ?
            (
                avail.ranges.map((range, r) => (
                    <Text key={`range-${i}-${r}`}>{range.from} - {range.to}</Text>
                ))
            ) :
            (
                <Text key={`range-${i}`}>Closed</Text>
            )
        )}
    </TouchableOpacity>
);

export default ProResult;