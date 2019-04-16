/**
 * Given a sorted - increasing order array with unique integers, 
 * create a BST with minimal height.
 *
 */

 import BST from './BST';

function main(){
    const input = [1,2,3,4,5,6,7];
    const bst = new BST();

    bst.createMinimalBST(input);

    //console.log(bst.root);
}


main();