import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Article = (props) => (
    <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('Article', { id: props.article._id })}>
        <Text style={[styles.txt, { fontWeight: 'bold' }]}>{props.article.headline}</Text>
        <Text style={styles.txt}>{props.article.snippet}</Text>
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

export default Article;