const Node = require('./Node')

const _head = new WeakMap()
const _tail = new WeakMap()

class LinkedList {
    constructor(value) {
        const node = new Node(value)
        _head.set(this, node)
        _tail.set(this, node)
    }

    addToHead(val) {
        const oldHead = _head.get(this);
        const newHead = new Node(val, oldHead);
        oldHead.prev = newHead;
        _head.set(this, newHead)
    }

    addToTail(val) {
        const oldTail = _tail.get(this);
        const newTail = new Node(val, null, oldTail);
        oldTail.next = newTail;
        _tail.set(this, newTail);
    }

    removeHead() {
        const oldHead = _head.get(this);
        const newHead = oldHead.next;
        if (this.length <= 1) {
            console.error('list must contain at least 1 argument')
            return new Error(`list must contain at least 1 argument`)
        }
        oldHead.prev = null;
        _head.set(this, newHead);
        return oldHead.value
    }

    removeTail() {
        const oldTail = _tail.get(this);
        const newTail = oldTail.prev;
        if (this.length <= 1) {
            console.error('list must contain at least 1 argument')
            return new Error(`list must contain at least 1 argument`)
        }
        newTail.next = null;
        _tail.set(this,newTail);
        return oldTail.value;
    }

    get length() {
        let node = _head.get(this);
        let length = 1;
        while (node.next !== null) {
            length++;
            node = node.next
        }
        return length;
    }

    toString(){
        let node = _head.get(this);
        let string = '';
        while(node.next !== null){
            string += node.value+', '
            node = node.next;
        }
        string += node.value
        return string;
    }

    search(val){
        let node = _head.get(this)
        while(node !== null){
            if(node.value === val) return true;
            node = node.next;
        }
        return false;
    }

}

module.exports = LinkedList;