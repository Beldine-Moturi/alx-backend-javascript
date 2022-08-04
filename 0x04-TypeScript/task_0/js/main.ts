interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Bella',
    lastName: 'Moturi',
    age: 23,
    location: 'Nakuru',
}
const student2: Student = {
    firstName: 'Beldine',
    lastName: 'Kwamboka',
    age: 23,
    location: 'Nairobi',
}
const studentsList = new Array(student1, student2);

function createTable() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Location";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);


    // Creating and adding data to rows of the table
    for (let student of studentsList) {
        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = `${student.firstName}`;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = `${student.location}`;

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        tbody.appendChild(row);
    }
    return table;
}

document.body.appendChild(createTable());