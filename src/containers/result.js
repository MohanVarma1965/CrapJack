import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/result.css';
import {bindActionCreators} from 'redux';
import {storeResults} from '../actions/storeResults';

//final page to display the results
class result extends Component {
    constructor(props) {
        super(props);
        this.calculateScores = this.calculateScores.bind(this);
        this.state = {};
    }

    calculateScores(user, dealer) {
        let userScore = 0;
        let dealerScore = 0;
        for (let i = 0; i < user.length; i++) {
            let individualUserScore = ['QUEEN', 'KING', 'JACK', 'ACE'].indexOf(user[i].value) === -1 ? user[i].value : 10;
            userScore += parseInt(individualUserScore);
            let individualDealerScore = ['QUEEN', 'KING', 'JACK', 'ACE'].indexOf(dealer[i].value) === -1 ? dealer[i].value : 10;
            dealerScore += parseInt(individualDealerScore);
        }
        return [userScore, dealerScore];
    }

    render() {
        //calculate the scores of each dealer and user
        let calculatedScore = this.calculateScores(this.props.userCardsData, this.props.dealerCardsData);
        //based on the result update the values
        if ((calculatedScore[0] <= 21 && calculatedScore[1] > 21) || (calculatedScore[0] <= 21 && calculatedScore[1] <= 21 && calculatedScore[0] > calculatedScore[1]) || (!calculatedScore[0] > 21)) {
            this.props.actions.storeResults(true);
            return (<div className="pyro">
                    <div className="before"></div>
                    <div className="after"></div>
                    <div className="congrats">
                        <div> Congratulations you won !!!</div>
                        <div> Your score {calculatedScore[0]} </div>
                        <div> Dealer score {calculatedScore[1]}</div>
                    </div>
                </div>
            );
        } else {
            this.props.actions.storeResults(false);
            return (
                <div>
                    <div className="congrats">
                        <div> Dealer Wins</div>
                        {calculatedScore[0] > 21 ? <div>You are busted</div> :
                            <div> Your score {calculatedScore[0]} </div>}
                        {calculatedScore[1] > 21 ? <div> Dealer has the advantage </div> :
                            <div> Dealer score {calculatedScore[1]}</div>}
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        results: state.results,
        dealerCardsData: state.cardsReducer.dealerCardsData,
        userCardsData: state.cardsReducer.userCardsData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            storeResults,
        }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(result);

