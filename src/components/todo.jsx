import { useState } from 'react';
import Task from './task';

const Todo = () => {
	const [items, setItems] = useState([]);

	const addTask = (event) => {
		event.preventDefault();
		const task = event.target[0].value;
		if (task !== '') setItems([...items, { id: Date.now(), title: task }]);
		event.target[0].value = '';
	};

	const deleteTask = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const clearAll = () => {
		setItems([]);
	};

	return (
		<div className='todo'>
			<form onSubmit={addTask}>
				<input type='text' name='task'></input>
				<button type='submit'>Add Task</button>
			</form>

			{items.map((item) => {
				return (
					<Task key={item.id} id={item.id} title={item.title} handleClick={deleteTask} />
				);
			})}
			<button onClick={clearAll}>Clear</button>
		</div>
	);
};

export default Todo;
