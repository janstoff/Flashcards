import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { blue, white, lightBlue } from '../utils/colors'
import { connect } from 'react-redux'
import _ from 'lodash'
import { selectDeck } from '../actions'

class Start extends Component {

  onSelectDeck = (deckTitle) => {
    const { navigation, selectDeck } = this.props

    navigation.navigate('Deck')

    selectDeck(deckTitle)
  }

	render() {
		const { navigation, decks } = this.props

		return (
			<View style={styles.container}>
				{decks &&
					_.map(decks, deck => {
						return (
							<TouchableOpacity
                key={deck.title}
								style={styles.button1}
								onPress={() => this.onSelectDeck(deck.title)}>
								<Text style={styles.buttonText}>{deck.title}</Text>
							</TouchableOpacity>
						)
					})}
				<TouchableOpacity
					style={styles.button2}
					onPress={() => navigation.navigate('AddDeck')}>
					<Text style={styles.buttonText}>Create New Card Deck</Text>
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
		backgroundColor: blue,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: blue,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	button2: {
		margin: 20,
		padding: 5,
		height: 60,
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
		decks: decks
	}
}

export default connect(mapStateToProps, { selectDeck })(Start)
