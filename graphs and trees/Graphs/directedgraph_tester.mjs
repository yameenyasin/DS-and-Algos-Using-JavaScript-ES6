import { DGraph } from './Graphs';

function main(){

    // Create a undirected graph
    let dGraph = new DGraph();

    // Lets add some nodes
    dGraph.addNode(1,"node 1");
    dGraph.addNode(2,"node 2");
    dGraph.addNode(3,"node 3");
    dGraph.addNode(4,"node 4");
    dGraph.addNode(5,"node 5");
    dGraph.addNode(6,"node 6");

    // Now lets connect the nodes with edges between them
    dGraph.addEdge(1,2,"weight 1");
    dGraph.addEdge(1,6,"weight 2");
    dGraph.addEdge(2,3,"weight 3");
    dGraph.addEdge(2,4,"weight 3");
    dGraph.addEdge(4,3,"weight 3");
    dGraph.addEdge(3,6,"weight 3");
    dGraph.addEdge(5,6,"weight 3");

    // Lets try to find path using DFS
    console.log("Graph Search using DFS");

    console.log("1 -> 3", dGraph.hasPathDFS(1,3)); // true
    console.log("2 -> 6", dGraph.hasPathDFS(2,6)); // true

    console.log("1 -> 7", dGraph.hasPathDFS(1,7)); // false since 7 does not exist
    console.log("1 -> 5", dGraph.hasPathDFS(1,5)); // false 
    console.log("6 -> 1", dGraph.hasPathDFS(6,1)); // false 

    // Lets try to find path using BFS
    console.log("Graph Search using BFS");

    console.log("1 -> 3", dGraph.hasPathBFS(1,3)); // true
    console.log("2 -> 6", dGraph.hasPathBFS(2,6)); // true

    console.log("1 -> 7", dGraph.hasPathBFS(1,7)); // false since 7 does not exist
    console.log("1 -> 5", dGraph.hasPathBFS(1,5)); // false 
    console.log("6 -> 1", dGraph.hasPathBFS(6,1)); // false  
    
}

main();

/**
 * Run Command
 * node --experimental-modules directedgraph_tester.mjs
 */