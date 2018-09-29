const BST =  require('./BST');
const HashTable = require('./HashTable')



// const bst = new BST(100);
// bst.insert(10);
// bst.insert(20);
// bst.insert(800);
// bst.insert(75);
// bst.insert(19);


const ht = new HashTable(30)

ht.insert('Eldad', "3ldad1@gmail.com")
ht.insert('Eldda', "eldadgiladi@gmail.com")
ht.insert('Sagi', "Sagi@gmail.com")
ht.insert('Itzik', "Itzik@gmail.com")

console.log(ht.retrieveAll())