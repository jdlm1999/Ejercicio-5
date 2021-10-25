import React from 'react';

export const TodoListItem = ({ todo, index, delTodo, togl }) => {
	return (
		<li key={todo.id} className="list-group-item">
			<p
				onClick={(e) => {
					e.preventDefault();
					togl(todo);
          console.log('click');
				}}
				style={{ textDecoration: todo.done === true ? 'line-through' : "None" }}
			>
				{index + 1}. {todo.desc}
			</p>
			<button
				className="btn btn-danger"
				onClick={(e) => {
					e.preventDefault();
					delTodo(todo);
				}}
			>
				Borrar
			</button>
		</li>
	);
};
