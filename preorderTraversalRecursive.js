/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    return traversePreOrder(root,[]);
};

function traversePreOrder(root,list){
    if(!root){
        return [];
    }
    list.push(root.val);
    if(root.left){
        traversePreOrder(root.left,list);
    }
    if(root.right){
        traversePreOrder(root.right,list);
    }
    return list;
}
