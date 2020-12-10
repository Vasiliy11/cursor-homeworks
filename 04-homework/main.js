const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів','Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

// Завдання 1
const pairStudents = (arr) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push([students[i], students[i + 1]]);
  }
  return pairs;
};

const pairsOfStudents = pairStudents(students);

// Завдання 2
const learnTheme = (arrTheme, arrPairs) => {
  const group = [];
  const newPairs = [...arrPairs];
  newPairs.forEach((pair, index) => {
    group[index] = [pair.join(' і '), arrTheme[index]];
  });
  return group;
};

const groups = learnTheme(themes, pairsOfStudents);

// Завдання 3
const rateStudents = (arrStudents, arrMarks) => {
  const studentMark = [];
  arrStudents.forEach(
    (student, index) => (studentMark[index] = [student, arrMarks[index]])
  );
  return studentMark;
};

const studentsMarks = rateStudents(students, marks);

// Завдання 4
const rateGroups = function (arrPairs, themes) {
  const projectMark = [];
  arrPairs.forEach(
    (pair, index) =>
      (projectMark[index] = [
        pair.join(' і '),
        themes[index],
        Math.floor(Math.random() * 5) + 1,
      ])
  );
  return projectMark;
};

const groupMark = rateGroups(pairsOfStudents, themes);

console.log(pairsOfStudents);
console.log(groups);
console.log(studentsMarks);
console.log(groupMark);
