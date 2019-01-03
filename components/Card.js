import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

class Card extends Component {
    state = {
        itemRotate: new Animated.Value(0),
        itemHeight: new Animated.Value(175)
    }

    startAnimation = () => {
        Animated.parallel([
            Animated.timing(this.state.itemRotate, {
                toValue: 1,
                duration: 1000,
            }),
            Animated.timing(this.state.itemHeight, {
                toValue: 250,
                duration: 1500,
            })
        ]).start()
    }

    render() {
        const spin = this.state.itemRotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
        })

        const animationStyle = {
            transform: [
                {
                    rotate: spin
                }
            ]
        }

        const animationHeightStyle = {
            height: this.state.itemHeight
        }

        const { image, title, subtitle } = this.props;
        return (
            <Animated.View style={[styles.card, animationHeightStyle]}>
                <View style={styles.cardContent}>
                    <Image 
                        source={{uri: image }} 
                        style={styles.image} 
                    />
                    <View style={styles.cardTextBox}>
                        <View style={styles.cardTextBoxLeft}>
                            <Text style={styles.cardTitleMain}>{title}</Text>
                            <Text style={styles.cardTitleSub}>{subtitle}</Text>
                        </View>
                        <TouchableWithoutFeedback 
                            onPress = {this.startAnimation}
                            style={styles.cardTextBoxRight}
                        >
                            <Animated.View style={animationStyle}>
                                <Icon name="caret-down" size={15} color="#000" />
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 58,
        borderRadius: 10,
        // height: 175,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    cardContent: {
        transform: [{ translateY: -50 }]
    },

    image: {
        width: '100%',
        height: 160,
        borderRadius: 10,
    },

    cardTextBox: {
        lineHeight: 12,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardTextBoxLeft: {
        fontSize: 12
    },

    cardTitleMain: {
        fontSize: 13,
        color: '#000',
        fontWeight: '600'
    },

    cardTitleSub: {
        fontSize: 10,
        color: '#ccc',
        fontWeight: '700'
    },
})

export default Card;