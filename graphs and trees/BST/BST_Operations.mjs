import BST from './BST';

/**
 * Main Program
 */

 function main(){
     const bst = new BST();

     // Insert random data in BST
     for(let i = 0; i < 10 ; i++){
         let random = Math.floor((Math.random() * 50) + i + 1);
         console.log("Operation insert. Item = ", random);
         bst.insert(random);
     }

     // Pre Order Tree tresersal
     bst.preorder();
     // In Order Tree tresersal
     bst.inorder();
     // Post Order Tree tresersal
     bst.postorder();
 }

 main();