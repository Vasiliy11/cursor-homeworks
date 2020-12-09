class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.isStudying = true;
  }

  get mark() {
    if (this.isStudying) {
      return this.marks;
    } else {
      return null;
    }
  }

  set mark(num) {
    if (this.isStudying) {
      this.marks.push(num);
    }
  }

  getInfo() {
    console.log(
      `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    );
  }

  getAverageMark() {
    if (this.isStudying) {
      return (
        this.marks.reduce((sum, element) => {
          sum += element;
          return sum;
        }, 0) / this.marks.length
      );
    } else {
      return null;
    }
  }

  dismiss() {
    return (this.isStudying = false);
  }

  recover() {
    return (this.isStudying = true);
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName, scholarship) {
    super(university, course, fullName);
    this.scholarship = scholarship;
    setInterval(() => {
      if (this.getAverageMark() >= 4 && this.isStudying) {
        console.log(`Ви отримали ${this.scholarship} грн стипендії`);
      }
    }, 30000);
  }
}

const student1 = new Student('University of Alderaan', 5, 'Boba Fett');
const student2 = new BudgetStudent('Arca Jeth University', 1, 'Jar Jar Binks', 1400 );

student1.getInfo();
student2.getInfo();

student1.dismiss();
student1.set = 5;
console.log(student1.mark);

student2.mark = 2;
console.log(student2.getAverageMark());
