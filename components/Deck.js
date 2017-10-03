import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gray, black, white } from '../utils/colors'


export default class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This the selected Deck</Text>
        <Text>Name of the Deck</Text>
        <Text>Number of Cards </Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Start Quiz</Text>
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
    padding: 5,
    height: 40,
    borderRadius: 3,
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    margin: 10,
    padding: 5,
    height: 40,
    borderRadius: 3,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 15
  }
});
