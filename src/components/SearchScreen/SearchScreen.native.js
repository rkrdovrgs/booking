import React, { Component } from 'react';
import { View } from 'react-native';
import SearchBox from '../SearchBox/SearchBox.native';
import SearchResults from '../SearchResults/SearchResults.native';
import SearchScreenBase, { styles } from './SearchScreen.base';


class SearchScreen extends SearchScreenBase {
    render() {
        return (
            <View style={styles.container}>
                <SearchBox onSearch={this.handleSearch.bind(this)} placeholder='Search' />
                <SearchResults articles={this.state.articles} navigation={this.props.navigation} />
            </View>
        );
    }
}

export default SearchScreen;