class MinHeap{
    constructor(){
        console.log("Constructor called..");
        this.items=new Array();
    }

    /** Helper methods */
    getParentIndex(index) {       return Math.floor((index-1)/2);              }
    getLeftChildIndex(index) {    return (2*index+1);                          }
    getRightChildIndex(index) {   return (2*index+2);                          }

    hasParent(index) {      return this.getParentIndex(index) >= 0;            }
    hasLeftChild(index) {   return this.getLeftChildIndex(index) < this.items.length;  }
    hasRightChild(index) {  return this.getRightChildIndex(index) < this.items.length; }

    parent(index) {               return this.items[this.getParentIndex(index)];          }
    leftChild(index) {            return this.items[this.getLeftChildIndex(index)];       }
    rightChild(index) {           return this.items[this.getRightChildIndex(index)];      }

    swap(p,c){
        let t = this.items[p];
        this.items[p] = this.items[c];
        this.items[c] = t;
    }

    heapifyUp(){
        if(this.items.length === 0){
            return;
        }

        let index=this.items.length-1;
        let item = this.items[this.items.length-1];
        while(this.hasParent(index)){
            if(this.parent(index) > item ){
                this.swap(this.getParentIndex(index),index);
                index = this.getParentIndex(index);
            }else{
                break;
            }
        }
    }

    heapifyDown(){
        if(this.items.length === 0){
            return;
        }

        let index=0;

        while(this.hasLeftChild(index)){
            let small = this.getLeftChildIndex(index);

            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                small = this.getRightChildIndex(index);
            }

            if(this.items[index] > this.items[small] ){
                this.swap(index,small);
                index=small;
                continue;
            }

            break;
            
        }
    }

    /** Min heap operations */
    peak(){
        if(this.items.length === 0){
            console.log("Invalid Operation. Heap is empty");
            return;
        }

        return this.items[0];
    }

    poll(){
        let size = this.items.length;
        if( size === 0){
            console.log("Invalid Operation. Heap is empty");
            return;
        }
        let el = this.items[0];
        this.items[0] = this.items[size - 1];
        this.items.length--;

        this.heapifyDown();
        return el; 
    }

    add(el){
        console.log(this.items);

        this.items[this.items.length] = el;
        this.heapifyUp();
    }
}

function main(){

    let minHeap = new MinHeap();

    minHeap.add(10);
    minHeap.add(9);
    minHeap.add(8);
    minHeap.add(17);
    minHeap.add(6);
    minHeap.add(19);

    console.log("Peak is ", minHeap.peak());
    
    minHeap.add(1);

    console.log("Peak is ", minHeap.peak());

    console.log("Remove smallest item : ", minHeap.poll());

    console.log("Peak is ", minHeap.peak());
}

main();

/**
 * Run Command
 * node --experimental-modules minheap.mjs
 */