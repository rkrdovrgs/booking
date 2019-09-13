import React from 'react';
import { View, Text } from 'react-native';
import ArticleScreenBase from './ArticleScreen.base'

class ArticleScreen extends ArticleScreenBase {
    articleId = this.props.navigation.state.params.id;

    render() {
        return (
            <View>
                <Text>{this.state.article.headline} - <Text>{this.state.article.publishedDate}</Text></Text>
                <Text>
                    {this.state.article.snippet}
                </Text>
            </View>
        );
    }
}

export default ArticleScreen;

