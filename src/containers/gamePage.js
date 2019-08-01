import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveDealerCards, retrieveUserCards } from '../actions/getCards';
import DisplayCards from '../components/displayCards';
import Result from './result';
import '../styles/gamePage.css';

class gamePage extends Component {
  constructor(props) {
    super(props);
    this.getUserCards = this.getUserCards.bind(this);
    this.getDealerCards = this.getDealerCards.bind(this);
    this.state = {
      revealClicked: false,
    };
  }

  getDealerCards(e) {
    e.preventDefault();
    e.target.classList.add('hide');
    this.setState({ revealClicked: true });
    this.props.actions.retrieveDealerCards(this.props.deckID);
  }

  getUserCards(e) {
    e.preventDefault();
    this.setState({ revealClicked: false });
    this.props.actions.retrieveUserCards();
  }

  render() {
    return (
      <main className="mainContainer">
        {this.props.userCardsData && this.props.dealerCardsData ?
          <Result/> : ''}
        <div className="dealerContainer">
          {this.props.dealerCardsData ? <DisplayCards data={this.props.dealerCardsData}/> :
            <DisplayCards back="true" data={[1, 1, 1]}/>}
        </div>

        <div className="userContainer">
          {this.props.userCardsData ? <DisplayCards data={this.props.userCardsData}/> : ''}
        </div>
        <div>
          {this.state.revealClicked ?
            <button className="myButton" onClick={this.getUserCards}>New Deck</button> : <div>
              <button className="myButton reveal" onClick={this.getDealerCards} type="button"> Reveal</button>
              <div className="dealerHand" id="dealerHand"></div>
            </div>}
        </div>
        <div className="resultsFooter">
          <div> You have played {this.props.noOfGamesPlayed + ' '} Games and
            won {this.props.noOfTimesUserWon + ' '}Games
          </div>
        </div>
      </main>
    );
  }

  componentDidMount() {
    //Make a call to the API on load to get a new deck and retrieve the player cards
    this.props.actions.retrieveUserCards();
  }
}

function mapStateToProps(state) {
  return {
    deckID: state.cardsReducer.deckID,
    dealerCardsData: state.cardsReducer.dealerCardsData,
    userCardsData: state.cardsReducer.userCardsData,
    noOfGamesPlayed: state.cardsReducer.noOfGamesPlayed,
    noOfTimesUserWon: state.cardsReducer.noOfTimesUserWon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      retrieveUserCards,
      retrieveDealerCards,
    }, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(gamePage);