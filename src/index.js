/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    getLoveTrianglesCount = function (preferences) {
        if (preferences.length % 3 != 0) {
            return 0;
        }
        var trianglesCount = 0;
        for (var i = 0; i < preferences.length; i++) {
            if ((preferences[i + 1] - preferences[i] == 1) && preferences[i + 2] == i + 1) {
                trianglesCount++;
            } else {
                continue;
            }
        }
};
