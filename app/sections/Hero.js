'use strict';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Hero extends React.Component {
    render(){
        return(
            <Image
                style={styles.heroImage}
                source={require('./img/stonks1.png')}
            />
        );
    }
}

const styles = StyleSheet.create ({
    heroImage: {
        flex: 5,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    }
});

//why don't I get an error when I say StyleSheet.heroImage for the Image style field???