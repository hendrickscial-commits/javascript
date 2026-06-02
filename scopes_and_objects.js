let globalCount = 15;

function demonstrateLocalScope () {
  let localCount = 7;

  console.log("Locally scoped variable: ", localCount);
  console.log("Globally scoped variable: ",globalCount);
}

demonstrateLocalScope();

function modifyVariables() {
  globalCount = 37;

  let localCount = 23;

  console.log("Modified local scoped variable: ", localCount);
  console.log("Modified global scoped variable: ",globalCount);
}

modifyVariables();

function Student(firstName, lastName, hairType, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.hairType = hairType;
  this.eyeColor = eyeColor;
}

const student1 = new Student("Jenna", "Meyer", "Wavy", "Brown")
const student2 = new Student("Jamie", "Poggenpoel", "Curly", "Brown")
const student3 = new Student("Tristan", "Merrington", "Straight", "Blue")
const student4 = new Student("Joshua", "Hendricks", "Curly", "Brown")
const student5 = new Student("Syd", "Share", "Straight", "Green")
const student6 = new Student("Daniel", "Hector", "Curly", "Brown")
const student7 = new Student("Chris", "Engel", "Straight", "Blue")

console.log(student1, student2, student3, student4, student5, student6, student7);

const universityCourse = {
  id: 1327,
  name: "Cial Hendricks",
  subject: {
    class: "Dramatic Arts",
    teacher: "Proffesor Neil",
    room: 303
  },
  studentCourse: function() {
  return `Student number ${this.id} ${this.name} takes ${this.subject.class} with ${this.subject.teacher} in room ${this.subject.room}.`;
  }
};

console.log(universityCourse.studentCourse());