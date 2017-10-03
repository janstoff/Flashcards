import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { blue, white, lightBlue } from '../utils/colors'



export default class Start extends Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('DeckList')}>
          <Text style={styles.buttonText}>Checkout Card Decks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('AddDeck')}>
          <Text style={styles.buttonText}>Create New Card Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    height: 40,
    width: 250,
    borderRadius: 3,
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    margin: 10,
    padding: 5,
    height: 40,
    width: 250,
    borderRadius: 3,
    backgroundColor: lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 20
  }
});
