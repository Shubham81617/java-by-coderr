// let a=5;

// a+=5;
// console.log(a)
// a-=5;
// console.log(a)
// a*=5;
// console.log(a)
// a**=5;
// console.log(a)
// a/=5;
// console.log(a)
// a%=5;
// console.log(a)

const a = 5; // Binary: ...00000101
const b = 3; // Binary: ...00000011

// Helper to inspect 8-bit binary representation
const toBin = (num) => (num >>> 0).toString(2).padStart(8, '0');

// 1. Bitwise AND (&): 1 if both are 1
console.log(a & b);        // 1  (binary: 00000001)

// 2. Bitwise OR (|): 1 if at least one is 1
console.log(a | b);        // 7  (binary: 00000111)

// 3. Bitwise XOR (^): 1 if bits differ
console.log(a ^ b);        // 6  (binary: 00000110)

// 5. Left Shift (<<): Shifts bits left; multiplies by 2^n
console.log(a << 2);       // 20 (5 * 2^2)

// 6. Sign-propagating Right Shift (>>): Divides by 2^n (preserves sign)
console.log(a >> 1);       // 2  (Math.floor(5 / 2))