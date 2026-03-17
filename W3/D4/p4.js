// filter method
// let marks = [75,49,56,70,82,51,68];
// let passed = marks.filter(mark => mark >= 70);

// console.log(marks);
// console.log(passed);

let studntMarks = [
    {name : "varshith",marks: 90},
    {name : "va", marks: 85},
    {name : "var",marks:96}
];

let topper = studntMarks.filter (student => student.marks >= 70).map(student=>student.marks);
console.log(topper);