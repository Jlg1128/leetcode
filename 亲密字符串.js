/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    let i = 0;
    let temp = s;
    if (s.length !== goal.length) return false;
    while ( i < s.length) {
        if (s[i] === goal[i]) {
            s = s.slice(0, i) + s.slice(i + 1);
            goal = goal.slice(0, i) + goal.slice(i + 1);
        } else {
            i++;
        }
    }
    if (s.length >= 3) {
        return false;
    }
    if (s.length === 2 &&  s.split('').reverse().join('') !== goal) {
        return false
    }
    if (s.length === 0 && temp.length === 2 && temp[0] !== temp[1]) {
        return false
    }
    if (s.length === 0 && temp.length > 2) {
        return false
    }
    return true;
};

console.log(buddyStrings('abcd', 'abcd'));


