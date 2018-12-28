import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {
    render() {
        const { place, location } = this.props
        return (
            <View style={styles.header}>
                <Text style={styles.place}>{place}</Text>
                <View style={styles.contentIconLocation}>
                <Icon 
                    name="map-marker"
                    size={9} 
                    color="#ccc"
                />
                <Text style={styles.location}>
                    {location}
                </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    place: {
        fontSize: 20,
        fontWeight: '600'
    },

    contentIconLocation: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    location: {
        fontSize: 10,
        fontWeight: '600',
        color: '#ccc',
        marginLeft: 1
    }
})

export default Header;