import * as types from '../config/constants'

//passing the deck id object to reach the reducers
export const deckID = (deck_ID) => {
    return {
        type: types.DECK_ID,
        deck_ID
    };
}
//passing the users card information
export const userCardsRetrieved = (userCardsData) => {
    return {
        type: types.USER_CARDS_RETRIEVED,
        userCardsData
    };
}


//passing the dealers card information
export const dealerCardsRetrieved = (dealerCardsData) => {
    return {
        type: types.DEALER_CARDS_RETRIEVED,
        dealerCardsData
    };
}

