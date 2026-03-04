// json stringify parse
const employee = {
    id : 101,
    name: "varsh",
    dept : "IT",
    isActive: true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);