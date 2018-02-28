module.exports = function solveSudoku(matrix) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                var solutions = [];
                for (var k = 0; k < 9; k++) {
                        solutions.push([matrix[k][i], matrix[i][j], matrix[Math.floor(i / 3) * 3 + k % 3][Math.floor(j / 3) * 3 + Math.floor(k / 3)]]);
                }
                for (var n = 0; n < solutions.length; n++) {
                    matrix[i][j] = solutions[n];
                    solveSudoku(matrix);
                }
            }
        }
    }
    return matrix;
}
