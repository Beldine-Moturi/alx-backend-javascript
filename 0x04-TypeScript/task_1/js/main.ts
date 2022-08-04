interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yearsOfExperience?: number;
    fullTimeEmployee: boolean;
    location: string;
    [attr: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

// functions
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
let printTeacher: printTeacherFunction = (firstName, lastName): string => `${firstName[0]}.${lastName}`;

// classes
interface StudentClassConstructor {
    new (firstName: string, lastName: string):  StudentInterface;
}
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}