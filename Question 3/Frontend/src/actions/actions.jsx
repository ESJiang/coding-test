// actions.js
export const fetchBackendData = () => ({
    type: "FETCH_BACKEND_DATA",
});

export const setBackendData = data => ({
    type: "SET_BACKEND_DATA",
    payload: data,
});
