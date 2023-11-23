// extends와 implements의 차이점
// Extends 키워드는 js에서도 사용할 수 있으며 부모 클래스에 있는 프로퍼티나 메소드를 상속해서 사용할 수 있게 해줌
// implements는 js에서 사용불가능 새로운 클래스의 타입 체크를 위해서 사용, 그 클래스의 모양을 정의할 때 사용 (부모 클래스에 있는 프로퍼티나 메소드를 상속받아서 사용하는게 아님)
class Car {
    mileage = 0
    price = 100
    color = "white"

    drive() { return "drive" }

    brake() { return "brake" }
}

interface Part {
    seat: number
    tire: number
}

class Ford implements Car, Part {
    mileage = 1
    price= 2
    color = "white"
    seat = 2
    tire = 3

    drive() { return "drive" }

    brake() { return "brake" }
}

const myFordCar = new Ford()