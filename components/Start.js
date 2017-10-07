import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import { blue, white, lightBlue, orange } from '../utils/colors'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchDecks, fetchCards } from '../utils/api'
import { receiveDecks, receiveCards } from '../actions'
import { AppLoading } from 'expo'

class Start extends Component {

	state = {
		ready: false,
	}

	componentDidMount() {
		const { dispatch, receiveDecks, receiveCards } = this.props

		fetchDecks().then(decks => receiveDecks(decks))

		fetchCards().then(cards => receiveCards(cards))

		.then(this.setState( { ready: true }))
	}

	render() {
		const { navigation, decks, cards } = this.props
		const { ready } = this.state
		const numberOfDecks = Object.keys(decks).length

		if(!ready) { return <AppLoading /> }

		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.container}>
					{numberOfDecks > 0 ? (
						_.map(decks, deck => {
							const cardsPerDeck = Object.keys(
								_.filter(cards, { deckID: deck.id })
							).length

							return (
								<TouchableOpacity
									key={deck.id}
									style={styles.buttonDeck}
									onPress={() =>
										navigation.navigate('Deck', { activeDeck: deck })}>
									<Text style={styles.buttonText}>{deck.title}</Text>
									<Text style={styles.buttonText}>{cardsPerDeck}</Text>
								</TouchableOpacity>
							)
						})
					) : (
						<Text>Currently no decks yet. Add decks below.</Text>
					)
				}
				</ScrollView>
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
	buttonDeck: {
		display: 'flex',
		flexDirection: 'row',
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
		justifyContent: 'space-between',
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

function mapStateToProps({ decks, cards }) {
	return {
		decks,
		cards
	}
}

export default connect(mapStateToProps, { receiveDecks, receiveCards })(Start)
