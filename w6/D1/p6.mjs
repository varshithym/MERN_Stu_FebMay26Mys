// import ES modules

import createInvoiceLabel,{calculateTotal,taxrate} from "./p5.mjs";
const subtotal = 4000;
const total = calculateTotal(subtotal);
const label = createInvoiceLabel("INV-2026-001");
console.log("Invoice Label:",label);
console.log(taxrate);
console.log(total);


