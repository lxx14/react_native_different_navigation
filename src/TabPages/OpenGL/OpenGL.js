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

import {styles} from './styles';

export default class OpenGL extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blur: 1,
        }
    }

    changeColor1 = (value) => {
        this.setState({
            blur: +value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <BoxBlur
                    image={
                        <Image
                            source={require('../../assets/images/parrot.png')}
                            style={styles.image}
                        />
                    }
                    radius={this.state.blur}
                />
                <MultiSlider
                    value={0}
                    sliderLength={280}
                    onValuesChange={this.changeColor1}
                    min={0}
                    max={10}
                    step={1}
                />
            </View>
        )
    }
}