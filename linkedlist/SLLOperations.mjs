
import SinglyLinkedListNode from './SinglyLinkedList.mjs';

/**
 * Delete any node in the middle given only access to that node.
 * @param List 
 * @param value 
 */
const deleteMiddleNode = ( node ) => {
    let temp = node.next;
    node.data = temp.data;
    node.next = temp.next;

    // garbage collect the temp node
    temp = null;
}

/**
 * Return the kth to last element using iterative approach.
 * In this approach we will use  pointers. 
 * @param List 
 * @param k 
 */
const kthToLastIterative = (List,k) => {
    let p1=List.Head;
    let p2=List.Head;

    // Move the p1 to k positions
    for(let i=0; i < k ; i++){

        if(!p1){
            return;
        }
        p1=p1.next;
    }

    // Now move both p1 and p2 at same speed.
    while(p1){
        p1=p1.next;
        p2=p2.next;
    }

    if(p2){
        console.log(`${k}th to the last element is: ${p2.data}`);
    }
    
}
/**
 * return the kth to last element when length is not known.
 * For k = 1, return last element, k = 2 return 2nd last element and so on.
 * 
 * @param k 
 */
const kthLastElement = (node,k,kthLast) => {
    if(!node){
        return 0;
    }else{
        const revLen = 1 + kthLastElement(node.next,k,kthLast);

        if(revLen === k){
            console.log("kth to last element is ", node.data);
            kthLast[0] = node;
        }

        return revLen;
    }
}

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
    let output="";
    while(temp) {
        //console.log(temp.data);
        output += `${temp.data} -> `
        temp=temp.next;
    }

    output += ' null';
    console.log(output);
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

    //Print kth to last elem.
    const kthLast=[];
    kthLastElement(List.Head,4,kthLast);
    console.log(kthLast.length > 0 ? "4th to the last element is: " + kthLast[0].data : "Could not be determined.");


    //Delete any middle node
    console.log("Before Delete Middle Node operation.");
    print(List);

    deleteMiddleNode(List.Head.next);

    console.log("After Delete Middle Node operation.");
    print(List);

    // Iterative
    kthToLastIterative(List,5);
}

main();