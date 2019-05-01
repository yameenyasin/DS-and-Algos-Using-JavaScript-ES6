/**
 * Find an index i where input[i] = i. 
 * input is sorted and has distinct elements
 * @param input 
 */

function findMagicIndex(input){
    if(input === null || input.length === 0){
        return -1;
    }

    return findMagicIndexR(input,0,input.length-1);
}

function findMagicIndexR(input,lo,hi){

    if(hi < lo){
        return -1;
    }

    let mid=Math.floor((lo+hi)/2);

    if(input[mid] === mid){
        return mid;
    } else if(input[mid] < mid){
        return findMagicIndexR(input,mid+1,hi);
    } else{
        return findMagicIndexR(input,lo,mid-1);
    }

}

(function main(){

    let input = [-4,-3,-2,1,2,3,4,7,11,15];

    console.log(findMagicIndex(input)); // 7

    input = [-4,1,7,9,14,17,111,115];

    console.log(findMagicIndex(input)); // 1

})();



/**
 * Run Command
 * node --experimental-modules magicindex.mjs
 */