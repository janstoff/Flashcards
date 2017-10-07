import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native'
import { gray, white } from '../utils/colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'

const uuid = require('uuid/v4')

class AddCard extends Component {
	state = {
		question: ' ',
		answer: ' '
	}

	submit() {
		const { navigation, addCard } = this.props
		const { activeDeck } = navigation.state.params
		const card = {
			question: this.state.question,
			answer: this.state.answer,
			deckID: activeDeck.id
		}
		const id = uuid()

		// add question to redux state
		addCard(card, id)

		// add question to AsyncStorage

		//navigate back to Deck
		navigation.goBack()
	}

	render() {
		return (
			<KeyboardAvoidingView behaviour="padding" style={styles.container}>
				<Text>Question:</Text>
				<TextInput
					style={styles.textInput}
					value={this.state.question}
					onChangeText={input => this.setState({ question: input })}
				/>
				<Text>Answer:</Text>
				<TextInput
					style={styles.textInput}
					value={this.state.answer}
					onChangeText={input => this.setState({ answer: input })}
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.submit()}>
					<Text style={styles.buttonText}>Submit</Text>
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
		backgroundColor: gray,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: gray,
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

export default connect(null, { addCard })(AddCard)
