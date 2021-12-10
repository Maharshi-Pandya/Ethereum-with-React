// get the contract artifact
const TodoList = artifacts.require('TodoList');

contract('TodoList', () => {
    it('Should deploy the contract properly', async () => {
        // contract instance
        const todoList = await TodoList.deployed();
        console.log(todoList.address);
        assert(todoList.address !== '');
    });
})