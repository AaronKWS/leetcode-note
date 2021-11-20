/**
 * 螺旋矩阵 II
 */

// test
const n = 4;

/**
 * 大众解法
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrixV2 = function(n) {
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let startX = 0;
    let startY = 0;
    let loop = n >> 1; // 循环次数
    let mid = loop;
    let offset = 1; // 每次循环，控制遍历长度
    let count = 1; //记数

    while (loop--) {
        let x = startX;
        let y = startY;

        while (y < startY + n - offset) {
            arr[x][y++] = count++;
        }

        while (x < startX + n - offset) {
            arr[x++][y] = count++;
        }

        while (y > startY) {
            arr[x][y--] = count++;
        }

        while (x > startX) {
            arr[x--][y] = count++;
        }

        startX++;
        startY++;

        offset += 2;
    }

    if (n % 2 !== 0) {
        arr[mid][mid] = count;
    }

    return arr;
};

console.log('方式一: ', generateMatrixV2(n));

/**
 * 自创解法（按照力扣排名这种方式比较慢）
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const eleNums = Math.pow(n, 2);
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // 指针
    let pointer = 0;
    let pointerV2 = -1;
    let currentDirection = 'left';

    for (let i = 0; i < eleNums;) {
        if (currentDirection === 'left' && arr[pointer][pointerV2 + 1 === n ? pointerV2 : (pointerV2 + 1)] === 0) {
            if (pointerV2 !== n - 1) {
                pointerV2++;
            }

            arr[pointer][pointerV2] = i + 1;

            i++
        } else {
            currentDirection = 'bottom'
        }

        if (currentDirection === 'bottom' && arr[pointer + 1 === n ? pointer : (pointer + 1)][pointerV2] === 0) {
            if (pointer !== n - 1) {
                pointer++;
            }

            arr[pointer][pointerV2] = i + 1;

            i++
        } else {
            currentDirection = 'right'
        }

        if (currentDirection === 'right' && arr[pointer][pointerV2 - 1 < 0 ? 0 : (pointerV2 - 1)] === 0) {
            if (pointerV2 !== 0) {
                pointerV2--;
            }

            arr[pointer][pointerV2] = i + 1;

            i++
        } else {
            currentDirection = 'top'
        }

        if (currentDirection === 'top' && arr[pointer - 1 < 0 ? 0 : (pointer - 1)][pointerV2] === 0) {
            if (pointer !== 0) {
                pointer--;
            }

            arr[pointer][pointerV2] = i + 1;

            i++
        } else {
            currentDirection = 'left'
        }
    }

    return arr;
};

console.log('方式二：', generateMatrix(n));