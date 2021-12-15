import React, {Component} from 'react';
import Web3 from 'web3';
import "./App.css";
import { TODOLIST_ADDRESS, TODOLIST_ABI } from './config'; 

import loading from './assets/loading.gif';

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
      tasks: [],
      loading: true
    };

    this.createTask = this.createTask.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    // init web3 using provider metamask provides
    const web3 = new Web3('http://localhost:8545');

    const accounts = await web3.eth.getAccounts();
    this.setState({ account : accounts[0] });
    console.log(accounts[0]);

    // get the contract instance from web3
    const todoList = new web3.eth.Contract(TODOLIST_ABI, TODOLIST_ADDRESS);
    this.setState({ todoList });
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

    this.setState({ loading: false });
  }

  createTask(content) {
    this.setState({ loading: true });
    this.state.todoList.methods.createTask(content).send({ from: this.state.account, gas: 600000 })
    .once('receipt', (receipt) => {
      this.setState({ loading: false });
    });
  }

  markAsDone(taskId) {
    this.setState({ loading: true });
    this.state.todoList.methods.markTaskAsDone(taskId).send({ from: this.state.account, gas: 600000})
    .once('receipt', (receipt) => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div>
        <NavBar/>
        <br/>
        <div className="container">
          <Header taskCount={this.state.taskCount}/>
          <br/>
          
          {this.state.loading 
          ? <div className="mt-5 text-center"><img className="loading" src={loading} alt="loading gif"></img></div>
          : <Content tasks={this.state.tasks}
          createTask={this.createTask}
          markAsDone={this.markAsDone}
          />}
        </div>
      </div>
    );
  }
}

export default App;
