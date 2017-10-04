export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const SELECT_DECK = 'SELECT_DECK'

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		payload: decks
	}
}

export function addDeck(deck) {
	return {
		type: ADD_DECK,
		payload: deck
	}
}

export function addCard(card) {
	return {
		type: ADD_CARD,
		payload: card
	}
}

export function selectDeck(deckTitle) {
	return {
		type: SELECT_DECK,
		payload: deckTitle
	}
}
