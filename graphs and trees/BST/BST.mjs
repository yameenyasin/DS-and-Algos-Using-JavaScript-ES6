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

    /**
     * BST Sequence: A binary search tree was created by traversing an array
     * from left to right, and insertug each element. Given a BST with distinct eleents
     * print all possible arrays that could have led to this tree.
     */

    //  bstSequence(){
    //     const arr = []
    //     this.findBSTSequence(this.root,arr);

    //     console.log(arr);
    //  }

    //  findBSTSequence(node,arr){

    //     if(node === null){
    //         return;
    //     }

    //     const vlrData = [];
    //     this.findVLR(node,vlrData);

    //     const vrlData = [];
    //     this.findVRL(node,vrlData);

    //     //arr.push([...vlrData,...vrlData]);

    //     console.log(vlrData.toString());
    //     console.log(vrlData.toString());
    //  }

    //  findVLR(node,arr){
    //     if(node === null){
    //         return;
    //     }

    //     arr.push(node.data);
    //     this.findBSTSequence(node.left,arr);
    //     this.findBSTSequence(node.right,arr);
    //  }

    //  findVRL(node,arr){
    //     if(node === null){
    //         return;
    //     }

    //     arr.push(node.data);
    //     this.findBSTSequence(node.right,arr);
    //     this.findBSTSequence(node.left,arr);
    //  }

    /**
     * Print the values of BST in the order of depths
     */
    listDepths(){
        if(!this.root){
            return;
        }

        let node = this.root;
        let level=0;
        let nextItems=[];

        nextItems.push([node]);

        while(nextItems.length > 0 && nextItems[0].length > 0){
            let temp = nextItems.shift();

            let len = nextItems.length;
            nextItems[0] = [];

            console.log("Printing level ",level);

            for(let i=0; i<temp.length;i++){
                console.log(temp[i].data);
                
                // push the left sub tree
                if(temp[i].left){
                    nextItems[0].push(temp[i].left);
                }
                // push the right sub tree
                if(temp[i].right){
                    nextItems[0].push(temp[i].right);
                }
            }
            // increeament the level counter
            level++;
        }
    }


}

export default BST;