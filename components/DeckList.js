import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { lightBlue, white } from '../utils/colors'

export default class DeckList extends Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>This the list of existing Decks</Text>
        <Text>Deck 1</Text>
        <Text>Deck 2</Text>
        <Text>Deck 3</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddDeck')}>
          <Text style={styles.buttonText}>AddDeck</Text>
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
  button: {
    margin: 10,
    padding: 5,
    height: 40,
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
