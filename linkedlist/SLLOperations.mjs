
import SinglyLinkedListNode from './SinglyLinkedList.mjs';

/**
 * Remove Dupliocates from an unsorted linked list using a temp buffer.
 * Time Complexity: O(n)
 * Space Complexity: Worst Case O(n) For storing the extra buffer in the form of hash set
 */
const removeDups = (List) =>{
    if(!List.Head){
        return;
    }

    let temp = List.Head;
    const hashSet= new Set();
    
    if(temp){
        hashSet.add(temp.data);
    }else{
        return;
    }

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
            hashSet.add(temp.data);
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
const print = (List) => {
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
    
    print(List);

}

main();