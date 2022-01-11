class AlarmClock {
    constructor () {
        this.alarmCollection = [],
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            const err = new Error ('Невозможно идентифицировать будильник. Параметр id не передан.');
            throw err;
        }
        try {
            if (this.alarmCollection.some(item => item.id === id)) {
                console.error('Будильник с таким id уже существует');
            } else {
                this.alarmCollection.push({
                    id: id,
                    time: time,
                    callback: callback
                });
            }
        } catch (err) {
            console.error(err);
        }
    }

    removeClock(id) {
        if (this.alarmCollection.some(item => item.id === id)) {
            this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
            return `Будильник с id = ${id} успешно удален`;
        } else {
            return `Будильника с id = ${id} не существует`;
        }
    }

    getCurrentFormattedTime() {
        let hh = new Date().getHours();
        let mm = new Date().getMinutes();
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return `${hh}:${mm}`;
    }

    start() {
        let checkClock = (alarmClock) => {
            let currentTime = this.getCurrentFormattedTime();
            if (alarmClock.time === currentTime) {
                alarmClock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(this.alarmCollection.forEach(alarmClock => checkClock(alarmClock)), 0);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarmClock => 
            console.log(`Будильник №${alarmClock.id} заведен на ${alarmClock.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let alarm = new AlarmClock();
    alarm.addClock("13:40", () => console.log("Вставай!"), 1);
    alarm.addClock("13:41", () => {console.log("Пора вставать!"); alarm.removeClock(2)}, 2);
    alarm.addClock("13:41", () => console.log("Пора!"));
    alarm.addClock("13:48", () => {
        console.log("Обед!");
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    alarm.addClock("13:45", () => console.log("Вставай уже!"), 1);
    alarm.printAlarms();
    alarm.start();
    console.log(alarm);
}