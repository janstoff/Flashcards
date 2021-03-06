import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView
} from 'react-native'
import { lightBlue, white, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

const uuid = require('uuid/v4')

class AddDeck extends Component {
	state = {
		title: ' '
	}

	submit() {
		const { navigation, addDeck } = this.props
		const deck = this.state.title
		const id = uuid()

		addDeck(deck, id) //to redux state

		//add Deck to AsyncStorage

		navigation.goBack()
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<Text>What is the title of your new Deck?</Text>
				<TextInput
					style={styles.textInput}
					value={this.state.title}
					onChangeText={input => this.setState({ title: input })}
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.submit()}>
					<Text style={styles.buttonText}>SUBMIT</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textInput: {
		borderWidth: 1,
		borderRadius: 3,
		borderColor: gray,
		padding: 2,
		margin: 5,
		width: 250
	},
	button: {
		margin: 10,
		padding: 5,
		height: 40,
		borderRadius: 3,
		backgroundColor: lightBlue,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: lightBlue,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	buttonText: {
		color: white,
		fontSize: 15
	}
})

function mapStateToProps({ decks }) {
	return {
		decks: decks
	}
}

export default connect(mapStateToProps, { addDeck })(AddDeck)
