import React from 'react';
import Article from '../Article/Article.dom';

const SearchResults = (props) => (
    <div>
        {props.articles.map(article => (
            <Article key={article._id} article={article} />
        ))}
    </div>
);

export default SearchResults;