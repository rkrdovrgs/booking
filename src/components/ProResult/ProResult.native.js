import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ProResult = (props) => (
    <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('BookPro', { friendlyId: props.pro.friendlyId })}>
        <Text style={[styles.txt, { fontWeight: 'bold' }]}>{props.pro.name}</Text>
        <Text style={styles.txt}>{props.pro.address}</Text>
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