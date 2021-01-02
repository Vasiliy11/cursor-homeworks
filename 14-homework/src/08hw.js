 export class Student {
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

export class BudgetStudent extends Student {
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


