// CategoryDisplay.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "./actions";

const CategoryDisplay = ({ categories, fetchCategories }) => {
    useEffect(() => {
        // 在组件加载时触发获取数据操作
        fetchCategories();
    }, [fetchCategories]);

    return (
        <div>
            {categories.map(category => (
                <div key={category.categoryId}>{category.name}</div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    categories: state.categories,
});

const mapDispatchToProps = {
    fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
