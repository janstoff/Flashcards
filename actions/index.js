export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck(deck, id) {
	return {
		type: ADD_DECK,
		deck,
		id
	}
}

export function addCard(card, id) {
	return {
		type: ADD_CARD,
		card,
		id
	}
}
