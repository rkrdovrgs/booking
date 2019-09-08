import React from 'react';

const Header = (props) => (
    <header style={styles.header}>
        <h1 style={styles.title}>
            {props.children}
        </h1>
    </header>
);

const styles = {
    header: {
        height: 65,
        backgroundColor: '#238c59',
        marginBottom: 5,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        paddingTop: 10
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white'
    }
};

export default Header;
