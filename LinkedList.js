const Node = require('./Node')

const _head = new WeakMap()
const _tail = new WeakMap()

class LinkedList{
    constructor(value){
        const node = new Node(value)
        _head.set(this,node)
        _tail.set(this,node)
    }

    addToHead(val){
        const oldHead = _head.get(this);
        const newHead = new Node(val,oldHead);
        oldHead.prev = newHead;
        _head.set(this,newHead)
    }

    addToTail(val){
        const oldTail = _tail.get(this);
        const newTail = newNode(val,null,oldTail);
        oldTail.next = newTail;
        _tail.set(this,newTail);
    }

    removeHead(){
        const oldHead = _head.get(this);
        const newHead = oldHead.next; 
        if(this.length === 1) {
            console.error('list must contain at least 1 argument')
            return new Error(`list must contain at least 1 argument`)
        }
        
    }

    get length(){
        let node = _head.get(this);
        let length = 1;
        while(node.next !== null){
            length++;
        }
        return length;
    }
}