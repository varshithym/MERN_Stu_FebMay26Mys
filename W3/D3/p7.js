//object iteration
const book = {
    title : "JS foe newbies",
    author : "varshith",
    year : 2026
};

for(let key in book){
    console.log(key,":",book[key]);
}
console.log("keys",Object.keys(book));
console.log("values",Object.values(book));
console.log("values",Object.entries(book));