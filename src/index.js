/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    // your implementation
    test = preferences;
    count = 0;
    for (var i = 0; i < test.length; i++) {
        if ((test[test[test[i] - 1] - 1] - 1 == i) && (test[i] != test[test[i] - 1]) && (test[test[test[i] - 1] - 1] != test[test[i] - 1])) {
            count++;
        }
    }
    return (count / 3);
};
