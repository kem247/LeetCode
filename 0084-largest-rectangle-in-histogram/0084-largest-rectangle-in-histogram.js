/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const {stack, maxArea} = fillStack(heights);
    
    return getMaxArea(heights, stack, maxArea);
};

const fillStack = (heights, stack = [], maxArea = 0) => {
    for(let index = 0; index < heights.length; index++) {
        let start = index;
        
        const isCurrentHeightLess = ([prevIndex, prevHeight], currHeight ) =>  currHeight < prevHeight;
        const canShrink = () => isCurrentHeightLess(stack[stack.length - 1], heights[index]);
        while (stack.length && canShrink()) {
            const [_index,_height] = stack.pop()
            const width = index - _index
            const area = width * _height
            
            maxArea = Math.max(maxArea,area)
            start = _index;
        }
        stack.push([start, heights[index]])
    }
    return { stack, maxArea }
}

const getMaxArea = (heights, stack, maxArea) => {
    for (const [index, height] of stack) {
        const width = heights.length - index;
        const area = width * height;
        
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}
      


