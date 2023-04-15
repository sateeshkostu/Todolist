import React, {useState} from "react";
import Todolist from './Todolist';

const Todo = () => {
    const [task,settask] = useState("");
    const [todos,settodos] = useState([])  //add chese every value  list lo add avvadam
                                          // kosam oka list ni create chaili list name is todos//
    const changehandler = e =>{   //changehandler is used to enter the value is work in
                                  // proper add to variable settask is assign to task //
        settask(e.target.value)  //e.target.value is used to enter the value is task value is 
                                //mention in input type text //
    }
    const submithandler = e =>{  //form submit avvadam kosam oka array function declare chesekoni dani kosam 
                        //submit handler ni declare chesam submit handler ni starting of form lo use chaile //
        e.preventDefault();
        const newtodos = [...todos,task];
        settodos(newtodos);
        settask("");
    }
    const deletehandler = (indexvalue) =>{
        const newtodos = todos.filter((todo,index) => index !== indexvalue);
        settodos(newtodos);
    }
    return (
        <>
            <center>
                <div className="card">
                    <div className="cardbody">
                        <h1 className="cardtitle">Todo Management Application</h1>
                        <form onSubmit={submithandler}>
                        <input type="text" name="task" value={task} onChange={changehandler}/> &nbsp;&nbsp; 
                        <input type="submit" value="Add" name="Add" />
                        </form> &nbsp;
                        <Todolist todolist={todos} deletehandler={deletehandler} />
                    </div>
                </div>
            </center>
        </>
    )

}

export default Todo;