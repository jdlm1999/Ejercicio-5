export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [ ...state, action.payload ];
		case 'delete':
			return [ ...state.filter((todo) => todo !== action.payload) ];
		case 'toggle':
			return [
				...state.map((todo) => {
					if (todo === action.payload) {
						if (action.payload.done === true) todo.done = false;
						else todo.done = true;
						console.log(action.payload.done);
					}
					return todo;
				})
			];
		default:
			return state;
	}
};
