interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}


class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

const isDirecor = (employee: Director | Teacher): boolean => employee instanceof Director

function executeWork(employee: any) {
    return isDirecor(employee) === true ? employee.workDirectorTasks: employee.workTeacherTasks();
}


// literal types

type Subjects = 'Math' | 'History';
let teachClass = (todayClass: Subjects): string => todayClass === 'Math' ? 'Teaching Math': 'Teaching History'; 