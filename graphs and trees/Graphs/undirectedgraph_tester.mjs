import { UDGraph } from './Graphs';

function main(){

    // Create a undirected graph
    let uGraph = new UDGraph();

    // Lets add some nodes
    uGraph.addNode(1,"node 1");
    uGraph.addNode(2,"node 2");
    uGraph.addNode(3,"node 3");
    uGraph.addNode(4,"node 4");
    uGraph.addNode(5,"node 5");
    uGraph.addNode(6,"node 6");

    // Now lets connect the nodes with edges between them
    uGraph.addEdge(1,2,"weight 1");
    uGraph.addEdge(1,6,"weight 2");
    uGraph.addEdge(2,3,"weight 3");
    uGraph.addEdge(2,4,"weight 3");
    uGraph.addEdge(4,3,"weight 3");
    uGraph.addEdge(3,6,"weight 3");
    uGraph.addEdge(5,6,"weight 3");

    // Lets try to find path using DFS
    console.log("Graph Search using DFS");

    console.log(uGraph.hasPathDFS(1,3)); // true
    console.log(uGraph.hasPathDFS(2,6)); // true

    console.log(uGraph.hasPathDFS(1,7)); // false since 7 does not exist
    console.log(uGraph.hasPathDFS(1,5)); // false 

    // Lets try to find path using BFS
    console.log("Graph Search using BFS");

    console.log(uGraph.hasPathBFS(1,3)); // true
    console.log(uGraph.hasPathBFS(2,6)); // true

    console.log(uGraph.hasPathBFS(1,7)); // false since 7 does not exist
    console.log(uGraph.hasPathBFS(1,5)); // false 
    
}

main();