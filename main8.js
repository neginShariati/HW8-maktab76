function Student(name, gender) {
  this.name = name;
  this.gender = gender;
}

let newStudent = new Student("mahsa", "female");
console.log(newStudent.name);
console.log(newStudent.gender);

Student.prototype = {
  age: 28,
  constructor: Student,
};

let studObj = new Student();
console.log(studObj.age);

Student.prototype = {
  age: 20,
};
let studObj1 = new studObj.constructor("mohammad", "male");
console.log(studObj1);
