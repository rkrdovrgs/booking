import React from 'react';
import ArticleScreenBase from './ArticleScreen.base'

class ArticleScreen extends ArticleScreenBase {
    articleId = this.props.match.params.id;

    render() {
        return (
            <div>
                <label>{this.state.article.headline} - <small>{this.state.article.publishedDate}</small></label>
                <p>
                    {this.state.article.snippet}
                </p>
            </div>
        );
    }
}

export default ArticleScreen;
