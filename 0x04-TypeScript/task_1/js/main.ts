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