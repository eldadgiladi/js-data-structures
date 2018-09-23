const _next = new WeakMap(), _prev = new WeakMap()

class Node {
    constructor(val, next = null, prev = null) {
        this.value = val;
        this.prev = prev;
        this.next = next;
    }

    set prev(prev) {
        if (prev !== null && prev.constructor !== Node) throw new Error(`prev must be from type node or null`)
        _prev.set(this, prev)
    }

    get prev() {
        return _prev.get(this)
    }

    set next(next) {
        if (next !== null && next.constructor !== Node) throw new Error(`next must be from type node or null`)
        _next.set(this, next)
    }

    get next() {
        return _next.get(this)
    }
}

module.exports = Node;