// Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета 
// площади и периметра. Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и 
// треугольник. Реализуйте методы расчета площади и периметра для каждой фигуры.

//создаем базовый класс Shape 
class Shape {
    constructor() {
    }
    calcArea() {
        return 0;
    }
    calcPerimeter() {
        return 0;
    }
};

//подкласс класса Shape для прямоугольника
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    //переопределение расчета площади
    calcArea() {
        return this.width * this.height;
    }
    //переопределение расчета периметра
    calcPerimeter() {
    return 2 * (this.width + this.height);
    }
}

//подкласс класса Shape для круга
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    //переопределение расчета площади
    calcArea() {
        return Math.PI * this.radius * this.radius;
    }
    //переопределение расчета периметра
    calcPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

//подкласс класса Shape для треугольника
class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }
    //переопределение расчета площади, если известны 3 стороны
    calcArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
    //переопределение расчета периметра
    calcPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
}