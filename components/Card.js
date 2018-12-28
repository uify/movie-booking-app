import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

class Card extends Component {
    
    render() {
        const { image, title, subtitle } = this.props;
        return (
            <View style={styles.card}>
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
                        <View style={styles.cardTextBoxRight}>
                            <Icon name="caret-down" size={15} color="#000" />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 58,
        borderRadius: 10,
        height: 175,
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