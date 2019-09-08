import React, { Component } from 'react';
import config from '../../config.base';

class ArticleScreenBase extends Component {
    state = {
        article: {}
    };

    componentWillMount() {
        fetch(`${config.baseApiUrl}api/articles/${this.articleId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    article: data
                });
            });
    }
}

export default ArticleScreenBase;
