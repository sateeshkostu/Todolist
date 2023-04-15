import React from "react";

const Todolist = ({todolist, deletehandler}) => {
    return (
        <>
        {todolist.map((todo,index) =>  //index is used to unique 
        //when use map property should be use key property(index)
        <div key={index}>
          <h5>{todo} &nbsp; <button onClick={() => deletehandler(index)}>Delete</button></h5>
        </div>
        )}
        </>
    )
}

export default Todolist