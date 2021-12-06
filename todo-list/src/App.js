import React, {Component} from 'react';
import Web3 from 'web3';
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
    };
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    // init web3 using provider metamask provides
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    
    // get the accounts
    const accounts = await web3.eth.requestAccounts();
    this.setState({
      account: accounts[0]
    });
  }

  render() {
    return (
      <div className="container">
        <h1>
          Todo List Smart Contract!
        </h1>
        <p>
          Account: {this.state.account}
        </p>
      </div>
    );
  }
}

export default App;
