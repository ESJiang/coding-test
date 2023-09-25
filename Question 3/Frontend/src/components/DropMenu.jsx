import React from "react";
import { TreeSelect } from "antd";
const { TreeNode } = TreeSelect;

// Function Components to display tree data (check if redux store works)
// export const DropMenuTest = ({ backendData }) => (
//     <div>
//         {backendData && (
//             <div>
//                 <h2>categoryId: {backendData.categoryId}</h2>
//                 <h2>name:{backendData.name}</h2>
//                 <h2>parent:{backendData.parent}</h2>
//                 <h2>children length: {backendData.children.length}</h2>
//                 {backendData.children.length > 0 && (
//                     <ul>
//                         {backendData.children.map(child => (
//                             <li key={child.categoryId}>
//                                 <DropMenuTest backendData={child} />
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         )}
//     </div>
// );

export const DropMenu = ({ backendData }) => {
    if (backendData) {
        const convertToTreeData = data => {
            let nodeCount = 0;
            const createNode = node => {
                // console.log("Node Data:", node);
                let nodeName;
                !node.parent ? (nodeName = `Node ${++nodeCount}`) : (nodeName = `Child Node${++nodeCount}`);
                const treeNode = {
                    key: node.categoryId,
                    value: node.categoryId,
                    name: nodeName,
                    parent: node.parent,
                };
                if (node.children.length > 0) {
                    treeNode.children = node.children.map(createNode);
                }
                return treeNode;
            };
            return [createNode(data)];
        };
        const treeData = convertToTreeData(backendData);
        console.log("treedata", treeData);
        const renderTreeNodes = data => {
            return data.map(node => (
                <TreeNode key={node.key} value={node.value} title={node.name}>
                    {node.children && node.children.length > 0 && renderTreeNodes(node.children)}
                </TreeNode>
            ));
        };
        function handleNodeSelect(value) {
            alert(`The CategoryId is: ${value}`);
        }
        return (
            <TreeSelect onChange={handleNodeSelect} showSearch style={{ width: "100%" }} dropdownStyle={{ maxHeight: 400, overflow: "auto" }} placeholder='Select Category' allowClear>
                {renderTreeNodes(treeData)}
            </TreeSelect>
        );
    }
};
