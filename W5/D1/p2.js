const items = {
    item1 : "Laptop",
    item2 : "cloud",
    item3 : "API"
};
for(const[item,itemName] of Object.entries(items)){
    console.log(`${item}: ${itemName}`);
}