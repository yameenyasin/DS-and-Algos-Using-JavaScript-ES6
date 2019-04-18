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
 * A Directed Graph Representation
 */
export class DGraph{
    constructor(){
        this.nodes={};
    }

    addNode(id,data){
        if(this.nodes[id]){
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
            source.adjacent.push(edge);
            console.log("Edge " + sourceid + " -> " + destid + " added in graph");
        }else{
            console.log("Invalid node id's passed." );
        }
    }

    getNode(id){
        return this.nodes[id];
    }

    hasPathDFS(sourceid,destid){
        let s = this.getNode(sourceid);
        let d = this.getNode(destid);

        // if the nodes exist
        if(s && d){
            let visited = new Set();
            return this.DFS(s,d,visited);
        }

        return false;
    }

    DFS(source,dest,visited){
        if(visited.has(source.id)){
            return false;
        }

        visited.add(source.id);

        if(source === dest){
            return true;
        }else{
            
            for(let i=0; i<source.adjacent.length; i++){
                if(this.DFS(this.nodes[source.adjacent[i].destid],dest,visited) === true){
                    return true;
                }
            }
        }
        return false;
    }

    hasPathBFS(sourceid,destid){
        let nextToVisit=[];      // Queue Impementation using push and shift operations 
        let visited = new Set();
        let source = this.getNode(sourceid);
        let dest = this.getNode(destid);

        // if the nodes exist
        if(!source || !source){
            return false;
        }

        nextToVisit.push(source);

        while(nextToVisit.length > 0){
            let node = nextToVisit.shift();

            if(node === dest){
                return true;
            }

            if(visited.has(node.id)){
                continue;
            }

            visited.add(node.id);

            for(let i=0; i<node.adjacent.length; i++){
                nextToVisit.push(this.nodes[node.adjacent[i].destid]);
            }
        }

        return false;
    }
}