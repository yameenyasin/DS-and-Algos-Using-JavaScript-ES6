import { DGraph } from './Graphs';

function tsRunner(){

    let dGraph = new DGraph();

    // Lets add some nodes
    dGraph.addNode('A',"node 1");
    dGraph.addNode('B',"node 2");
    dGraph.addNode('C',"node 3");
    dGraph.addNode('D',"node 4");
    dGraph.addNode('E',"node 5");
    dGraph.addNode('F',"node 6");
    dGraph.addNode('G',"node 6");

    // Now lets connect the nodes with edges between them
    dGraph.addEdge('A','C',null);

    dGraph.addEdge('B','C',null);
    dGraph.addEdge('B','D',null);
    
    dGraph.addEdge('C','E',null);
    dGraph.addEdge('E','F',null);
    dGraph.addEdge('F','G',null);

    /** Print the nodes in their topological sort order */
    dGraph.topologicalSort(); // [ 'B', 'D', 'A', 'C', 'E', 'F', 'G' ]
}

tsRunner();

/**
 * Run Command
 * node --experimental-modules tsRunner.mjs
 */