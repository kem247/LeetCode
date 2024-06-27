/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let can, n;
var combinationSum = function(a, target) {
      a.sort((x,y)=>x-y);
      let result = [];
      can = a; n = a.length;
      dfs(target,0, result, []);
      return result;
      
      
};

const dfs = (sum, start, res, path) => {
    if(sum === 0){
        return res.push([...path]);
    }
    
    for(let i = start; i < n; i++) {
        if(can[i] > sum) return;
        path.push(can[i]);
        dfs(sum - can[i], i, res, path);
        path.pop();
    }
};