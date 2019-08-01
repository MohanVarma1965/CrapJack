import * as types from '../config/constants';
import initialState from './initialState';

export default function cardsReducer(state = initialState, action) {
debugger;
  if (action.type == types.DECK_ID) {
    return Object.assign({}, state, { deckID: action.deck_ID });
  } else if (action.type == types.USER_CARDS_RETRIEVED) {
    return Object.assign({}, state, { userCardsData: action.userCardsData, dealerCardsData: null });
  } else if (action.type == types.DEALER_CARDS_RETRIEVED) {
    return Object.assign({}, state, { dealerCardsData: action.dealerCardsData });
  } else if (action.type == types.STORE_RESULTS) {
    let userWins = action.didUserWon ? state.noOfTimesUserWon + 1 : state.noOfTimesUserWon;
    let playedGames = state.noOfGamesPlayed + 1;
    return Object.assign({}, state, { noOfTimesUserWon: userWins, noOfGamesPlayed: playedGames});
  } else if (action.type == types.CARDS_RETRIEVED_ERROR) {
    return '';
  }
  return state;
}
