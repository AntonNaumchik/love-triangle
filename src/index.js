/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    test = preferences;
    if (test.length % 3 != 0) {
        return 0;
    }
    var trianglesCount = 0;
    for (var i = 0; i < test.length; i++) {
        if ((test[i + 1] - test[i] == 1) && test[i + 2] == i + 1) {
            trianglesCount++;
        } else {
            continue;
            return (trianglesCount);
        }
    }
};
