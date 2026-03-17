let employee = [
    {name : "varshith", basePay : 32000, bonus : 16000, taxRate : 0.25},
    {name : "suhas", basePay : 30000, bonus : 6000, taxRate : 0.2},
    {name : "raghavendhra", basePay : 25000, bonus : 5000, taxRate : 0.1},
    {name : "shashank", basePay : 0, bonus : 0, taxRate : -1},
    {name : "bethel", basePay : -25, bonus : 0, taxRate : -0.25},
    {name : "jack", basePay : 0, bonus : -10, taxRate : 0.25}
]
let geniuneEmploye = employee.filter (emp => !(emp.basePay <=0 || emp.bonus <= 0 || emp.taxRate <= 0));
console.log(geniuneEmploye);

let netPayReport = geniuneEmploye.map (emp => {
    let gross = emp.basePay + emp.bonus;
    let netPay = gross - (gross * emp.taxRate);
    return {name : emp.name, netPay:netPay };
});
console.log("net pay report",netPayReport);

let companyNetPayOUT = netPayReport.reduce((sum, emp) => sum + emp.netPay,0);
console.log("company payout :-",companyNetPayOUT)


