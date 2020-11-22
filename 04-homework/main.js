const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = [];
const group = [];

// Завдання 1
const pairStudents = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2));
  }
  return pairs;
};

const pairsOfStudents = pairStudents(students);

// Завдання 2
const learnTheme = function (arrTheme) {
  for (let i = 0; i < arrTheme.length; i++) {
    group.push([pairs[i].join(' i '), arrTheme[i]]);
  }
  return group;
};

const groups = learnTheme(themes);

// Завдання 3
const rateStudents = function (arrStudents, arrMarks) {
  const studentMark = [];
  for (let i = 0; i < arrStudents.length; i++) {
    studentMark.push([arrStudents[i], arrMarks[i]]);
  }
  return studentMark;
};

const studentsMarks = rateStudents(students, marks);

// Завдання 4
const rateGroups = function (arrPairs, themes) {
  const projectMark = [];
  for (i = 0; i < arrPairs.length; i++) {
    projectMark.push([
      arrPairs[i].join(' , '),
      themes[i],
      Math.floor(Math.random() * 5) + 1,
    ]);
  }
  return projectMark;
};

const groupMark = rateGroups(pairsOfStudents, themes);

console.log(pairsOfStudents);
console.log(groups);
console.log(studentsMarks);
console.log(groupMark);
