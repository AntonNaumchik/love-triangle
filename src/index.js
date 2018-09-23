/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    // your implementation
    test = preferences;
    var trianglesCount = 0;
    test.sort(function (a, b) {
        return a - b;
        for (var i = 0; i < test.length; i++) {
            if ((test[i + 1] - test[i] == 1) && test[i + 2] == i + 1) {
                trianglesCount++;
            } else {
                continue;
            }
        }
    })
    return (trianglesCount);
}
