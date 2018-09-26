const BST =  require('./BST');




const bst = new BST(100);
bst.insert(10);
bst.insert(20);
bst.insert(800);
bst.insert(75);
bst.insert(19);

console.log('====================================');
console.log(bst.value);
console.log('====================================');

bst.breadthFirstTraversal()