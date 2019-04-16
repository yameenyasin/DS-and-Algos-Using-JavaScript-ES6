# Data Structures and Algorithms using JavaScript ES6

Inorder to run the scripts directly using nodejs and use the ES6 Syntax, node js has included experimantal support for ES6.

## Progamming Language
1. JavaScript ( ES6 )
2. You can install a latest version of NodeJS to run the programs directly.

## Rules to be followed
1. Name the files with mjs extension.
2. Use the following command to run the script
    `node --experimental-modules script.mjs`


# Chapter 1: Linked List

## Singly Linked List
    1. SinglyLinkedList.mjs: Base class for creating a Linked List Node
    2. SLLOperations.mjs: Varios Operations on Singly Linked List


# Chapter 2: Trees and Graphs

## Trees
    1. A Tree Data Structure is composed of nodes.
        A. Every Tree has a root node.
        B. Root node has zero or more child nodes.
        C. Each child node has zero or more child nodes and so on.
        D. A Tree cannot contain cycles.

### Types of Trees
1. Binary Tree: Is a tree in which every node has upto 2 children.
2. Binary Search Tree: A binary tree which follows an order where value of every left child is less than the value of root and value of every right child is greater than the value of root. 
3. Balanced Tree: Operations can be perform in more or less O(log n ) time. Two types  - Red Black Tree and AVL tree 
4. Complete Binary Tree: Every level of the tree is completely filled, except for the last but should be filled from Left to Right. 
5. Full Binary Tree: Every node has zero or 2 children.
6. Perfect Binary Tree: Is both Complete as well as Full. Has 2^k-1 nodes. 