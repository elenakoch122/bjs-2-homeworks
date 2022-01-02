// Задание 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;        
    }    

    fix() {
        this.state += this.state*1.5;
    }

    set state(newstate) {
        if (newstate < 0) {
            this._state = 0;
        } else if (newstate > 100) {
            this._state = 100;
        } else {
            this._state = newstate;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задание 2
class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {        
        for (const book of this.books) {
            if (Object.entries(book).some(item => item[0] === type && item[1] === value)) {                
                return book;
            }                       
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (bookName === this.books[i].name) {                
                return this.books.splice([i], 1)[0];                
            }
        }        
        return null;
    }
}

// Задание 3
class Student {
    constructor (name, gender, age) {
        this.name = name,
        this.gender = gender,
        this.age = age,
        this.subjects = {}
    }

    setSubject(subjectName) {
        this.subjects[subjectName] = [];
    }

    addMark(mark, subjectName) {
        if (mark > 5 || mark < 1) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        }
        if (this.subjects[subjectName] === undefined) {
            this.subjects[subjectName] = [mark];
        } else {
            this.subjects[subjectName].push(mark);
        }        
    }

    addMarks(subjectName, ...marks) {
        for (const mark of [...marks]) {
            if (mark > 5 || mark < 1) {
                return "Ошибка, оценка должна быть числом от 1 до 5";
            }
        }
        if (this.subjects[subjectName] === undefined) {
            this.subjects[subjectName] = [...marks];
        } else {
            this.subjects[subjectName].push(...marks);
        }
    }

    getAverageBySubject (subjectName) {
        if (this.subjects[subjectName] === undefined) {
            return `Несуществующий предмет "${subjectName}"`;
        }
        let sum = 0, avg = 0;
        for (const mark of this.subjects[subjectName]) {
            sum += mark;
        }
        return avg = sum/this.subjects[subjectName].length;
    }

    getAverage () {
        let sum = 0, avg = 0, arrOfMarks = [];
        for (const subject in this.subjects) {
            arrOfMarks = arrOfMarks.concat(this.subjects[subject]);
        }
        for (const mark of arrOfMarks) {
            sum += mark;
        }
        return avg = sum/arrOfMarks.length;
    }

    exclude (reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}
