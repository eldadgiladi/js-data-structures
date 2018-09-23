const LinkedList = require('./LinkedList');

const ll = new LinkedList(5)

ll.addToHead(4)
ll.addToTail(6)
ll.addToHead(3)
ll.addToTail(7)
console.log(ll.search(6));
console.log(ll.toString());
ll.removeHead()
ll.removeHead()
ll.removeHead()
ll.removeTail()
ll.removeTail()
console.log(ll.toString());
console.log(ll.search(7));



