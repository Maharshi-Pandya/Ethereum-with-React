import React, {Component} from 'react';
import Web3 from 'web3';
import "./App.css";
import { TODOLIST_ADDRESS, TODOLIST_ABI } from './config'; 

// componentts
import NavBar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      taskCount: 0,
      tasks: []
    };
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    // init web3 using provider metamask provides
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

    // get the contract instance from web3
    const todoList = new web3.eth.Contract(TODOLIST_ABI, TODOLIST_ADDRESS);
    console.log(todoList);

    // read taskCount from the contract
    let taskCount = await todoList.methods.taskCount().call();
    this.setState({ taskCount });

    // log all the tasks
    for (let i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call();
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    }

    console.log(this.state.tasks);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <br/>
        <div className="container">
          <Header taskCount={this.state.taskCount}/>
          <br/>
          <Content tasks={this.state.tasks}/>
        </div>
      </div>
    );
  }
}

export default App;
