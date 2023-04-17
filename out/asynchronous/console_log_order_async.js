"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('top'); // 1
setTimeout(() => {
    console.log('timeout'); // 2
}, 0);
const f = async () => {
    await new Promise((resolve) => {
        console.log('promise'); // 3
        setTimeout(() => {
            console.log('timeout-in-promise'); // 4
            resolve();
        });
    });
    console.log('promise-then'); // 5
};
f();
console.log('bottom'); // 6
