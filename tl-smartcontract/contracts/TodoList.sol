// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    uint public taskCount;

    struct Task {
        uint Id;
        string Content;
        bool Done;
    }

    mapping (uint => Task) public tasks;

    constructor() public {
        createTask("Water my plants.");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

    function markTaskAsDone(uint _id) public {
        Task memory _task = tasks[_id];
        _task.Done = !_task.Done;
        tasks[_id] = _task;
    }
}