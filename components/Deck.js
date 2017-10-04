import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { gray, black, white, lightGray } from '../utils/colors'
import { connect } from 'react-redux'

class Deck extends Component {
	render() {
		const { deck } = this.props
		console.log(this.props)

		return (
			<View style={styles.container}>
        <View style={styles.deckInfo}>
          <Text style={styles.textTitle}>{deck.title}</Text>
  				<Text>{deck.questions ? deck.questions.length : 0} Cards</Text>
        </View>
				<TouchableOpacity style={styles.button1}>
					<Text style={styles.buttonText}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}>
					<Text style={styles.buttonText}>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: white,
		alignItems: 'center',
		justifyContent: 'center'
	},
  deckInfo: {
    flex: 1,
    backgroundColor: lightGray,
    marginTop: 30,
    marginBottom: 20,
		padding: 5,
    width: 250,
		borderRadius: 3,
		backgroundColor: lightGray,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: lightGray,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	button1: {
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
	button2: {
		margin: 10,
		padding: 5,
		height: 40,
		borderRadius: 3,
		backgroundColor: black,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: black,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	buttonText: {
		color: white,
		fontSize: 15
	},
	textTitle: {
		color: black,
		fontSize: 40,
	}
})

function mapStateToProps({ decks, selectedDeck }) {
	return {
		deck: decks[selectedDeck]
	}
}

export default connect(mapStateToProps)(Deck)
