import * as types from '../config/constants';

export function storeResults(didUserWon) {
  return async (dispatch) => {

    try {
    // make axios call to store the results and dispatch the results
    // Axios call
      dispatch({
        type: types.STORE_RESULTS,
        didUserWon
      });
         } catch (error) {
      /* dispatch(userCardsRetrieved(error));*/
      //console.log(error);
    }
  };
}