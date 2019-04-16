import BST from './BST';

function main(){

    // create the BST from sorted array
    const bst = new BST();

    // lets insert some testdata
    bst.insert(100);
    bst.insert(80);
    bst.insert(120);
    bst.insert(110);
    bst.insert(150);
    bst.insert(90);
    bst.insert(70);

    /**
     * now the tree looks like
     * 
     *                     100
     * 
     *           80                     120
     *      70          90         110        150
     */


    // Find Lowset Common ancestor
    let lca = bst.lowestCommonAncestor(70,90);
    console.log(lca.data) // should show 80

    lca = bst.lowestCommonAncestor(70,100);
    console.log(lca.data) // should show 100

    lca = bst.lowestCommonAncestor(90,110);
    console.log(lca.data) // should show 100

    lca = bst.lowestCommonAncestor(110,120);
    console.log(lca.data) // should show 120

    lca = bst.lowestCommonAncestor(100,110);
    console.log(lca.data) // should show 100

    lca = bst.lowestCommonAncestor(500,110);
    console.log(lca) // should show undefined, since it does not exist
}

main();