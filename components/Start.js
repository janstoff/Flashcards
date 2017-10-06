import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { blue, white, lightBlue, orange } from '../utils/colors'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchDecks, fetchCards } from '../utils/api'
import { receiveDecks, receiveCards } from '../actions'


class Start extends Component {

	componentDidMount() {
		const { dispatch, receiveDecks, receiveCards } = this.props

		fetchDecks()
			.then(decks => receiveDecks(decks))

		fetchCards()
			.then(cards => receiveCards(cards))
	}

	render() {
		const { navigation, decks } = this.props

		return (
			<View style={styles.container}>
				{decks &&
					_.map(decks, deck => {
						return (
							<TouchableOpacity
                key={deck.id}
								style={styles.button1}
								onPress={() => navigation.navigate('Deck', { activeDeck: deck })}>
								<Text style={styles.buttonText}>{deck.title}</Text>
							</TouchableOpacity>
						)
					})}
				<TouchableOpacity
					style={styles.button2}
					onPress={() => navigation.navigate('AddDeck')}>
					<Text style={styles.buttonText}>Add a new Deck</Text>
				</TouchableOpacity>
			</View>
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
	button1: {
		margin: 20,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingRight: 15,
		height: 60,
		width: 250,
		borderRadius: 3,
		backgroundColor: orange,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: orange,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	button2: {
		margin: 20,
		padding: 5,
		height: 40,
		width: 250,
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
		fontSize: 20
	}
})

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps, { receiveDecks, receiveCards })(Start)
