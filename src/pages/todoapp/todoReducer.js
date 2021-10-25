export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];
		case 'delete':
			return [...state.filter((todo) => todo !== action.payload)];
		case 'toggle':
			return state.map((todo) => {
				if(todo.id === action.payload.id){
					return {
						...todo,
						done: !action.payload.done
					}
				}
				return todo;
			})
		default:
			return state;
	}
};
