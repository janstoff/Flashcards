import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gray, white } from '../utils/colors'


export default class AddCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>INPUT FIELD Question</Text>
        <Text>INPUT FIELD Answer</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 15
  }
});
