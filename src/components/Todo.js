import React from 'react';
import { TodoItem } from './TodoItem';
const onDelete = (ele) => {
	console.log('Deleted' + ele);
};
export const Todo = ({ todolist }) => {
	let style = {
		minHeight: '90vh',
		margin: '50px',
		marginLeft: '50px',
		marginRight: '50px',
	};
	return (
		<div style={style}>
			<h2 className='text-center font-weight-bold my-3'>Todo List</h2>
			{todolist.length === 0
				? 'No Todos To Display'
				: todolist.map(function (ele) {
						return <TodoItem todo={ele} key={ele.sno} onDelete={onDelete} />;
				  })}
		</div>
	);
};
