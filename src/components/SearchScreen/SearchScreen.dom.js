import React from 'react';
import SearchScreenBase, { styles } from './SearchScreen.base';
import SearchBox from '../SearchBox/SearchBox.dom';
import SearchResults from '../SearchResults/SearchResults.dom';

class SearchScreen extends SearchScreenBase {
    render() {
        return (
            <div style={styles.container}>
                <SearchBox onSearch={this.handleSearch.bind(this)} placeholder='Search' />
                <SearchResults articles={this.state.articles} />
            </div>
        );
    }
}

export default SearchScreen;