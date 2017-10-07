import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Start from './components/Start'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import store from './Store'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { blue, white } from './utils/colors'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { setLocalNotification } from './utils/notifications'

function CustomStatusBar({ backgroundColor, ...props }) {
	return (
		<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const MainNavigator = StackNavigator({
	Start: {
		screen: Start,
		navigationOptions: {
			title: 'Start',
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
			headerTintColor: white,
			headerStyle: {
				backgroundColor: blue
			}
		}
	},
  Quiz: {
		screen: Quiz,
		navigationOptions: {
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

class App extends Component {
	componentDidMount() {
		setLocalNotification()
	}
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

export default (App)
