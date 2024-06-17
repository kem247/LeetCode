/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i = 0; i < flowerbed.length && n !== 0; i++) {
        if(flowerbed[i]) {
            i++;
        } else if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            i++;
            n--;
        }
     }
    return n === 0;
};