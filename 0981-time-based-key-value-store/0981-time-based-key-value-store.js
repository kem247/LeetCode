
class TimeMap {
    constructor() {
         this.map = {};
    }
    
    set(key, value, timestamp) {
        const bucket = this.map[key] || []
        
        this.map[key] = bucket
        
        bucket.push([value, timestamp])        
    }
    
    get(key, timestamp, value = '', bucket = this.map[key] || [] ) {
        let [left, right] = [0, bucket.length - 1] ;
        
        while(left <= right) {
            const mid = (left + right) >> 1;
            const [guessValue, guessTimeStamp] = bucket[mid];
            
            const isTargetGreater = guessTimeStamp <= timestamp;
            if(isTargetGreater) {
                value = guessValue;
                left = mid + 1;
            }
            const isTargetLess =  timestamp < guessTimeStamp;
            if(isTargetLess) right = mid - 1;
            
        }
        return value;
    }
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */


/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */