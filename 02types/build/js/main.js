"use strict";
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['a', 'b'];
let numberArray = [1, 2];
// stringArray.push('c'); //err
// numberArray[0] = 3; //err
// Tuple
let tuple1;
tuple1 = ['a', 1];
let users;
users = [[1, 'Jun'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
console.log(tuple2);
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = false;
// let string1: string = unknown // err
let string2 = unknown;
// never 
function throwError() {
    throw new Error("err");
}
