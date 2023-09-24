const initialState = {
    backendData: null, // 初始为空
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BACKEND_DATA":
            return {
                ...state,
                backendData: action.payload,
            };
        default:
            return state;
    }
};
