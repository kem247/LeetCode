/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures, stack = []) {
    const days = Array(temperatures.length).fill(0);
    
    for(let day = 0; day < temperatures.length; day++) {
        while(canShrink(stack, temperatures, day)) {
            const prevColdDay = stack.pop();
            const daysToWait = (day - prevColdDay);
            
            days[prevColdDay] = daysToWait;
        }
    stack.push(day)
     }
    return days;
};

const canShrink = (stack, temperatures, day) => {
    const previousDay = stack[stack.length-1];
    const [prevTemp, currTemp] = [ temperatures[previousDay], temperatures[day]]
    const isWarmer = prevTemp < currTemp;

    return stack.length && isWarmer;
}