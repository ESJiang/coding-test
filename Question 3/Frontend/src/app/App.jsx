import React from "react";
import { connect } from "react-redux";
import { fetchBackendData } from "../actions/actions";
import { DropMenu } from "../components/DropMenu";

const App = ({ fetchBackendData, backendData }) => (
    <div>
        <button onClick={fetchBackendData}>redux-saga button</button>
        <DropMenu backendData={backendData} />
    </div>
);

const mapStateToProps = state => ({
    backendData: state.backendData,
});

export default connect(mapStateToProps, {
    fetchBackendData,
})(App);
