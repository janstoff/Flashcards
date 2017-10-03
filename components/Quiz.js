import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { green, red, white } from '../utils/colors'


export default class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This the selected Quiz and Question</Text>
        <Text>Question number x out of y</Text>
        <Text>Question Text</Text>
        <Text style={{ color: organge, fontSize: 20 }}>see Answer</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Incorrect</Text>
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
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    margin: 10,
    padding: 5,
    height: 40,
    borderRadius: 3,
    backgroundColor: red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 15
  }
});
