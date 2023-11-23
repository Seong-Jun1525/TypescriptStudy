// Partial
// 파셔 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의
// interface Address {
//     email: string
//     address: string
// }

// const me: Partial<Address> = {}// 둘다 없기때문에 interface 지정하면 err. 그래서 Partial을 사용
// const you: Partial<Address> = {email: 'jun@abc.com'} // 하나가 없기때문에 interface 지정하면 err. 그래서 Partial을 사용
// const all: Address = {email: 'jun@abc.com', address: 'jun'} // 둘다 있기때문에 interface 지정 가능

// // Pick
// // 특정 타입에서 몇개의 속성을 선택해서 타입 지정
// interface Todo {
//     title: string
//     description: string
//     completed: boolean
// }
// type TodoPreview = Pick<Todo, "title" | "completed">

// const todo: TodoPreview = {
//     title: "Clean Room",
//     completed: false
// }

// Omit
// 특정 속성만 제거하는 타입
// interface Todo {
//     title: string
//     description: string
//     completed: boolean
//     createdAt: number
// }

// type TodoPreview = Omit<Todo, "description">

// const todo: TodoPreview = {
//     title: "clean room",
//     completed: false,
//     createdAt: 1234
// }

// Exclude
// 일반 Union 유형을 전달한 다음 두 번째 인수에서 제거할 멤버를 지정

// Required
// 원래 유형이 일부 속성을 선택사항으로 정의한 경우에도 객체에 Required 속성이 있는지 확인해야 하는 경우가 있음
// type User = {
//     firstName: string,
//     lastName?: string
// }

// let firstName: User = {
//     firstName: "Jun"
// }

// // lastName을 선택속성으로 만들었어도 Required 유틸리티 타입 안에서는 다 포함해야함
// let secondUser: Required<User> = {
//     firstName: "Kim"
// }

// Record<keys, type>
// 속성 키가 Keys이고 속성값이 Type인 객체 type을 구성함.
// 이 유틸리티는 type의 속성을 다른 type에 매칭하는 데 사용할 수 있음
// interface CatInfo {
//     age: number
//     breed: string
// }

// type CatName = "miffy" | "boris" | "mordred"

// const cats: Record<CatName, CatInfo> = {
//     miffy: {age: 10, breed: "persian"},
//     boris: {age: 5, breed: "maine coon"},
//     mordred: {age: 16, breed: "british shorthair"}
// }

// // ReturnType<T>
// // 함수 T의 반환 타입으로 구성된 타입을 만듬
// type T0 = ReturnType<() => string>
// type T1 = ReturnType<(s: string) => void>

// function fn(str: string) {
//     return str
// }

// const a: ReturnType<typeof fn> = "Hello"
// const b: ReturnType<typeof fn> = true // err
