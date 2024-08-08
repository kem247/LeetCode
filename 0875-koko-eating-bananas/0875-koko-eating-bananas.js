/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let [l, r] = [1, Math.max(...piles)];

    
    while(l < r) {
        const k = (l + r) >> 1;
        const hours = getHourSpent(k, piles);
       
        const isTargetGreater = h < hours;
        if(isTargetGreater) l = k + 1;
        
        const isTargetLess = hours <= h;
        if(isTargetLess) r = k;
    }
    return r;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
     for(const p of piles) {
          hourSpent += Math.ceil(p / mid);
        }
     return hourSpent;
}