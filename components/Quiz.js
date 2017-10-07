import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
	green,
	red,
	white,
	orange,
	blue,
	black,
	lightBlue,
	gray
} from '../utils/colors'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
	clearLocalNotification,
	setLocalNotification
} from '../utils/notifications'

class Quiz extends Component {
	state = {
		questionMode: true,
		cardIndex: 0,
		correct: 0,
		incorrect: 0
	}

	static navigationOptions = ({ navigation }) => {
		const { activeDeck } = navigation.state.params

		return {
			title: `Quiz: ${activeDeck.title}`
		}
	}

	resetNotifications() {
		clearLocalNotification().then(setLocalNotification)
	}

	onClickCorrect() {
		this.setState({
			cardIndex: this.state.cardIndex + 1,
			questionMode: true,
			correct: this.state.correct + 1
		})
	}

	onClickIncorrect() {
		this.setState({
			cardIndex: this.state.cardIndex + 1,
			questionMode: true,
			incorrect: this.state.correct + 1
		})
	}

	onRestart() {
		this.setState({
			cardIndex: 0,
			questionMode: true,
			correct: 0,
			incorrect: 0
		})
	}

	render() {
		const { questionMode, cardIndex, correct, incorrect } = this.state
		const { cards, navigation } = this.props
		const result = correct / (correct + incorrect)
		const currentCard = `${cardIndex + 1} / ${cards.length}`
		const reachedEndOfDeck = cards[cardIndex] === undefined

		if (reachedEndOfDeck) {
			this.resetNotifications()

			return (
				<View style={styles.container}>
					<Text>You got {result * 100}% of answers correct this time.</Text>
					<TouchableOpacity style={styles.buttonStart}>
						<Text style={styles.buttonText} onPress={() => this.onRestart()}>
							Restart Quiz
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.buttonHome}
						onPress={() => navigation.navigate('Start')}>
						<Text style={styles.buttonText}>Back Home</Text>
					</TouchableOpacity>
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<Text style={{ marginBottom: 2, marginTop: 5 }}>{currentCard}</Text>
				{questionMode ? (
					<View style={styles.card}>
						<Text style={{ color: black, fontSize: 20, marginBottom: 20 }}>
							{cards[cardIndex].question}
						</Text>
						<TouchableOpacity style={styles.buttonSeeAnswer}>
							<Text
								style={{ color: orange, fontSize: 16 }}
								onPress={() => this.setState({ questionMode: false })}>
								see Answer
							</Text>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.card}>
						<Text style={{ color: black, fontSize: 20 }}>
							{cards[cardIndex].answer}
						</Text>
						<TouchableOpacity
							style={styles.buttonCorrect}
							onPress={() => this.onClickCorrect()}>
							<Text style={styles.buttonText}>Correct</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.buttonIncorrect}
							onPress={() => this.onClickIncorrect()}>
							<Text style={styles.buttonText}>Incorrect</Text>
						</TouchableOpacity>
					</View>
				)}
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
	card: {
		flex: 1,
		backgroundColor: lightBlue,
		marginTop: 30,
		marginBottom: 20,
		padding: 5,
		width: 250,
		height: 180,
		borderWidth: 1,
		borderColor: orange,
		borderRadius: 3,
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
	buttonCorrect: {
		margin: 10,
		padding: 5,
		height: 40,
		borderRadius: 3,
		backgroundColor: green,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: green,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	buttonIncorrect: {
		margin: 10,
		padding: 5,
		height: 40,
		borderRadius: 3,
		backgroundColor: red,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.4,
		shadowColor: red,
		shadowOffset: {
			width: 0,
			height: 3
		}
	},
	buttonSeeAnswer: {
		margin: 10,
		padding: 5,
		height: 40,
		borderRadius: 3,
		backgroundColor: white,
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
	buttonStart: {
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
	buttonHome: {
		margin: 10,
		padding: 5,
		height: 40,
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
	buttonText: {
		color: white,
		fontSize: 15
	}
})

function mapStateToProps({ decks, cards, navigation }, ownProps) {
	const { activeDeck } = ownProps.navigation.state.params

	return {
		deck: decks[activeDeck.id],
		cards: _.filter(cards, { deckID: activeDeck.id })
	}
}

export default connect(mapStateToProps)(Quiz)
