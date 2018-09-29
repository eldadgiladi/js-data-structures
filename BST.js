class BST {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        let NextNode;
        if (val <= this.value) {
            if (!this.left) {
                this.left = new BST(val);
                return this.left;
            }
            NextNode = this.left;
        }
        else {
            if (!this.right) {
                this.right = new BST(val);
                return this.right;
            }
            NextNode = this.right;
        }
        NextNode.insert(val)

    }

    contains(value) {
        let nextNode;
        if (value === this.value) return true;
        if (value < this.value) nextNode = this.left;
        else nextNode = this.right;

        return !(!nextNode || !nextNode.contains(value))
    }


    depthFirstTraversal(iteratorFunc = val => console.log(val), order = "in-order") {
        if (order === 'pre-order') iteratorFunc(this.value);
        if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
        if (order === 'in-order') iteratorFunc(this.value);
        if (this.right) this.right.depthFirstTraversal(iteratorFunc, order)
        if (order === 'post-order') iteratorFunc(this.value);
    }

    breadthFirstTraversal(iteratorFunc = val => console.log(val)) {
        const queue = [this];
        while (queue.length) {
            const treeNode = queue.shift();
            iteratorFunc(treeNode.value);
            if (treeNode.left) queue.push(treeNode.left);
            if (treeNode.right) queue.push(treeNode.right);
        }

    }

    getMinVal() {
        if (this.left) return this.left.getMinVal();
        return this.value;
    }


    getMaxVal(){
        if (this.right) return this.right.getMinVal();
        return this.value;
    }

    toString() {
        
    }
}

module.exports = BST;