import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => (
    <div style={styles.item}>
        <Link to={`/article/${props.article._id}`} style={Object.assign({}, styles.txt, { fontWeight: 'bold' })}>
            {props.article.headline}
        </Link>
        <p style={styles.txt}>{props.article.snippet}</p>
    </div>
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