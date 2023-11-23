// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//     return arr.length
// }

// 위의 코드를 제네릭을 이용해서 깔끔하게 표현 가능
// function getArrayLength<T>(arr: T[]): number {
//     return arr.length
// }

// const array1 = [1, 2, 3]
// const array2 = ["a", "b", "c"]
// const array3 = [true, false, true]
// getArrayLength<number>(array1)
// getArrayLength<string>(array2)
// getArrayLength<boolean>(array3)

// interface Vehicle {
//     name: string
//     color: string
//     option: any
// }

// const car: Vehicle = {
//     name: 'Car',
//     color: 'red',
//     option: {
//         price: 1000
//     }
// }
// const bike: Vehicle = {
//     name: 'bike',
//     color: 'green',
//     option: true
// }
// // 위의 코드를 제네릭으로 변환
// interface Vehicle<T> {
//     name: string
//     color: string
//     option: T
// }
// // option은 어떠한 타입도 올 수 있다

// const car: Vehicle<{price: number}> = {
//     name: 'Car',
//     color: 'red',
//     option: {
//         price: 1000
//     }
// }
// const bike: Vehicle<boolean> = {
//     name: 'bike',
//     color: 'green',
//     option: true
// }
// const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
//     return [x, y]
// }

// const arr1 = makeArr<number, number>(4, 5)
// const arr2 = makeArr<string, string>("a", "b")

// const makeArr2 = <X, Y = string>(x: X, y: Y): [X, Y] => {
//     return [x, y]
// }
// const arr3 = makeArr2<string>("a", "b")

// const makeFullName = (obj: {firstName: string, lastName: string}) => {
//     return {
//         ...obj,
//         fullName: obj.firstName + " " + obj.lastName
//     }
// }

// // firstName하고 lastName은 string형으로 고정으로 받고 뒤에 추가로 더 받고 싶을때는 아래와 같이 바꿔준다
// makeFullName({firstName: "jun", lastName: "Doe", location: "Seoul"})

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

// firstName하고 lastName은 string형으로 고정으로 받고 뒤에 추가로 더 받고 싶을때는 아래와 같이 바꿔준다
makeFullName({firstName: "jun", lastName: "Doe", location: "Seoul"})