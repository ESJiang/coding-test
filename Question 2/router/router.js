const { Router } = require("express");
const router = Router();
const categroies = require("../categories.json");

// convert data from array to tree
function convertArrayToTree(categories) {
    const [itemMap, tree] = [new Map(), []];
    categories.forEach(item => {
        item.children = [];
        itemMap.set(item.categoryId, item);
        // judge if the current item parent exists in itemMap
        itemMap.has(item.parent) ? itemMap.get(item.parent).children.push(item) : tree.push(item);
    });
    return {
        categoryId: "root",
        name: "Root Category",
        parent: null,
        children: tree,
    };
}

router.get("/", (req, res) => res.status(200).json({ msg: "fetch data successful", data: convertArrayToTree(categroies) }));
module.exports = router;
