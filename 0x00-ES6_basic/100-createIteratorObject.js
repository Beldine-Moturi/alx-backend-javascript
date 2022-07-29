/*
report =
{
  allEmployees: { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] },
  getNumberOfDepartments: [Function: getNumberOfDepartments]
}
*/
export default function createIteratorObject(report) {
  const customIterator = {
    [Symbol.iterator]() {
      const allEmployees = Object.values(report.allEmployees);
      const employees = [].concat(...allEmployees);
      return {
        next() {
          let result;
          let i = 0;
          if (employees[i] != null) {
            result = { value: employees[i], done: false };
            i += 1;
            return result;
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
  return customIterator;
}
