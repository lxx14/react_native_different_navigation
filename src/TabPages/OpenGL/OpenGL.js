import React, { Component } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Image, StyleSheet, View, Text } from 'react-native';
import {
    SoftLightBlend,
    BoxBlur,
    Emboss,
    Earlybird,
    Invert,
    RadialGradient
} from 'react-native-image-filter-kit';
import AsyncStorage from '@react-native-community/async-storage';

import { styles } from './styles';


export default class OpenGL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blur: 1,
        }
    }

    componentDidMount = async () => {
        try {
            const blur = await AsyncStorage.getItem("range")
            if (blur) {
                this.setState({ blur: JSON.parse(blur) });
            }
        } catch {

        }
    }

    componentDidUpdate = async () => {
        const { blur } = this.state;
        await AsyncStorage.setItem("range", `${blur}`);
    }

    changeBlur = (value) => {
        this.setState({
            blur: +value
        })
    }

    render() {
        const { blur } = this.state;

        return (
            <View style={styles.container}>
                <BoxBlur
                    image={
                        <Image
                            source={require('../../assets/images/parrot.png')}
                            style={styles.image}
                        />
                    }
                    radius={blur}
                />
                <MultiSlider
                    values={[blur]}
                    sliderLength={280}
                    onValuesChange={this.changeBlur}
                    min={0}
                    max={10}
                    step={1}
                />
            </View>
        )
    }
}