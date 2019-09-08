import React from 'react';
import { ScrollView, Text } from 'react-native';
import Article from '../Article/Article.native';

const SearchResults = (props) => (
    <ScrollView>
        {props.articles.map(article => (
            <Article key={article._id} article={article} navigation={props.navigation} />
        ))}
    </ScrollView>
);

export default SearchResults;