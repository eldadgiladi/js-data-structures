const HashNode = require('./HashNode');


class HashTable {
    constructor(size) {
        this.buckets = Array(size);
    }

    get numBucket() {
        return this.buckets.length
    }

    hash(key){
        let sum = 0;
        for(let i=0;i<key.length;i++){
            sum+=key.charCodeAt(i);
        }

        return sum%this.numBucket;
    }

    insert(key,val){
        const index = this.hash(key); 
        if(!this.buckets[index]) this.buckets[index] = new HashNode(key,val);
        else if(this.buckets[index].key === key){
            this.buckets[index].val = val;
            return;
        }
        else{
            let hn = this.buckets[index];
            while(hn.next){
                if(hn.key === key) {
                    hn.val = val;
                    return hn;
                }
                hn = hn.next
                
            }
            hn.next= new HashNode(key,val)
        }       
    }

    get(key){
        const index = this.hash(key);
        let node = this.buckets[index];
        while(node && node.key !== key ){
            node = node.next;
        }
        if(node) return node.val;
        return null;
    }

    retrieveAll(){
        const array = []
        for(let i=0;i<this.buckets.length;i++){
            let currentNode = this.buckets[i]
            while(currentNode){
                array.push(currentNode);
                currentNode = currentNode.next;
            }
        }
        return array;
    }
}

module.exports = HashTable;