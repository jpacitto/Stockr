import React from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props); // calls base class just like python I think
        this.state = {isLoggedIn: false};
    }

    toggleUser = ()=>{ // used this arrow sytax to avoid binding to this
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message ;
        return (
            //onPress event handler is a prop of the text component
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={require('./img/Stockr_logo.jpg')}
                />
                <Text 
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize:20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'android'? '#31e981':'#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        width: undefined, 
        height: undefined
    }
});

//normally height and width need to be included for an image, but in order to use flex settings we say undefined (logoStyle)


// + flex works in relation to size of other components
// flex 2 takes up twice the space of flex 1
// flex 0 = static, sized based on height and width
// flex of negative numbers will have a fixed size but can shrink to min width/height