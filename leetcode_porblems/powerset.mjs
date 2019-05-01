function findPowerSet(input){
    let result=[[]]; // initialize result with default empty set

    input.forEach(el => {

        let len = result.length;

        for(let i=0; i < len; i++){
            let set = Array.from(result[i]);
            set.push(el);
            result.push(set);
        }
    });

    return result;
}
(function main(){
    let input = [1,2,3];

    console.log(findPowerSet(input));
})();

/**
 * Run Command
 * node --experimental-modules powerset.mjs
 */