
class MyHashMap {
 constructor() {
     this.data = new Array(100001)
 }
    put(key, val) {
        this.data[key] = val;
    }
    get(key) {
        let val = this.data[key]
        return val !== undefined ? val : -1
    }
    remove(key) {
        delete this.data[key];
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */


/** 
 * @param {number} key
 * @return {number}
 */


/** 
 * @param {number} key
 * @return {void}
 */

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */