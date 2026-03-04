// nested constructor
const student = {
    firstName: "varshith",
    lastName: "YM",
    scores:{
        math: 80,
        science: 83
    },
    hobbies:["reading","singing"],
    fullname: function() {
        return this.firstName+ " "+this.lastName;
    },
    greet() {
        
    }

};
console.log(student.scores.math);
console.log("hi",student.fullname());