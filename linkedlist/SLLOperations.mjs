
import SinglyLinkedListNode from './SinglyLinkedList.mjs';

/**
 * 
 * @param List 
 * Remove Duplicates from an unsorted linked list without using buffer.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * 
 */
const removeDupsNoBuffer = List => {
    // Empty check
    if(!List.Head){
        return;
    }

    let current=List.Head;
    
    while(current){

        let runner=current;
        // iterate all furture nodes and remove all future nodes that have same value
        while(runner.next){

            if(current.data === runner.next.data ){
                let temp = runner.next;

                // reset the tail
                if(temp === List.Tail){
                    List.Tail=runner;
                }

                // adjust the pointer to the next node
                runner.next = temp.next;

                // garbage collect the deleted node
                temp=null;    
                
            }else{
                runner=runner.next;
            }
        }
        current = current.next;
    }

}

/**
 * Remove Duplicates from an unsorted linked list using a temp buffer.
 * Time Complexity: O(n)
 * Space Complexity: Worst Case O(n) For storing the extra buffer in the form of hash set
 */
const removeDups = List =>{
    if(!List.Head){
        return;
    }

    let temp = List.Head;

    const hashSet= new Set();
    hashSet.add(temp.data);

    while(temp.next){
        
        if(hashSet.has(temp.next.data)){
            // Duplicate entry detected. 
            let curr = temp.next;
            
            if(curr === List.Tail){
                List.Tail=temp;
            }
            
            temp.next = temp.next.next;

            // garbage collect the curr by setting it to null
            curr=null;
        }else{
            hashSet.add(temp.next.data);
            temp = temp.next;
        }

    }
}

/**
 * 
 * @param Head : Linked List Head
 * @param datum : New Element inserted in list at tail
 */
const insert = (List,datum) => {
    const node = new SinglyLinkedListNode(datum);

    if(!List.Head){
        List.Head= List.Tail = node;
    }else{
        List.Tail.next = node;
        List.Tail = node;
    }
}

/**
 * Print List
 */
const print = List => {
    let temp = List.Head;

    while(temp) {
        console.log(temp.data);
        temp=temp.next;
    }
}

/**
 * Main program
 */
const main = () => {
    const testData= [23,4,5,4,23,8,9,11,12,11,23];

    const List = {
        Head:null,
        Tail: null
    }

    testData.forEach( datum => {
        insert(List,datum);
    })

    removeDups(List);

    //removeDupsNoBuffer(List);

    print(List);

}

main();