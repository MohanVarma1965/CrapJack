import React from 'react';
import GamePage from '../containers/gamePage';
import ViewRules from './viewRules';
import { Collapse } from 'react-collapse';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.startGame = this.startGame.bind(this);
    this.state = {
      opened: true,
      isStartGameclicked: false,
    };
  }

  toggle() {
    this.setState({ opened: !this.state.opened });
  }

  startGame() {
    this.setState({ isStartGameclicked: true });
  }

  initialContent() {
    return (<div>
      <div className="buttonContainer">
        <button className="myButton" onClick={this.startGame}>Start Game</button>
      </div>
      <div className="buttonContainer">
        <button className="myButton" onClick={this.toggle}>{this.state.opened ? "Collapse Rules" : "View Rules"}</button>
      </div>
      <Collapse isOpened={this.state.opened}>
        <ViewRules/>
      </Collapse>
    </div>);
  }

  render() {
    return (<div>
      <div className="logoContainerGlow">
        <h1 className="glow">CRAPJACK</h1>
      </div>
      {this.state.isStartGameclicked ? <GamePage/> : this.initialContent()}
    </div>);
  }
}

export default Layout;
