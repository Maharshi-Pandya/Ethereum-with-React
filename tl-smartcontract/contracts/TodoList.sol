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

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

    function readTask(uint id) view public returns(uint, string memory, bool) {
        Task storage task = tasks[id];
        return (task.Id, task.Content, task.Done);
    }

    function markTaskAsDone(uint id) public {
        require(id <= taskCount);
        tasks[id].Done = true;
    }

    function deleteTask(uint id) public {
        delete tasks[id];
    }
}