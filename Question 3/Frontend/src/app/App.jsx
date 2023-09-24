// App.jsx
import React from "react";
import { connect } from "react-redux";
import { fetchBackendData } from "../actions/actions";

const App = ({ fetchBackendData }) => {
    const handleClick = () => {
        fetchBackendData();
    };

    return (
        <div>
            <button onClick={handleClick}>Fetch Backend Data</button>
            <div>{}</div>
        </div>
    );
};

const mapDispatchToProps = {
    fetchBackendData,
};

export default connect(null, mapDispatchToProps)(App);
