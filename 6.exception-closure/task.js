// Задание 1
function parseCount(number) {
    let num = Number.parseInt(number, 10);
    if (Number.isNaN(num)) {
        const error = new Error ("Невалидное значение");
        throw error;
    }
    return num;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// Задание 2
class Triangle {
    constructor (a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = (this.a + this.b + this.c)/2;
        const area = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}  
