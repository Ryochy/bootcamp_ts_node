"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('top'); // 1
setTimeout(() => {
    console.log('timeout'); // 2
}, 0);
new Promise((resolve) => {
    console.log('promise'); // 3
    setTimeout(() => {
        console.log('timeout-in-promise'); // 4
        resolve();
    });
}).then(() => {
    console.log('promise-then'); // 5
});
console.log('bottom'); // 6
