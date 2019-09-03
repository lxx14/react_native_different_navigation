import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(
            this.goMainPage, 2500
        );
    }

    goMainPage = () => {
        const { navigation: { navigate } } = this.props;
        navigate('MainApp');
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/splash_logo.png')} />
            </View>
        )
    }
}

export default SplashScreen;