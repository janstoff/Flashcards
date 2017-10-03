import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Start from './components/Start'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import store from './Store'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { blue, white } from './utils/colors'
import { StackNavigator } from 'react-navigation'

function CustomStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const MainNavigator = StackNavigator({
	Home: {
		screen: Start,
		navigationOptions: {
			title: 'Start'
		}
	},
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			title: 'Your Decks',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			title: 'Add a new Deck',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		}
	},
  Deck: {
		screen: Deck,
		navigationOptions: {
			title: 'Add a new Deck',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		}
	},
  Quiz: {
		screen: Quiz,
		navigationOptions: {
			title: 'Quiz',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		}
	},
  AddCard: {
		screen: AddCard,
		navigationOptions: {
			title: 'Add a new Card',
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		}
	}
})

export default class App extends Component {
	render() {
		return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
  				<CustomStatusBar backgroundColor={blue} barStyle="light-content" />
  				<MainNavigator />
  			</View>
      </Provider>
		)
	}
}
