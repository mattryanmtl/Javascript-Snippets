/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    return traversePostOrder(root,[]);
};

function traversePostOrder(root,list){
    if(!root){
        return [];
    }
    if(root.left){
        traversePostOrder(root.left,list);
    }
    if(root.right){
        traversePostOrder(root.right,list);
    }
    list.push(root.val);
    return list;
}
