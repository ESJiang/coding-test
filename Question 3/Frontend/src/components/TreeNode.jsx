export const TreeNode = ({ backendData }) => (
    <div>
        {backendData && (
            <div>
                <h2>categoryId: {backendData.categoryId}</h2>
                <h2>name:{backendData.name}</h2>
                <h2>parent:{backendData.parent}</h2>
                <h2>children length: {backendData.children.length}</h2>
                {backendData.children.length > 0 && (
                    <ul>
                        {backendData.children.map(child => (
                            <li key={child.categoryId}>
                                <TreeNode backendData={child} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )}
    </div>
);
