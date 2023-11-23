// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['a', 'b']
let numberArray: ReadonlyArray<number> = [1, 2]

// stringArray.push('c'); //err
// numberArray[0] = 3; //err

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];

let users: [number, string][];
users = [[1, 'Jun'], [2, 'Doe']];

let tuple2: [string, number];
tuple2 = ['a', 1]
tuple2.push(2);
console.log(tuple2);

// any
let any: any = 'abc';
any = 1;
any = []

// unknown
let unknown: unknown = false;
// let string1: string = unknown // err
let string2: boolean = unknown as boolean;

// never 
function throwError(): never {
    throw new Error("err");
}
