import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, SELECT_DECK } from '../actions'

function decks(
	state = {
	decks:{},
	selectedDeck: null
},
action)
{
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				decks: action.decks
			}
		case ADD_DECK:
			return {
				...state,
				decks: {
					...state.decks,
					[action.deck.title]: {
						...state.decks[action.deck.title], ...action.deck
					}
				}
			}
		case ADD_CARD:
			return {
				...state,
				decks: {
					...state.decks,
					[action.deck]: {
						...state.decks[action.deck],
						questions: [
							...state.decks[action.deck].questions, action.card
						]
					}
				}
			}
		default:
			return state
	}
}

export default decks
