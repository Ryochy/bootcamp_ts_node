"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ここのエラーを解消する
const addOne = (x) => x + 1;
const sumAll = (numbers) => {
    let sum = 0;
    for (const n of numbers) {
        sum += n;
    }
    return sum;
};
// ここがエラーにならないようにする
const total = sumAll([1, 2, 3, 4, 5]);
// ここはエラーになる
// @ts-expect-error Array<string> is not allowed
const totalError1 = sumAll(["a", "b", "c"]);
// @ts-expect-error number is not allowed
const totalError2 = sumAll(1);
const array1_1 = [1];
const array1_2 = [1, 2, 3, 4, 5];
// @ts-expect-error string is not allowed for the `Array1`.
const array1_3 = ["string", "is", "not", "allowed"];
const array2_1 = [1, "string", 2, "is", 3, "allowed"];
// @ts-expect-error boolean is not allowed for the `Array2`.
const array2_2 = [true, false, true, false];
const tuple1_1 = [1, "string is here"];
// @ts-expect-error too many elements.
const tuple1_2 = [1, "this is bad", 3, 4, 5];
// @ts-expect-error types are not matched.
const tuple1_3 = ["string", 1];
