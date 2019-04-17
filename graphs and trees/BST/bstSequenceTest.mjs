import BST from './BST';

function main(){

    const testArr = [4,2,1,3,5,6,7];
    // create the BST from sorted array
    const bst = new BST();

    testArr.forEach(function(datum){
        bst.insert(datum);
    });

    
    /**
     * now the tree looks like
     * 
     *                     4
     * 
     *           2                     5
     *      1          3         6          7
     */


     bst.bstSequence();
    
}

main();