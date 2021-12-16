# Ethereum-with-React
A simple todo-list dApp (de-centralized application) made with Ethereum smart contracts and Reactjs.



### Preview
<hr>

![TodoList dApp](/imgs/Todolist.png)



### Tech-Stack
<hr>

- [Truffle Suite - Sweet tools for Smart Contracts](https://trufflesuite.com/)

- [Ganache CLI](https://www.npmjs.com/package/ganache-cli)

- [ReactJs](https://reactjs.org/)

- [Solidity for Smart Contracts](https://docs.soliditylang.org/en/v0.8.10/)

- [Metamask](https://metamask.io/)

  


### How to develop locally?
<hr>

Firstly clone this repo, and install the npm dependencies:

```shell
$ git clone https://github.com/Maharshi-Pandya/Ethereum-with-React.git

$ cd Ethereum-with-React/todo-list
$ npm install 
```



Now open a different terminal session and run `ganache-cli` for a local development blockchain running in the terminal itself.

```shell
$ ganache-cli
```



which results in (something similar to this):

![Ganache CLI img](/imgs/GanacheCli.png)


Next go into the `tl-smartcontract` directory inside the project repo and migrate the contracts to the `Ganache CLI` blockchain.

```shell
$ cd Ethereum-with-React/tl-smartcontract

$ truffle migrate --reset
```



With this, the contract will be deployed on the local development blockchain and we will be given a `contract address` needed further.


![Truffle Migrate img](/imgs/truffleMigrate.png)



Next, open the `build/contracts/TodoList.json` inside any text editor and copy the `ABI` of the deployed contract.



Now, open the `todo-list/src/config.js` file inside any text editor and paste the `contract address` and the `contract ABI` in there.


![code](/imgs/code.png)



With this, navigate to `todo-list/` directory and run:

```shell
$ npm start
```

After that import and connect the first `ganache-cli` account in metamask and interact with the dApp.

And done!

You can develop locally!
