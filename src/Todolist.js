import React, { useState } from "react";
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


const Todolist = ({ todos, deletehandler, todolist, settodos, todo }) => {
  // const [editMode, setEditMode] = useState({});
  const [updatedvalue, setupdatedValue] = useState();
  const [isclicked, setisclicked] = useState(0);



  const handleEdit = (index) => {
    console.log(index);
    // setEditMode({ ...editMode, [index]: true });
    setisclicked(index + 1)
  };

  const handleUpdate = (index, updatedvalue) => {

    const newtodos = [...todolist];
    // const newtodos = [...todos];
    newtodos[index] = updatedvalue;
    settodos(newtodos)

    // setEditMode({ ...editMode, [index]: false });
    // updatehandler(newtodos);
    setisclicked(0)

  };

  return (

    <div>
      <table className="order" style={{ justifyContent: "space-between" }}>
        {todolist.map((todo, index) => (
          <>
            {index === isclicked - 1 ? (
              <div>
                <input
                  size="29"
                  type="text"
                  // defaultValue={todo}
                  // placeholder={todo.task}
                  value={updatedvalue}
                  onChange={(e) => setupdatedValue(e.target.value)}
                /> &nbsp;&nbsp;

                <button onClick={() => handleUpdate(index, updatedvalue)}>Update</button>
              </div>
            ) : (
              <>
              {/* // <div className="cards" style={{ width: "25vh", height: "15vh" }}>
              //   <h4>{todo}</h4> &nbsp;&nbsp;&nbsp;
              //   <div>
              //     <button onClick={() => handleEdit(index)}>Edit</button> &nbsp;&nbsp;
              //     <button onClick={() => deletehandler(index)}>Delete</button>
              //   </div>
              // </div> */}
              </>
            )}
          </>
        ))}
      </table>
    </div>
  )
}

export default Todolist;

 // <div>
    //   {todolist.map((todo, index) =>
    //     <div key={index}>
    //       <h5>
    //         <button onClick={() => handleEdit(index)}>Edit</button>
    //         {todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
    //     </div>)}
    // </div>
// <>
//   {todolist.map((todo, index) =>  //index is used to unique when use map property should be use key property(index)
//     <div key={index}>
//     {/* <input type="text" value={todo.title} className="list" onChange={(e) => e.preventDefault()}/> */}
//       {isClicked ? (<>
//         <input type="text" value={updatedValue} onChange={(e) => setUpdatedValue(e.target.value)} placeholder={todo}/> &nbsp;
//         <button onClick={() => deletehandler(index)}>Delete</button> &nbsp;&nbsp;
//         <button onClick={() => savehandler(index)}>Save</button>
//         <br/>
//       </>)
//         : (<>
//           {todo} &nbsp;
//           <button onClick={() => deletehandler(index)}>Delete</button> &nbsp;&nbsp;
//           <button onClick={() => updatehandler(index)}>Update</button>
//         </>)}

//     </div>
//   )}
// </>



//updatehandler, savehandler, isClicked , updatedValue , setUpdatedValue
//onChange={(e) => handleUpdate( index,e.target.value)}