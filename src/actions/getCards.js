import axios from 'axios';
import { userCardsRetrieved, dealerCardsRetrieved, deckID } from './retrievedCards';

export function retrieveUserCards(value) {
  return async (dispatch) => {
    try {

      let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/', {
        params: { deck_count: 1 },
        headers: {},
      });
      let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/`, {
        params: { count: 3 },
        headers: {},
      });
      dispatch(deckID(response.data.deck_id));
      dispatch(userCardsRetrieved(drawCards.data.cards));
    } catch (error) {
      /* dispatch(userCardsRetrieved(error));*/
      //console.log(error);
    }
  };
}

export function retrieveDealerCards(deckID) {
  return async (dispatch) => {
    try {
      let drawCards = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`, {
        params: { count: 3 },
        headers: {},
      });
      dispatch(dealerCardsRetrieved(drawCards.data.cards));
    } catch (error) {
      /* dispatch(searchImageCallError(error));*/
      //console.log(error);
    }
  };
}