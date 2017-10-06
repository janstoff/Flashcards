import { fetchDecks, submitDeck, fetchCards, submitCard } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck(deck, id) {
	submitDeck(deck, id)
	return {
		type: ADD_DECK,
		deck,
		id
	}
}

export function receiveCards(cards) {
	return {
		type: RECEIVE_CARDS,
		cards
	}
}

export function addCard(card, id) {
	submitCard(card, id)
	return {
		type: ADD_CARD,
		card,
		id
	}
}
