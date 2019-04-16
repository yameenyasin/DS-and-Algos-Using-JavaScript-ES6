import Node from './Node'
/**
 * BST Implementation
 */
class BST {
    constructor(){
        this.root=null;
    }

    /**
     * Insert a node in binary search tree.
     * Time Complexity for balanced binary tree is O(log n);
     * @param data 
     */
    insert(data){
        const node = new Node(data);

        if(this.root === null){
            this.root = node;
            return;
        }

        let temp = this.root;
        while(temp){
            if(temp.data > data){
                if(temp.left === null){
                    temp.left=node;
                    break;
                } else temp=temp.left;
            }else {
                if(temp.right === null){
                    temp.right=node;
                    break;
                } else temp=temp.right;
            }
        }
    }

    /**
     * Search Node in BST
     */
    search(){

    }

    /**
     * Delete a node in BST
     */
    delete(){

    }

    /**
     * Pre Order Treversal. 
     */
    preorder(){
        console.log("Printing the node values using pre-order display");
        this.preorderRec(this.root);
    }

    preorderRec(node){
        if(!node){
            return;
        }
        // display the node value
        console.log(node.data);
        // visit left sub-tree
        this.preorderRec(node.left);
        // visit right sub-tree
        this.preorderRec(node.right);
    }

    /**
     * In Order Trevarsal
     */
    inorder(){
        console.log("Printing the node values using in-order display");
        this.inorderRec(this.root);
    }

    inorderRec(node){
        if(!node){
            return;
        }
        // visit left sub-tree
        this.preorderRec(node.left);
        // display the node value
        console.log(node.data);
        //visit right sub-tree
        this.preorderRec(node.right);
    }

    /**
     * Post Order Treversal
     */
    postorder(){
        console.log("Printing the node values using post-order display");
        this.postorderRec(this.root);
    }

    postorderRec(node){
        if(!node){
            return;
        }
        // visit left sub-tree
        this.preorderRec(node.left);
        //visit right sub-tree
        this.preorderRec(node.right);
        // display the node value
        console.log(node.data);
    }

    /**
     * Creates a minimal BST from a sorted list of array
     * @param arr 
     */
    createMinimalBST(arr){
        this.root=this.createBST(arr,0,arr.length -1);
    }

    createBST(arr,lo,hi){
        if(hi < lo){
            return null;
        }

        let mid=Math.floor((lo+hi)/2);
        const node = new Node(arr[mid]);

        node.left=this.createBST(arr,lo,mid-1);
        node.right=this.createBST(arr,mid+1,hi);

        return node;
    }
    /**
     * Lowest Common Ancestor
     */
    lowestCommonAncestor(v1,v2){

        return this.findLCA(this.root,v1,v2);

    }

    findLCA(node,v1,v2){
        if(node === null){
            return;
        }

        if(v1 <= node.data && v2 >= node.data){
            return node;
        }

        else if(v1 < node.data && v2 < node.data){
            return this.findLCA(node.left,v1,v2);
        }

        else if(v1 > node.data && v2 > node.data){
            return this.findLCA(node.right,v1,v2);
        }
    }


}

export default BST;