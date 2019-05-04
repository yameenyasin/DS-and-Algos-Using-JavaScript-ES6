/**
 * Representation of weighted node of a graph.
 * 
 * id represents the node id
 * data represents the node weight
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
 * sourceid represents the node id of source node
 * destid represents the node id of destination node
 * data represents the weight on edge
 */

class Edge{
    constructor(sourceid,destid,data){
        this.sourceid=sourceid;
        this.destid=destid;
        this.data=data;
    }
}

/**
 * A Directed Graph Representation.
 * Both Nodes and Edges have weights. :) 
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

    /** Detect Cycle in Directed Graph */
    isCyclic(){
        // set of all unvisited nodes
        let whiteSet = Object.keys(this.nodes);
        // set of currently visiting nodes
        let greySet = new Set();
        // set of all visited nodes
        let blackSet = new Set();

        // Iterate through white set untill it is empty
        while( whiteSet.length > 0){
            // lets take the first node
            let curr = whiteSet.shift();
            if(this.detectCycleDFS(curr,whiteSet,greySet,blackSet)){
                return true;
            }
        }
        return false;
    }
    // helper method to find cycle using DFS
    detectCycleDFS(curr,whiteSet,greySet,blackSet){
        // node and its children are already visited
        if(blackSet.has(curr)){
            return false;
        }
        // node currenlt in visiting state and again introduced by another node
        // which means there is a cycle
        if(greySet.has(curr)){
            return true;
        }
        // add the current node to geySet indicating its currently visiting
        greySet.add(curr);
        // node
        let node = this.getNode(curr);
        
        for(let i=0; i<node.adjacent.length; i++){
            whiteSet.splice(whiteSet.indexOf(node.adjacent[i]),1);

            if(greySet.has(node.adjacent[i])){
                return true;
            }
            
            let r = this.detectCycleDFS(node.adjacent[i].destid,whiteSet,greySet,blackSet);

            if(r){
                return true;
            }
        }
        greySet.delete(curr);
        blackSet.add(curr);

        return false;
    }

    /** 
     * Topolocial Sorting
     */
    topologicalSort(){
        let stack=[];
        let visited = new Set();
        let vertices = Object.keys(this.nodes);

        vertices.forEach(vertex => {
            if(!visited.has(vertex)){
                this.topologicalSortUtil(this.nodes[vertex],stack,visited);
            }
        });

        console.log("Topological Sort Order is:", stack);
    }
    topologicalSortUtil(node,stack,visited){
        
        if(node === null || visited.has(node.id)){
            return;
        }

        visited.add(node.id);

        for(let i=0; i < node.adjacent.length; i++){
            this.topologicalSortUtil(this.nodes[node.adjacent[i].destid],stack,visited);
        }

        stack.unshift(node.id);
    }
}