import React, { useState } from 'react';

const Update = ({ todolist, deleteHandler, updateHandler }) => {
  const [editMode, setEditMode] = useState({});

  const handleEdit = (indexValue) => {
    setEditMode({ ...editMode, [indexValue]: true });
  };

  const handleUpdate = (indexValue, updatedValue) => {
    const newTodos = [...todolist];
    newTodos[indexValue] = updatedValue;
    setEditMode({ ...editMode, [indexValue]: false });
    updateHandler(newTodos);
  };

  return (
    <div>
      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>
            {editMode[index] ? (
              <div>
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => handleUpdate(index, e.target.value)}
                />
                <button onClick={() => setEditMode({ ...editMode, [index]: false })}>Cancel</button>
                <button onClick={() => handleUpdate(index, todo)}>Update</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Update;