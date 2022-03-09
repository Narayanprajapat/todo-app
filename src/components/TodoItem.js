import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
	let style = {
		margin: '20px auto',
		backgroundColor: '#dadada',
		padding: '20px',
	};
	console.log(todo);
	return (
		<div style={style}>
			<h4>{todo.title}</h4>
			<p>{todo.desc}</p>
			<button type='button' className='btn btn-sm btn-danger' onClick={onDelete}>
				Delete
			</button>
			<hr />
		</div>
	);
};
