export const rootReducer = (state = { backendData: null }, action) => (action.type === "SET_BACKEND_DATA" ? { ...state, backendData: action.payload } : state);
