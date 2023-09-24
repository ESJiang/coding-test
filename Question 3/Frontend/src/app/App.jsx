import React from "react";
import { connect } from "react-redux";
import { fetchBackendData } from "../actions/actions";

const App = ({ fetchBackendData, backendData }) => {
    return (
        <div>
            <button
                onClick={() => {
                    fetchBackendData();
                }}
            >
                redux saga button
            </button>
            <div>{backendData}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        backendData: state.backendData,
    };
};

export default connect(mapStateToProps, {
    fetchBackendData,
})(App);
