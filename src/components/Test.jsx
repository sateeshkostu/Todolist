import React,{ useState } from 'react';
import './test.css';


function Test() {

    let [todoInput, UpdateInput] = useState()
    let [todoList, UpdateTodo] = useState(
        [
            {
                id: 1,
                task: "learn react"
            },
            {
                id: 2,
                task: "learn angular"
            },
            {
                id: 2,
                task: "learn angular"
            },
        ]
    )

    let nextValue = 3
    function addnewtodolist() {
        if (todoInput == "") {
            alert('Add a task')
        }
        else {
            let newTodos = [
                ...todoList,
                {
                    id: nextValue++,
                    task: todoInput
                }
            ]
            UpdateTodo(newTodos);
            UpdateInput('')
        }
    }
    
    function deleteTodo(id) {
     let UpdateTodos  = todoList.filter(
            (todo) => {
                return todo.id= !id;
            }
        )
        UpdateTodo(UpdateTodos)
    }
    return (
        <div className="container mt-5">
            <h3 className='text-center'>Todo List React App</h3>
            <div className="input-group">
                <input type="text" className="form-control" onChange={(e) => {
                    let task = e.target.value;
                    UpdateInput(task)
                }} value={todoInput} />
                <button className="btn btn-primary" onClick={() => {
                    addnewtodolist()
                }}>Add</button>
            </div>

            <ul className="list-group mt-4">
                {
                    todoList.map((todo) => {
                        return (
                            <li className="list-group-item">
                                <p>{todo.task}</p>
                                <button onClick={() => {
                                    deleteTodo(todo.id)
                                }} className='btn'>❌</button>
                            </li>
                        )
                    })
                }

            </ul>
        </div>



    )
}

export default Test