// keyof연산자
// 제공된 타입의 키를 추출하여 새로운 Union유형으로 반환
// interface IUser {
//     name: string
//     age: number
//     address: string
// }

// type UserKeys = keyof IUser
// // "name" | "age" | "address"

const user = {
    name: "Jun",
    age: 20,
    address: "seoul"
}

type UserKeys = keyof typeof user

enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole