import * as types from '../config/constants'


export const deckID = (deck_ID) => {
    return {
        type: types.DECK_ID,
        deck_ID
    };
}

export const userCardsRetrieved = (userCardsData) => {
    return {
        type: types.USER_CARDS_RETRIEVED,
        userCardsData
    };
}



export const dealerCardsRetrieved = (dealerCardsData) => {
    return {
        type: types.DEALER_CARDS_RETRIEVED,
        dealerCardsData
    };
}

