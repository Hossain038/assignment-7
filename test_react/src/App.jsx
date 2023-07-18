import  { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      
      />
      
      <button onClick={handleAddTodo}>Add</button>
      <br/>  
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}<br/>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
          
        ))}
      </ul>
     
    </div>
  );
}

export default TodoList;
