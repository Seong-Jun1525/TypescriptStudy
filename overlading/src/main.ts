function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any): any {
    return a + b
}

add("hello", "world")
// add("hello", 1) // err

// function saySomething(word: string | string[]): string {
//     if(typeof word === "string")
//         return word
//     else if(Array.isArray(word))
//         return word.join(" ")
//     throw new Error("err");
    
// }

// saySomething(['hello', 'world'])

// 위의 코드를 함수 오버로딩하기
// function saySomething(word: string): string
// function saySomething(word: string[]): string
// function saySomething(word: any): any {
//     if(typeof word === "string")
//         return word
//     else if(Array.isArray(word))
//         return word.join(" ")
//     throw new Error("err");
// }

// saySomething(['hello', 'world'])

// class Post {
//     private id: number = 0;
//     protected title: string = "";
//     constructor(id: number, title: string) {
//         this.id = id;
//         this.title = title;
//     }
//     getPost() {
//         return `postId ${this.id}, postTitle: ${this.title}`;
//     }
// }
// => Post를 아래와 같이 바꿔줄수있다
// class Post {
//     constructor(
//         // 여기서는 public도 명시해야 함
//         private id: number = 0,
//         protected title: string = ''
//     ) { }
//     getPost() {
//         return `postId ${this.id}, postTitle: ${this.title}`;
//     }
// }

// class PostB extends Post {
//     getPost() {
//         return this.title
//     }
// }

// const post: Post = new Post(1, "title 1")

// console.log(post.id)