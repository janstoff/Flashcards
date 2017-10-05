import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { gray, black, white, lightOrange, orange } from '../utils/colors'
import { connect } from 'react-redux'
import _ from 'lodash'

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { activeDeck } = navigation.state.params

    return {
      title: `${activeDeck.title}`
    }
  }

	render() {
		const { deck, cards, navigation } = this.props

		return (
			<View style={styles.container}>
        <View style={styles.deckInfo}>
          <Text style={styles.textTitle}>{deck.title}</Text>
  				<Text>{cards ? cards.length : 0} Cards</Text>
        </View>
				<TouchableOpacity style={styles.button1}>
					<Text style={styles.buttonText} onPress={() => navigation.navigate('AddCard', { activeDeck: deck })}>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}>
					<Text style={styles.buttonText} onPress={() => navigation.navigate('Quiz', { activeDeck: deck })}>Start Quiz</Text>
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
    backgroundColor: lightOrange,
    marginTop: 30,
    marginBottom: 20,
		padding: 5,
    width: 250,
		borderRadius: 3,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: lightOrange,
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
	buttonText: {
		color: white,
		fontSize: 15
	},
	textTitle: {
		color: black,
		fontSize: 40,
	}
})

function mapStateToProps({ decks, cards, navigation }, ownProps) {
  const { activeDeck } = ownProps.navigation.state.params

	return {
		deck: decks[activeDeck.id],
    cards: _.filter(cards, { deckID: activeDeck.id})
	}
}

export default connect(mapStateToProps)(Deck)
