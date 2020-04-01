import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';

export class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header message = 'Press to Login' />
                <Hero />
                <Menu />
            </View>
        ); //props are supplied in line, using same name as used in component (message)
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

/*
//styles supplied in line using double curly brackets.

 You can do this in a stylesheet container to organize stuff by column reversed and center everything
        flexDirection: 'column-reverse',
        alignItems: 'center'


*/