import React, { useState, useEffect } from "react";

// import Todolist from './Todolist';
import axios from 'axios'

const Todo = () => {
    const [task, settask] = useState();
    const [todoList, setTodoList] = useState([])
    const [id, setId] = useState(null);
    const [newValue, setNewValue] = useState("");
    const [isclicked,setisclicked] = useState(true)


    const [todos, settodos] = useState([])          //add chese every value  list lo add avvadam
    // kosam oka list ni create chaili list name is todos//

    localStorage.setItem('todos', JSON.stringify(todos));

    const todolist = JSON.parse(localStorage.getItem('todos'));
    // if (todos) {
    //     settodos(todos);
    // }
    const changehandler = e => {                  //changehandler is used to enter the value is work in
        // proper add to variable settask is assign to task //
        settask(e.target.value)                 //e.target.value is used to enter the value is task value is 
        //mention in input type text //
    }
    useEffect(() => {
        getdetails();
    }, [])
    const getdetails = () => {
        axios.get("http://localhost:2000/todos/todos").then(
            responce => {
                setTodoList(responce.data.todos);
                console.log(responce.data.todos)
            }
        )
    }
    const submithandler = e => {             //form submit avvadam kosam oka array function declare chesekoni dani kosam 
        //submit handler ni declare chesam submit handler ni starting of form lo use chaile //
        e.preventDefault();
        axios.post('http://localhost:2000/todos/todos', { name: task })
            .then((responce) => {
                const newtodos = [...todos, responce.data.todos];
                settodos(newtodos);
                settask("");
                getdetails()
            })
            .catch((error) => console.log(error));
    };
    const deletehandler = (id) => {
        axios.delete('http://localhost:2000/todos/todos/' + id)
            .then((response) => {
                const newtodos = todos.filter((list) => list.id !== id);
                setTodoList(newtodos);
            })
            .catch((error) => console.log(error));
    }

    // const handleEdit = (id) => {
    //     axios.get('http://localhost:2000/todos/todos/' + id)
    //         .then(res => {
    //             settodos(res.data)

    //         })
    //         .catch(err => console.log(err))
    // };

    const updatehandler = (id) => {
        axios.put(`http://localhost:2000/todos/todos/` + id, { name: newValue })
          .then(response => {
            const newtodos = todoList.map(list => {
              if (list._id === id) {
                return { ...list, name: newValue };
              }
              return list;
            });
            setTodoList(newtodos);
            setId(null);
            // setNewValue("");
            setisclicked(true)
          })
          .catch(error => console.log(error));
      };

    return (
        <>
            <center>
                <div className="card">
                    <div className="cardbody">
                        <h1 className="cardtitle">Todo Management Application</h1>
                        {isclicked ? (
                            <form onSubmit={submithandler}>
                            <input size="30" type="text" name="task" value={task} onChange={changehandler} /> &nbsp;&nbsp;
                            <input type="submit" value="Add" name="Add" />
                        </form>
                        ):(<form onSubmit={(e) => {
                            e.preventDefault();
                            updatehandler(id);
                        }}>
                            <input type="text" name="newValue" value={newValue} onChange={(e) => setNewValue(e.target.value)} /> &nbsp;&nbsp;
                            <button type="submit">Update</button>
                        </form>)}
                        
                        {todoList.map(list => (<h4 className="cards" key={list.id} style={{ textAlign: 'left', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                            {list.name} &nbsp;&nbsp;
                            <div style={{ justifyContent: 'space-between' }}>
                                <button onClick={() => {
                                    setId(list._id);
                                    setNewValue(list.name);
                                    setisclicked(false)
                                }}>Edit</button>&nbsp;
                                <button onClick={() => deletehandler(list._id)}>Delete</button>&nbsp;
                            </div></h4>))}
                        <div style={{ display: 'flex', justifyContent: "center", flexDirection: "column" }}>
                            {/* <Todolist settodos={settodos} todolist={todolist} deletehandler={deletehandler} /> */}
                        </div>

                    </div>
                </div>
            </center>
        </>
    )

}

export default Todo;

// isClicked={isClicked}updatehandler={updatehandler} savehandler={savehandler} updatedValue ={updatedValue} setUpdatedValue={setUpdatedValue}
 // const updatehandler = (index) => {
    // //  const updatedItems = [...todos];             // create a copy of the original array
    //     setIsClicked(true)
    //     // updatedItems[index] = updatedValue;      // update the value of the element at the desired index
    //     // settodos(updatedItems);                  // set the state with the updated array
    // };
    // const savehandler = (index) => {
    //     const updatedItems = [...todos]
    //     updatedItems[index] = updatedValue;         // update the value of the element at the desired index
    //     settodos(updatedItems);
    //     setIsClicked(false)
    //     setUpdatedValue(null)

    // }
    // const [updatedValue, setUpdatedValue] = useState(null)
    // const [isClicked, setIsClicked] = useState(false)
    // const [items,setItems] = useState("");
    // import { v4 as uuidv4} from "uuid";