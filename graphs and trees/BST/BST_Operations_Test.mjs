import BST from './BST';

/**
 * Main Program
 */

 function main(){
     const bst = new BST();

     // Insert random data in BST
     //  for(let i = 0; i < 10 ; i++){
     //      let random = Math.floor((Math.random() * 50) + i + 1);
     //      console.log("Operation insert. Item = ", random);
     //      bst.insert(random);
     //  }

    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(3);
    bst.insert(1);
    bst.insert(5);
    bst.insert(7);


     // Pre Order Tree tresersal
     bst.preorder();
     // In Order Tree tresersal
     bst.inorder();
     // Post Order Tree tresersal
     bst.postorder();
     //Print the values of BST in the order of depths
     bst.listDepths(); 

 }

 main();

 /**
 * Run Command
 * node --experimental-modules BST_Operations_Test.mjs
 */