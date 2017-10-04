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
				decks: action.payload
			}
		case ADD_DECK:
			return {
				...state,
				decks: { ...decks, [action.payload.title]: action.payload }
			}
		case ADD_CARD:
			return {
				...state,
				decks: {
					...state.decks,
					questions: {
						...state.decks.questions, ...action.payload
					}
				}
			}
		case SELECT_DECK:
		return {
			...state,
			selectedDeck: action.payload
		}
		default:
			return state
	}
}

export default decks
