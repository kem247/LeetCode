/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const coordinates = getCoordinates(target, position, speed);
    
    return searchDescending(coordinates);
    
    
};


var getCoordinates = (target, position, speed) => position
    .map((_position, index) => [_position, speed[index]])
    .sort(([aPosition], [bPosition]) => bPosition - aPosition)
    .map(([_position, _speed]) => (target - _position) / _speed)


var searchDescending = (coordinates, previous = 0, fleets = 0) => {
        for (const coordinate of coordinates) {                        /* Time O(N) */
        const isPreviousLess = previous < coordinate
        if (!isPreviousLess) continue

        previous = coordinate
        fleets++
        }
    
    return fleets;
}