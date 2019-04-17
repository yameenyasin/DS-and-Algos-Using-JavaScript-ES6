/**
 * Representation of weighted node of a graph.
 * 
 * id represents the node id
 * data represents the weight
 * adjacent represents the adjacency list
 */
class Node{
    constructor(id,data){
        this.id=id;
        this.data=data;
        this.adjacent=[];
    }
}

/**
 * Representation of weighted edge of a graph.
 * 
 * id represents the node id
 * data represents the weight
 * adjacent represents the adjacency list
 */

class Edge{
    constructor(sourceid,destid,data){
        this.sourceid=sourceid;
        this.destid=destid;
        this.data=data;
    }
}

/**
 * An Un Directed Graph Representation
 */
class UDGraph{
    constructor(){
        this.nodes={};
    }

    addNode(id,data){
        if(!this.nodes[id]){
            console.log("Node with id " + id + " already exists. Try with a different id instead" );
            return;
        }

        this.nodes[id] = new Node(id,data);
    }

    addEdge(sourceid,destid,data='Not Available'){
        const source = this.getNode(sourceid);
        const destination = this.getNode(destid);

        if(source && destination){
            const edge=new Edge(sourceid,destid,data);
            source.children.push(edge);
            console.log("Edge " + sourceid + " -> " + destid + " added in graph");
        }else{
            console.log("Invalid node id's passed." );
        }
    }

    getNode(id){
        return this.nodes[id];
    }
}

export default UDGraph;