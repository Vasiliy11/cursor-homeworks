const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// Функція 1
const getSubjects = ({ subjects }) => {
  return Object.keys(subjects).map(
    (subject) =>
      subject[0].toUpperCase() +
      subject.slice(1).toLowerCase().replace('_', ' ')
  );
};

// Функція 2
const getAverageMark = ({ subjects }) => {
  const marks = Object.values(subjects).flat();
  let sumOfMarks = 0;
  marks.forEach((mark) => (sumOfMarks += mark));
  return +(sumOfMarks / marks.length).toFixed(2);
};

// Функція 3
const getStudentInfo = (student) => {
  const { course, name, averageMark = getAverageMark(student) } = student;
  return {
    course,
    name,
    averageMark,
  };
};

// Функція 4
const getStudentsNames = (students) =>
  students.map((student) => student.name).sort();

// Функція 5
const getBestStudent = (students) => {
  let maxMark = 0;
  let bestStudent = null;
  students.forEach((student) => {
    if (getAverageMark(student) > maxMark) {
      maxMark = getAverageMark(student);
      bestStudent = student.name;
    }
  });
  return bestStudent;
};

//  Функція 6
const calculateWordLetters = (word) => {
  word = [...word];
  const obj = {};
  word.forEach((letter) => {
    obj[letter] ? obj[letter]++ : (obj[letter] = 1);
  });
  return obj;
};

console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('test'));
