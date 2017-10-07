import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'FlashcardsDecks'
const CARDS_STORAGE_KEY = 'FlashcardsCards'

export function submitDeck(deck, id) {
	return AsyncStorage.mergeItem(
		DECKS_STORAGE_KEY,
		JSON.stringify({
			[id]: { title: deck, id: id }
		})
	)
}

export function fetchDecks() {
	//AsyncStorage.clear()
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results =>
		JSON.parse(results)
	)
}

export function submitCard(card, id) {
	return AsyncStorage.mergeItem(
		CARDS_STORAGE_KEY,
		JSON.stringify({
			[id]: card
		})
	)
}

export function fetchCards() {
	return AsyncStorage.getItem(CARDS_STORAGE_KEY).then(results =>
		JSON.parse(results)
	)
}
