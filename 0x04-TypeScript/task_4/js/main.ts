/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cTeacher:Subjects.Teacher = {
    firstName: 'Bella',
    lastName: 'Moturi',
    experienceTeachingC: 10,
}

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

console.log('C++');
console.log(cpp.setTeacher(cTeacher));
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
console.log(java.setTeacher(cTeacher));
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
console.log(react.setTeacher(cTeacher));
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


