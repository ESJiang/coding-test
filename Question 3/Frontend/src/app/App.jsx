import React from "react";
import { connect } from "react-redux";
import { fetchBackendData } from "../actions/actions";
import { TreeNode } from "../components/TreeNode";

const App = ({ fetchBackendData, backendData }) => {
    return (
        <div>
            <button onClick={() => fetchBackendData()}>redux saga button</button>
            <TreeNode backendData={backendData} />
        </div>
    );
};

const mapStateToProps = state => ({
    backendData: state.backendData,
});

export default connect(mapStateToProps, {
    fetchBackendData,
})(App);
