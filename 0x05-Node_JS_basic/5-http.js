const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const path = process.argv[2];

// returns the data as a string
function getStudentData(path) {
  let content;
  const data = [];
  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    return ('Fail!');
  }

  const students = content.split(/\r?\n/).filter(Boolean).slice(1);
  let message = `Number of students: ${students.length}`;
  data.push(message);

  const fields = {};
  for (const student of students) {
    const stData = student.split(',');

    const stFirstName = stData[0];
    const stField = stData[stData.length - 1];

    if (fields[stField]) {
      fields[stField][0] += 1;
      fields[stField].push(stFirstName);
    } else {
      fields[stField] = [1, stFirstName];
    }
  }
  for (const [k, v] of Object.entries(fields)) {
    const firstName = v.slice(1).join(', ');
    message = `Number of students in ${k}: ${v[0]}. List: ${firstName}`;
    data.push(message);
  }
  return data.join('\n');
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let data = getStudentData(path);
    if (data === 'Fail!') {
      res.end('Cannot load the database');
    } else {
      data = `This is the list of our students\n${data}`;
      res.end(data);
    }
  }
});
app.listen(port, hostname);

module.exports = app;
