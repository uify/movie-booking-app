import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import {
  Header,
  Card
} from './components';

export default class App extends Component {
  state = {
    cards: [
      {
        image: 'https://images.unsplash.com/photo-1494486607440-c450dde0d9d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Harkins Theater',
        subtitle: 'Northfield 18, Folora Street'
      },
      {
        image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Fairfax Theater',
        subtitle: '4255W Colfax Ave.'
      },
      {
        image: 'https://images.unsplash.com/photo-1508427991396-70954459dcc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Alamo Drafthouse Cinema',
        subtitle: '5355E Hampten Ave.'
      }
    ]
  }

  renderCards = () => {
    return this.state.cards.map((item, k) => {
      return (
        <Card 
            key={k} 
            image= {item.image}
            title= {item.title}
            subtitle= {item.subtitle}
        />
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          place= "Cinemas Nearby"
          location= "Aurora, Denver"
        />
        <ScrollView style={styles.content}>
          {this.renderCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 80,
    paddingBottom: 10
  },
  content: {
    marginTop: 40,
    paddingTop: 40,
    paddingHorizontal: 5
  }
});
